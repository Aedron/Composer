export default function (line) {
    parserH(line);
}
function parserH(line) {
    var r = /^#+\s/;
    var s = line.innerHTML
        .replace(/nbsp;/g, ' ')
        .replace(/#&/g, '#')
        .replace(/(<([^>]+)>)/ig, '');
    var result = r.exec(s);
    if (!result)
        return line.className = '';
    var tag = result[0];
    console.log(tag);
    line.className = "h" + (tag.length - 1);
    line.innerHTML = s.replace(tag, "<span class=\"tag\">" + tag + "</span>");
}
//# sourceMappingURL=index.js.map