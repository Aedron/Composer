
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
    // window.addEventListener('keydown', handleKeyDown.bind(this))
    window.addEventListener('input', handleKeyUp.bind(this))

    this.dom = el
    this.lastCurPos = null;
    injectProps.bind(this)()
}


function handleKeyDown(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) return;
    this.lastCurPos = this.curPos;
}

function handleKeyUp() {
    if (this.focusDom.innerHTML === '<br>') return this.lastCurPos = null;
    else {
        const pos = this.curPos;
        parse(this.focusDom)
        this.curPos = pos;
    }
}
