"use strict";
exports.__esModule = true;
var ItemSaveButton = /** @class */ (function () {
    function ItemSaveButton(ind, handleClick) {
        this.ind = ind;
        this.el = null;
        this.handleClick = handleClick;
    }
    ItemSaveButton.prototype.onDestroy = function () {
        var _a;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", this.handleClick);
        this.el = null;
    };
    ItemSaveButton.prototype.render = function () {
        this.el = document.createElement("button");
        this.el.textContent = "Save";
        this.el.classList.add("save");
        this.el.setAttribute("data-ind", this.ind.toString());
        this.el.addEventListener("click", this.handleClick);
        return this.el;
    };
    return ItemSaveButton;
}());
exports["default"] = ItemSaveButton;
