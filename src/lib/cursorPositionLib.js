
export default {
    get: get,
    set: set
}



function get(element) {
    let sel
    let caretOffset = 0
    const doc = element.ownerDocument || element.document
    const win = doc.defaultView || doc.parentWindow

    if (typeof win.getSelection !== "undefined") {
        sel = win.getSelection()
        if (sel.rangeCount > 0) {
            const range = win.getSelection().getRangeAt(0)
            const preCaretRange = range.cloneRange()
            preCaretRange.selectNodeContents(element)
            preCaretRange.setEnd(range.endContainer, range.endOffset)
            caretOffset = preCaretRange.toString().length
        }
    } else if ((sel = doc.selection) && sel.type !== "Control") {
        const textRange = sel.createRange()
        const preCaretTextRange = doc.body.createTextRange()
        preCaretTextRange.moveToElementText(element)
        preCaretTextRange.setEndPoint("EndToEnd", textRange)
        caretOffset = preCaretTextRange.text.length
    }

    return caretOffset
}



function set(element, pos){
    for(let node of element.childNodes){
        if(node.nodeType === 3){
            if(node.length >= pos) {
                const range = document.createRange()
                const sel = window.getSelection()
                range.setStart(node,pos)
                range.collapse(true)
                sel.removeAllRanges()
                sel.addRange(range)
                return -1
            }
            else pos -= node.length
        }
        else {
            pos = set(node, pos)
            if (pos === -1) return -1
        }
    }
    return pos
}