import TodoItem from "./TodoItem.js";

class TodoList {
  constructor(render) {
    this.list = [];
    this.render = null;
  }

  add(text) {
    const item = new TodoItem(text);
    this.list.push(item);

    this.#render();
  }

  update(ind, newText) {
    this.list[ind] = new TodoItem(newText);

    this.#render();
  }

  delete(ind) {
    this.list.splice(ind, 1);

    this.#render();
  }

  updateMode(ind, newMode) {
    this.list[ind].mode = newMode;

    this.#render();
  }

  toggleState(ind) {
    this.list[ind].isCompleted = !this.list[ind].isCompleted;

    this.#render();
  }

  addRenderer(render) {
    this.render = render;
  }

  // Private method
  #render() {
    this.render(this.list);
  }
}

export default TodoList;
