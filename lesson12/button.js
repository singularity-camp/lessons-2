import { addFromInput } from "./input.js";
import { render } from "./ul.js";

export function buttonClickHandler(todos) {
  const buttonEl = document.getElementById("add-button");

  buttonEl.addEventListener("click", () => {
    const value = addFromInput();
    todos.add(value);

    render(todos);
  });
}

export function editButtonClickHandler(todos) {
  const buttonEls = document.getElementsByClassName("edit");

  for (let i = 0; i < buttonEls.length; i++) {
    const el = buttonEls[i];
    el.addEventListener("click", () => {
      todos.changeMode(i, "edit");
      render(todos);
    });
  }
}

export function saveButtonClickHandler(todos) {
  const buttonEls = document.getElementsByClassName("save");

  for (let i = 0; i < buttonEls.length; i++) {
    const el = buttonEls[i];
    el.addEventListener("click", (event) => {
      const input =
        event.currentTarget.parentElement.getElementsByClassName("input")[0];
      todos.update(i, input.value);
      todos.changeMode(i, "view");
      render(todos);
    });
  }
}
