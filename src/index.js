"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(el, config) {
    var content = document.createElement('div');
    content.contentEditable = 'true';
    el.appendChild(el);
    this.composer = {
        dom: el,
        focusDom: content,
    };
    !this.$ && (this.$ = this.composer);
}
exports.default = default_1;
