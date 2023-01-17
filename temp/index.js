import TodoList from "./model/TodoList";
import View from "./view/";
const todos = new TodoList();
const view = new View(todos);
function handleLoad() {
    view?.onInit();
    todos.addRenderer(view.renderTodos);
    todos.fetchAllTodos();
}
function handleUnload() {
    view?.onDestroy();
}
window.addEventListener("load", handleLoad);
window.addEventListener("unload", handleUnload);
