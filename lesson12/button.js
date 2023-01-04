import { addFromInput } from "./input.js";
import { renderList } from "./ul.js";

export function buttonClickHandler(todos) {
  const buttonEl = document.getElementById("add-button");

  buttonEl.addEventListener("click", () => {
    const value = addFromInput();
    todos.add(value);

    renderList(todos);
  });
}
