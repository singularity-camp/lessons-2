"use strict";
exports.__esModule = true;
var ItemDeleteButton = /** @class */ (function () {
    function ItemDeleteButton(ind, handleClick) {
        this.ind = ind;
        this.el = null;
        this.handleClick = handleClick;
    }
    ItemDeleteButton.prototype.onDestroy = function () {
        var _a;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", this.handleClick);
        this.el = null;
    };
    ItemDeleteButton.prototype.render = function () {
        this.el = document.createElement("button");
        this.el.textContent = "Delete";
        this.el.classList.add("delete");
        this.el.setAttribute("data-ind", this.ind.toString());
        this.el.addEventListener("click", this.handleClick);
        return this.el;
    };
    return ItemDeleteButton;
}());
exports["default"] = ItemDeleteButton;
