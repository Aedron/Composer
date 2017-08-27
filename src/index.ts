
import injectProps from './prototype/index.ts'
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
    window.addEventListener('input', handleKeyUp.bind(this))

    this.dom = el
    this.lastCurPos = null;
    injectProps.bind(this)()
}


function handleKeyUp() {
    if (checkEmpty(this.dom)) return
    else {
        const pos = this.curPos;
        parse(this.focusDom)
        this.curPos = pos;
    }
}

function checkEmpty(dom: HTMLElement) {
    Array.from(dom.children).forEach(d => {
        if (d.innerHTML === '' || d.innerHTML === '')
            dom.removeChild(d)
    })
    if (dom.innerHTML === '' || dom.innerHTML === '<br>') {
        dom.innerHTML = '<br>'
        dom.focus()
    }
}