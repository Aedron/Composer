
import parse from './parser/index.ts'


interface Config {
    el: HTMLElement
}

export default function (el: HTMLElement, config?: Config) {
    const content = document.createElement('div')
    content.innerHTML = 'Edit Here...'
    el.contentEditable = 'true'
    el.appendChild(content)
    content.focus()
    window.addEventListener('input', handleChange.bind(this))

    this.dom = el
    Object.defineProperty(this, 'selection', {
        get: () => window.getSelection()
    })
    Object.defineProperty(this, 'curPos', {
        get: () => this.selection.getRangeAt(0).endOffset,
        set: v => {
            for (let node of this.focusDom.childNodes)
                v >= node.length ?
                    v -= node.length :
                    this.selection.getRangeAt(0).setStart(this.focusDom, v)
        }
    })
    Object.defineProperty(this, 'focusNode', {
        get: () => this.selection.focusNode
    })
    Object.defineProperty(this, 'focusDom', {
        get: () => {
            let dom = this.focusNode.parentElement;
            while (dom.parentElement !== this.dom)
                dom = dom.parentElement
            return dom
        }
    })
}


function handleChange() {
    if (this.focusDom.innerHTML === '<br>') return
    else {
        const curPos = this.curPos
        parse(this.focusDom)
        this.curPos = curPos
    }
}
