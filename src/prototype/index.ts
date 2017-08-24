
export default function () {
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
            for (let node of this.focusDom.childNodes) {
                const length = (node.innerText || node).length
                if (v < length)
                    _setPos.bind(this)(node, v)
                else if (v === length) v = 0
                else v -= length
            }
            return this.dom.focus()
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


function _setPos(node: Node, pos: number) {
    const range = document.createRange()
    range.setStart(node, pos)
    range.collapse(true)
    this.selection.removeAllRanges()
    this.selection.addRange(range)
    return this.dom.focus()
}
