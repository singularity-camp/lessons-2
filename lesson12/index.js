import TodoList from "./model/TodoList.js";
import View from "./view/index.js";

const todos = new TodoList();
const view = new View(todos);

function handleLoad() {
  view?.onInit();
  todos.addRenderer(view.renderTodos);
}

function handleUnload() {
  view?.onDestroy();
}

window.addEventListener("load", handleLoad);

window.addEventListener("unload", handleUnload);
