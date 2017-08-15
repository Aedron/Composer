export default function (el, position, onChange) {
    var _this = this;
    _a = [position.x, position.y], this.x = _a[0], this.y = _a[1];
    this.get = function () { return ({ x: _this.x, y: _this.y }); };
    this.set = function (position) {
        return _a = [position.x, position.y], _this.x = _a[0], _this.y = _a[1], _a;
        var _a;
    };
    var _a;
}
//# sourceMappingURL=cursorPos.js.map