
interface Config {

}

export default function (el: HTMLElement, config?: Config) {
    const content = document.createElement('div')
    content.contentEditable = 'true'
    el.appendChild(el)

    this.composer = {
        dom: el,
        focusDom: content,

    }
    !this.$ && (this.$ = this.composer)
}