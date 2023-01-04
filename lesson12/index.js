import TodoList from "./TodoList.js";
import { buttonClickHandler } from "./button.js";

function main() {
  const list = new TodoList();

  buttonClickHandler(list);
}

main();
