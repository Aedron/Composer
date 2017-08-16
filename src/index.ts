
import parse from './parser/index.ts'


interface Config {
    el: HTMLElement
}

export default function (el: HTMLElement, config?: Config) {
    const content = document.createElement('div')
    content.innerHTML = 'Edit Here...'
    el.className = el.className ? `${el.className} composeContainer` : 'composeContainer'
    el.contentEditable = 'true'
    el.appendChild(content)
    content.focus()
    window.addEventListener('input', handleChange.bind(this))

    this.dom = el
    injectProps.bind(this)()
}


function handleChange() {
    if (this.focusDom.innerHTML === '<br>') return
    else {
        const curPos = this.curPos
        parse(this.focusDom)
        this.curPos = curPos
    }
}


function injectProps() {
    Object.defineProperty(this, 'selection', {
        get: () => this.dom.focus() || window.getSelection()
    })
    Object.defineProperty(this, 'curPos', {
        get: () => {
            let offset = 0;
            const nodes = this.focusDom.childNodes;
            for (let node of nodes) {
                if (node === this.focusNode)
                    return offset + this.selection.getRangeAt(0).endOffset
                else offset += (node.innerText || node).length
            }
            return offset
        },
        set: v => {
            const range = document.createRange()
            for (let node of this.focusDom.childNodes) {
                const length = (node.innerText || node).length
                console.log(v, length)
                if (v < length) {
                    range.setStart(this.focusNode, v)
                    range.collapse(true)
                    this.selection.removeAllRanges()
                    this.selection.addRange(range)
                    return this.dom.focus()
                } else if (v === length) v = 0
                else v -= length
            }
        }
    })
    Object.defineProperty(this, 'focusNode', {
        get: () => this.selection.focusNode
    })
    Object.defineProperty(this, 'focusDom', {
        get: () => {
            let dom = this.focusNode;
            while (dom.parentElement !== this.dom)
                dom = dom.parentElement
            return dom
        }
    })
}
