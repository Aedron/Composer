
import parser from './parser';
import position from '../src/lib/cursorPositionLib'



const log = console.log
const err = e => { throw new Error(e) }


export default function (config) {
    if (!config.el) return err(`Must provide an 'el'`)
    const editor = document.createElement('div')
    editor.innerHTML = '<div>Editor here...</div>'
    editor.className = 'composeContainer'
    editor.contentEditable = true
    editor.addEventListener("input", this::handleEdit)
    config.el.appendChild(editor)

    this.dom = editor
    parser(this.dom.innerHTML)
    // this.dom.innerHTML = parser(this.dom.innerHTML)
    this.dom.focus()
    // Object.defineProperties(this, {
    //     rawData: {
    //         get: () => parser(this.dom)
    //     }
    // });
}


function handleEdit() {
    parser(this.dom.innerHTML)
    // const pos = position.get(this.dom)
    // this.dom.innerHTML = parser(this.dom.innerHTML)
    // position.set(this.dom, pos)
}
