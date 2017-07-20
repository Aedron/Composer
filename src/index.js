
import parser from './lib/parser';


const log = console.log
const err = e => { throw new Error(e) }



export default function (config) {
    if (!config.el) return err(`Must provide an 'el'`)
    const editor = document.createElement('div')
    editor.innerHTML = '<div>Editor here...</div>'
    editor.className = 'composeContainer'
    editor.contentEditable = true
    editor.addEventListener("input", this::handleEdit)
    document.querySelector(config.el).appendChild(editor)

    this.rawData = parser(editor)
}


function handleEdit(e) {
    this.rawData = parser(e.target)
}
