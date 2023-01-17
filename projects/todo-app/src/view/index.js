"use strict";
exports.__esModule = true;
var Header_1 = require("./Header");
var List_1 = require("./List");
var Main = /** @class */ (function () {
    function Main(todos) {
        var _this = this;
        this.renderTodos = function (items) {
            _this.list.render(items);
        };
        this.header = new Header_1["default"]();
        this.list = new List_1["default"](todos);
    }
    Main.prototype.onInit = function () {
        var _a, _b;
        (_a = this.header) === null || _a === void 0 ? void 0 : _a.onInit();
        (_b = this.list) === null || _b === void 0 ? void 0 : _b.onInit();
    };
    Main.prototype.onDestroy = function () {
        var _a, _b;
        (_a = this.header) === null || _a === void 0 ? void 0 : _a.onDestroy();
        (_b = this.list) === null || _b === void 0 ? void 0 : _b.onDestroy();
    };
    return Main;
}());
exports["default"] = Main;
