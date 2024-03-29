import TodoList from "./model/TodoList";
import View from "./view/index";

const todos = new TodoList();
const view = new View(todos);

async function handleLoad() {
  view?.onInit();
  todos.addRenderer(view.renderTodos);
  await todos.onInit();
}

function handleUnload() {
  view?.onDestroy();
}

window.addEventListener("load", handleLoad);

window.addEventListener("unload", handleUnload);
