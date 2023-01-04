class TodoList {
  constructor() {
    this.list = [];
  }

  add(text) {
    this.list.push(text);
  }

  update(ind, newText) {
    this.list[ind] = newText;
  }

  delete(ind) {
    this.list.splice(ind, 1);
  }
}

export default TodoList;
