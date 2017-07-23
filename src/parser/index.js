
import position from '../lib/cursorPositionLib'


export default function (dom) {
    if (dom.innerHTML === '') return (dom.innerHTML = '<div><br/></div>')
    const pos = position.get(dom)
    console.log(pos)
    const data = Array.from(dom.children)
    data.forEach(parserLine)
    position.set(dom, pos)
    return dom
}



function parserLine(line) {
    parserH(line)
}


function parserH(line) {
    const r = /^#+\s/;
    const s = line.innerHTML
        .replace(/nbsp;/g, ' ')
        .replace(/#&/g, '#')
        .replace(/\<span class="tag">/, '')
        .replace(/\<\/span\>/, '')
    const result = r.exec(s)
    if (!result) return line.className = ''
    const tag = result[0]

    line.className = `h${tag.length - 1}`
    line.innerHTML = s.replace(tag, `<span class="tag">${tag}</span>`)
}
