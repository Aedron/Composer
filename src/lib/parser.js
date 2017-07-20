
export default function (content) {
    const data = Array.from(content.children)
    data.forEach(parserLine)
    return content;
}



function parserLine(line) {
    console.log(line)
}


function parserH(line) {
    const slice = line.innerHTML.split(' ');
    const tag = slice[0];

    if (['#', '##', '###', '####', '#####'].includes(tag)) {
        line.className = `h${}`
    }

    slice.shift();
    const content = slice.join(' ');

    const num = tag.length;
    return `<h${num}>${content}</h${num}>`
}