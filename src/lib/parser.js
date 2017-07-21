
export default function (content) {
    if (content.innerHTML === '') return (content.innerHTML = '<div><br/></div>')
    const data = Array.from(content.children)
    data.forEach(parserLine)
    return content
}



function parserLine(line) {
    parserH(line)
}


function parserH(line) {
    const slice = line.innerHTML.split(' ')
    if (slice.length < 2) return
    const tag = slice.shift()
    const content = slice.join(' ')

    if (['#', '##', '###', '####', '#####'].includes(tag)) {
        // line.className = `tag h${tag.length}`
        line.innerHTML = `<span class="tag h${tag.length}">${tag}</span><span class="h${tag.length}">${content}</span>`
        console.log(line)
    }
}
