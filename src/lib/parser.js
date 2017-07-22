"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(content) {
    if (content.innerHTML === '')
        return (content.innerHTML = '<div><br/></div>');
    var data = Array.from(content.children);
    data.forEach(parserLine);
    return content;
}
exports.default = default_1;
function parserLine(line) {
    parserH(line);
}
function parserH(line) {
    var slice = line.innerHTML.split(' ');
    if (slice.length < 2)
        return;
    var tag = slice.shift();
    var content = slice.join(' ');
    if (['#', '##', '###', '####', '#####'].includes(tag)) {
        // line.className = `tag h${tag.length}`
        line.innerHTML = "<span class=\"tag h" + tag.length + "\">" + tag + "</span><span class=\"h" + tag.length + "\">" + content + "</span>";
        console.log(line);
    }
}
