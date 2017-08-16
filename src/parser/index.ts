
export default function (line: HTMLElement) {
    parserH(line)
}


function parserH(line: HTMLElement) {
    const r = /^#+\s/;
    const s = line.innerHTML
        .replace(/nbsp;/g, ' ')
        .replace(/#&/g, '#')
        .replace(/(<([^>]+)>)/ig, '')
    const result = r.exec(s)
    if (!result) return line.className = ''
    const tag = result[0]
    // console.log(tag)

    line.className = `h${tag.length - 1}`
    line.innerHTML = s.replace(tag, `<span class="tag">${tag}</span>`)
}
