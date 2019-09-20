import * as fs from 'fs'
import * as path from 'path'
import * as Linq from 'linq'
import AbiManager from '../utils/abi_manager'


class GenManager {

    private static contracts = ['Daos', 'Organization', 'OrgToken']

    static gen() {
        this.contracts.forEach(name => {
            new Generator(name).gen()
        })
    }
}

class Generator {

    name: string
    abi: any

    private contractTemplate: string
    private viewFunctionTemplate: string
    private notViewFunctionTemplate: string

    constructor(name: string) {
        this.name = name
        this.abi = AbiManager.getAbiAndBytecode(name).abi

        this.contractTemplate = String(fs.readFileSync(path.join(__dirname, 'resources/contract_template.txt')))
        this.viewFunctionTemplate = String(fs.readFileSync(path.join(__dirname, 'resources/function_view_template.txt')))
        this.notViewFunctionTemplate = String(fs.readFileSync(path.join(__dirname, 'resources/function_not_view_template.txt')))
    }

    private get content(): string {
        return this.contractTemplate
            .replace(/@contract/ig, this.name)
            .replace('@functions', this.functions)
    }

    private get functions(): string {
        let s = ''
        this.abi.forEach(ele => {
            if (ele.type == 'function') {
                if (ele.stateMutability == 'view') {
                    s += '\n' + this.genViewFunction(ele)
                } else {
                    s += '\n' + this.genNotViewFunction(ele)
                }
            }
        })
        return s
    }

    private genViewFunction(ele) {
        return this.viewFunctionTemplate
            .replace(/@function/ig, ele.name)
            .replace('@params_def', this.paramsDef(ele))
            .replace('@params_list', this.paramsList(ele))
    }

    private genNotViewFunction(ele) {
        let n = ele.name.substr(0, 1).toUpperCase() + ele.name.substr(1)
        return this.notViewFunctionTemplate
            .replace(/@function_name/ig, n)
            .replace(/@function/ig, ele.name)
            .replace('@params_def', this.paramsDef(ele))
            .replace('@params_list', this.paramsList(ele))
    }

    private paramsDef(ele) {
        let r = []
        let ai = 0
        ele.inputs.forEach(i => {
            let n = i.name
            if (n.length == 0) {
                n = 'arg' + (ai++)
            }
            if (i.type.endsWith('[]')) {
                r.push(n + ': string[]')
            } else {
                r.push(n + ': string')
            }
        })
        return r.join(', ')
    }

    private paramsList(ele) {
        let r = []
        let ai = 0
        ele.inputs.forEach(i => {
            let n = i.name
            if (n.length == 0) {
                n = 'arg' + (ai++)
            }
            r.push(n)
        })
        return r.join(', ')
    }

    private get fileName(): string {
        let a = this.name.match(/[A-Z]+?[^A-Z]*/g)
        let r = []
        a.forEach(w => {
            r.push(w.toLocaleLowerCase())
        })
        return r.join('_')
    }

    gen() {
        let p = path.join(__dirname, '../', this.fileName + '.ts')
        fs.writeFileSync(p, this.content)
    }
}

export default GenManager
