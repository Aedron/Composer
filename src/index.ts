
interface Config {

}

export default function (el: HTMLElement, config?: Config) {
    const content = document.createElement('div')
    content.contentEditable = 'true'
    content.innerHTML = 'Edit Here...'
    el.appendChild(content)
    content.focus()
    window.addEventListener('keupress', handleEdit.bind(this))

    this.dom = el
    this.focusDom = content
    Object.defineProperty(this, 'range', {
        get: () => window.getSelection().selObj
    })
    Object.defineProperty(this, 'curPos', {
        get: function() {
            return this.range.getRangeAt(0)
        },
        set: function(v) {
            this.range.setStart(v)
        }
    })

    window.composer = this
    !window.$ && (window.$ = this)
}


function handleEdit(e) {
    console.log(e)
}

function appendLine() {

}

function handleEditLine(e) {

}
