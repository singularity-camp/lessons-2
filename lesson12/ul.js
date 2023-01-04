function renderListItem() {
  const el = document.createElement("li");

  return el;
}

function renderListItemText(text) {
  const el = document.createElement("span");

  el.textContent = text;
  el.classList = "text";
  el.setAttribute("data-ind", 0);

  return el;
}

function renderListItemEdit() {
  const el = document.createElement("button");

  el.textContent = "Edit";
  el.classList = "edit";
  el.setAttribute("data-ind", 0);

  return el;
}

function renderListItemDelete() {
  const el = document.createElement("button");

  el.textContent = "Delete";
  el.classList = "delete";
  el.setAttribute("data-ind", 0);

  return el;
}

export function renderList(todos) {
  console.log(todos);
  const listEl = document.getElementById("list");

  const children = todos.list.map((text) => {
    const itemEl = renderListItem();
    const textEl = renderListItemText(text);
    const editEl = renderListItemEdit();
    const deleteEl = renderListItemDelete();

    itemEl.appendChild(textEl);
    itemEl.appendChild(editEl);
    itemEl.appendChild(deleteEl);

    return itemEl;
  });

  listEl.replaceChildren(...children);
}
