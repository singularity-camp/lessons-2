"use strict";
exports.__esModule = true;
var ItemText = /** @class */ (function () {
    function ItemText(todo, ind, handleClick) {
        this.todo = todo;
        this.ind = ind;
        this.el = null;
        this.handleClick = handleClick;
    }
    ItemText.prototype.onDestroy = function () {
        var _a;
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.removeEventListener("click", this.handleClick);
        this.el = null;
    };
    ItemText.prototype.render = function () {
        if (this.todo.isCompleted) {
            this.el = document.createElement("del");
        }
        else {
            this.el = document.createElement("span");
        }
        this.el.textContent = this.todo.text;
        this.el.classList.add("text");
        this.el.setAttribute("data-ind", this.ind.toString());
        -this.el.addEventListener("click", this.handleClick);
        return this.el;
    };
    return ItemText;
}());
exports["default"] = ItemText;
