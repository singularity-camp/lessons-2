"use strict";
exports.__esModule = true;
var Input = /** @class */ (function () {
    function Input() {
        this.el = null;
    }
    Input.prototype.onInit = function () {
        this.el = document.getElementById("input");
    };
    Input.prototype.onDestroy = function () {
        this.el = null;
    };
    Input.prototype.getValue = function () {
        var _a;
        return (_a = this.el) === null || _a === void 0 ? void 0 : _a.value;
    };
    Input.prototype.setValue = function () {
        var _a;
        if ((_a = this.el) === null || _a === void 0 ? void 0 : _a.value) {
            this.el.value = "";
        }
    };
    return Input;
}());
exports["default"] = Input;
