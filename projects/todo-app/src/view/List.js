"use strict";
exports.__esModule = true;
var Item_1 = require("./Item");
var List = /** @class */ (function () {
    function List(todos) {
        var _this = this;
        this.handleTextClick = function (event) {
            var currentTarget = event.currentTarget;
            if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
                return;
            }
            var dataset = currentTarget.dataset;
            var ind = Number(dataset.ind);
            _this.todos.toggleState(ind);
        };
        this.handleDeleteClick = function (event) {
            var currentTarget = event.currentTarget;
            if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
                return;
            }
            var dataset = currentTarget.dataset;
            var ind = Number(dataset.ind);
            _this.todos["delete"](ind);
        };
        this.handleEditClick = function (event) {
            var currentTarget = event.currentTarget;
            if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
                return;
            }
            var dataset = currentTarget.dataset;
            var ind = Number(dataset.ind);
            _this.todos.updateMode(ind, "edit");
        };
        this.handleSaveClick = function (event, newText) {
            var currentTarget = event.currentTarget;
            if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
                return;
            }
            var dataset = currentTarget.dataset;
            var ind = Number(dataset.ind);
            _this.todos.update(ind, newText);
            _this.todos.updateMode(ind, "view");
        };
        this.todos = todos;
        this.items = [];
        this.el = null;
    }
    List.prototype.onInit = function () {
        this.el = document.getElementById("list");
    };
    List.prototype.onDestroy = function () {
        this.el = null;
    };
    List.prototype.render = function (list) {
        var _this = this;
        var _a;
        for (var _i = 0, _b = this.items; _i < _b.length; _i++) {
            var item = _b[_i];
            item.onDestroy();
        }
        this.items = list
            .map(function (todo, i) {
            return new Item_1["default"](todo, i, {
                handleTextClick: _this.handleTextClick,
                handleEditClick: _this.handleEditClick,
                handleSaveClick: _this.handleSaveClick,
                handleDeleteClick: _this.handleDeleteClick
            });
        })
            .reverse();
        (_a = this.el) === null || _a === void 0 ? void 0 : _a.replaceChildren.apply(_a, this.items.map(function (item) { return item.render(); }));
    };
    return List;
}());
exports["default"] = List;
