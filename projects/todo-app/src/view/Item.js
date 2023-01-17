"use strict";
exports.__esModule = true;
var ItemText_1 = require("./ItemText");
var ItemEditButton_1 = require("./ItemEditButton");
var ItemDeleteButton_1 = require("./ItemDeleteButton");
var ItemInput_1 = require("./ItemInput");
var ItemSaveButton_1 = require("./ItemSaveButton");
var Item = /** @class */ (function () {
    function Item(todo, ind, _a) {
        var handleTextClick = _a.handleTextClick, handleEditClick = _a.handleEditClick, handleSaveClick = _a.handleSaveClick, handleDeleteClick = _a.handleDeleteClick;
        var _this = this;
        this._handleSaveClick = function (event) {
            var _a, _b;
            _this.handleSaveClick(event, ((_b = (_a = _this.input) === null || _a === void 0 ? void 0 : _a.el) === null || _b === void 0 ? void 0 : _b.value) || "");
        };
        this.todo = todo;
        this.ind = ind;
        this.el = null;
        this.handleSaveClick = handleSaveClick;
        this.text = new ItemText_1["default"](todo, ind, handleTextClick);
        this.edit = new ItemEditButton_1["default"](ind, handleEditClick);
        this["delete"] = new ItemDeleteButton_1["default"](ind, handleDeleteClick);
        this.input = new ItemInput_1["default"](todo.text, ind);
        this.save = new ItemSaveButton_1["default"](ind, this._handleSaveClick);
    }
    Item.prototype.onDestroy = function () {
        var _a, _b, _c, _d, _e;
        this.el = null;
        (_a = this.text) === null || _a === void 0 ? void 0 : _a.onDestroy();
        (_b = this.edit) === null || _b === void 0 ? void 0 : _b.onDestroy();
        (_c = this["delete"]) === null || _c === void 0 ? void 0 : _c.onDestroy();
        (_d = this.input) === null || _d === void 0 ? void 0 : _d.onDestroy();
        (_e = this.save) === null || _e === void 0 ? void 0 : _e.onDestroy();
    };
    Item.prototype.render = function () {
        this.el = document.createElement("li");
        switch (this.todo.mode) {
            case "view":
                {
                    this.el.appendChild(this.text.render());
                    this.el.appendChild(this.edit.render());
                    this.el.appendChild(this["delete"].render());
                }
                break;
            case "edit":
                {
                    this.el.appendChild(this.input.render());
                    this.el.appendChild(this.save.render());
                }
                break;
        }
        return this.el;
    };
    return Item;
}());
exports["default"] = Item;
