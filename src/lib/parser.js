
export default function (dom) {
    if (dom.innerHTML === '') return (dom.innerHTML = '<div><br/></div>')
    const data = Array.from(dom.children)
    data.forEach(parserLine)
    console.log(getCaretCharacterOffsetWithin(dom))
    return dom
}



function parserLine(line) {
    parserH(line)
}


function parserH(line) {
    const slice = line.innerHTML.split(' ')
    if (slice.length < 2) return
    const tag = slice.shift()
    const content = slice.join(' ')

    if (['#', '##', '###', '####', '#####', '######'].includes(tag)) {
        line.className = `tag h${tag.length}`
        // line.innerHTML = `<span class="tag h${tag.length}">${tag}</span><span class="h${tag.length}">${content}</span>`
    }
}


function getCaretCharacterOffsetWithin(element) {
    let caretOffset = 0;
    let sel;
    const doc = element.ownerDocument || element.document;
    const win = doc.defaultView || doc.parentWindow;
    if (typeof win.getSelection != "undefined") {
        sel = win.getSelection();
        if (sel.rangeCount > 0) {
            const range = win.getSelection().getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
        }
    } else if ((sel = doc.selection) && sel.type !== "Control") {
        let textRange = sel.createRange();
        let preCaretTextRange = doc.body.createTextRange();
        preCaretTextRange.moveToElementText(element);
        preCaretTextRange.setEndPoint("EndToEnd", textRange);
        caretOffset = preCaretTextRange.text.length;
    }
    return caretOffset;
}
