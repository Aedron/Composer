
export default function (innerHTML) {
    return innerHTML === '' ?
        '<div><br/></div>' :
        parser(innerHTML)
}



function parser(html) {
    html = html
        .replace(/<div(\s|.)*?\>/g, '')
        .replace(/<br\>/, '')
        .split(/<\/div\>/)
        // .split(/<br\>/)
    console.log(html)
    // return html
}


function splitLine() {

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
