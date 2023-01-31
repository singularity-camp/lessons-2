window.addEventListener("load", handleLoad);
window.addEventListener("unload", handleUnload);

let todos = [];

function handleLoad() {
  addTodoListener();
}

function addTodoListener() {
  // NOTE remove listener
  const addButtonEl = document.getElementById("add-button");
  addButtonEl.addEventListener("click", handleAdd);
}

function handleAdd() {
  const inputEl = document.getElementById("input");

  const value = inputEl.value;

  const newTodo = generateTodo(value);
  addToTodoList(newTodo);

  inputEl.value = "";
}

// NOTE: new todo
function generateTodo(content) {
  return {
    id: generateID(),
    content: content,
    date: new Date(),
    isCompleted: false,
  };
}

function generateID() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// NOTE: todo functions
function addToTodoList(newTodo) {
  todos.push(newTodo);
  renderTodoList(todos);
}

function toggleTodoCompleted(id) {
  for (let i = 0; i < todos.length; i++) {
    debugger;
    if (todos[i].id === id) {
      todos[i].isCompleted = !todos[i].isCompleted;
    }
  }
  renderTodoList(todos);
}

function renderTodoList(todos) {
  clearDoneList();
  clearUndoneList();

  for (const todo of todos) {
    if (todo.isCompleted) {
      renderToDoneList(todo);
    } else {
      renderToUndoneList(todo);
    }
  }
}

function clearDoneList() {
  const doneListEl = document.getElementById("done-list");

  doneListEl.replaceChildren();
}

function clearUndoneList() {
  const undoneListEl = document.getElementById("undone-list");

  undoneListEl.replaceChildren();
}

function renderToDoneList(todo) {
  const doneListEl = document.getElementById("done-list");

  const newItem = renderDoneListItem(todo);
  addToggleCompletedListener(newItem);

  doneListEl.appendChild(newItem);
}

function renderDoneListItem(todo) {
  const del = document.createElement("del");
  del.innerText = todo.content;

  const li = document.createElement("li");
  li.setAttribute("data-id", todo.id);
  li.appendChild(del);

  return li;
}

function renderToUndoneList(todo) {
  const doneListEl = document.getElementById("undone-list");

  const newItem = renderUndoneListItem(todo);
  addToggleCompletedListener(newItem);

  doneListEl.appendChild(newItem);
}

function renderUndoneListItem(todo) {
  const li = document.createElement("li");
  li.setAttribute("data-id", todo.id);
  li.innerText = todo.content;

  return li;
}

function addToggleCompletedListener(el) {
  el.addEventListener("click", toggleCompletedHandler);
}

function toggleCompletedHandler(event) {
  const { dataset } = event.currentTarget;
  const id = dataset.id;
  toggleTodoCompleted(id);
}

function handleUnload() {}
