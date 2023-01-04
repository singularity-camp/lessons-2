import { editButtonClickHandler, saveButtonClickHandler } from "./button.js";

function renderListItem() {
  const el = document.createElement("li");

  return el;
}

function renderListItemText(ind, text) {
  const el = document.createElement("span");

  el.textContent = text;
  el.classList = "text";
  el.setAttribute("data-ind", ind);

  return el;
}

function renderListItemEdit(ind) {
  const el = document.createElement("button");

  el.textContent = "Edit";
  el.classList = "edit";
  el.setAttribute("data-ind", ind);

  return el;
}

function renderListItemDelete(ind) {
  const el = document.createElement("button");

  el.textContent = "Delete";
  el.classList = "delete";
  el.setAttribute("data-ind", ind);

  return el;
}

export function renderListItemInput(ind, value) {
  const el = document.createElement("input");

  el.value = value;
  el.classList = "input";
  el.setAttribute("data-ind", ind);

  return el;
}

export function renderListItemSave(ind) {
  const el = document.createElement("button");

  el.textContent = "Save";
  el.classList = "save";
  el.setAttribute("data-ind", ind);

  return el;
}

function renderList(todos) {
  const listEl = document.getElementById("list");

  const children = todos.list.map((item, i) => {
    const itemEl = renderListItem();

    switch (item.mode) {
      case "view":
        {
          const textEl = renderListItemText(i, item.text);
          const editEl = renderListItemEdit(i);
          const deleteEl = renderListItemDelete(i);

          itemEl.appendChild(textEl);
          itemEl.appendChild(editEl);
          itemEl.appendChild(deleteEl);
        }
        break;
      case "edit":
        {
          const inputEl = renderListItemInput(i, item.text);
          const saveEl = renderListItemSave(i);

          itemEl.appendChild(inputEl);
          itemEl.appendChild(saveEl);
        }
        break;
    }

    return itemEl;
  });

  listEl.replaceChildren(...children);
}

export function render(todos) {
  renderList(todos);
  editButtonClickHandler(todos);
  saveButtonClickHandler(todos);
}
