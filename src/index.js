"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(el, config) {
    var content = document.createElement('div');
    content.contentEditable = 'true';
    content.innerHTML = 'Edit Here...';
    el.appendChild(content);
    content.focus();
    window.addEventListener('keupress', handleEdit.bind(this));
    this.dom = el;
    this.focusDom = content;
    Object.defineProperty(this, 'range', {
        get: function () { return window.getSelection().selObj; }
    });
    Object.defineProperty(this, 'curPos', {
        get: function () {
            return this.range.getRangeAt(0);
        },
        set: function (v) {
            this.range.setStart(v);
        }
    });
    window.composer = this;
    !window.$ && (window.$ = this);
}
exports.default = default_1;
function handleEdit(e) {
    console.log(e);
}
function appendLine() {
}
function handleEditLine(e) {
}
