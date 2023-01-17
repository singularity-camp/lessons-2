"use strict";
exports.__esModule = true;
var ItemInput = /** @class */ (function () {
    function ItemInput(text, ind) {
        this.text = text;
        this.ind = ind;
        this.el = null;
    }
    ItemInput.prototype.onDestroy = function () {
        this.el = null;
    };
    ItemInput.prototype.render = function () {
        this.el = document.createElement("input");
        this.el.value = this.text;
        this.el.classList.add("input");
        this.el.setAttribute("data-ind", this.ind.toString());
        return this.el;
    };
    return ItemInput;
}());
exports["default"] = ItemInput;
