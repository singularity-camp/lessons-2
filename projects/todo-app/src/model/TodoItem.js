"use strict";
exports.__esModule = true;
var TodoItem = /** @class */ (function () {
    function TodoItem(text, isCompleted) {
        if (isCompleted === void 0) { isCompleted = false; }
        this.text = text;
        // NOTE: view, edit
        this.mode = "view";
        this.isCompleted = isCompleted;
    }
    return TodoItem;
}());
exports["default"] = TodoItem;
