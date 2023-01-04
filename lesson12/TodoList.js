class TodoItem {
  constructor(text) {
    this.text = text;
    // NOTE: view, edit
    this.mode = "view";
  }
}

class TodoList {
  constructor() {
    this.list = [];
  }

  add(text) {
    const item = new TodoItem(text);
    this.list.push(item);
  }

  update(ind, newText) {
    this.list[ind] = new TodoItem(newText);
  }

  delete(ind) {
    this.list.splice(ind, 1);
  }

  changeMode(ind, newMode) {
    this.list[ind].mode = newMode;
  }
}

export default TodoList;
