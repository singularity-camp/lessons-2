"use strict";
exports.__esModule = true;
var TodoList_1 = require("./model/TodoList");
var view_1 = require("./view/");
var todos = new TodoList_1["default"]();
var view = new view_1["default"](todos);
function handleLoad() {
    view === null || view === void 0 ? void 0 : view.onInit();
    todos.addRenderer(view.renderTodos);
    todos.fetchAllTodos();
}
function handleUnload() {
    view === null || view === void 0 ? void 0 : view.onDestroy();
}
window.addEventListener("load", handleLoad);
window.addEventListener("unload", handleUnload);
