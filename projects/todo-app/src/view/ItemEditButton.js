"use strict";
exports.__esModule = true;
var ItemEditButton = /** @class */ (function () {
    function ItemEditButton(ind, handleClick) {
        this.ind = ind;
        this.el = null;
        this.handleClick = handleClick;
    }
    ItemEditButton.prototype.onDestroy = function () {
        var _a;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", this.handleClick);
        this.el = null;
    };
    ItemEditButton.prototype.render = function () {
        this.el = document.createElement("button");
        this.el.textContent = "Edit";
        this.el.classList.add("edit");
        this.el.setAttribute("data-ind", this.ind.toString());
        this.el.addEventListener("click", this.handleClick);
        return this.el;
    };
    return ItemEditButton;
}());
exports["default"] = ItemEditButton;
