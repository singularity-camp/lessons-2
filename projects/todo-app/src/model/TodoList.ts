import TodoItem from "./TodoItem";
import fetchAll from "../services/fetchAll";

class TodoList {
  list: TodoItem[];
  render: ((list: TodoItem[]) => void) | null;

  constructor() {
    this.list = [];
    this.render = null;
  }

  add(text: string) {
    const item = new TodoItem(text);
    this.list.push(item);

    this.#render();
  }

  update(ind: number, newText: string) {
    this.list[ind] = new TodoItem(newText);

    this.#render();
  }

  delete(ind: number) {
    this.list.splice(ind, 1);

    this.#render();
  }

  updateMode(ind: number, newMode: "view" | "edit") {
    this.list[ind].mode = newMode;

    this.#render();
  }

  toggleState(ind: number) {
    this.list[ind].isCompleted = !this.list[ind].isCompleted;

    this.#render();
  }

  addRenderer(render: (list: TodoItem[]) => void) {
    this.render = render;
  }

  async onInit() {
    await this.#getAllTodos();
    this.#render();
  }

  // Private method
  #render() {
    this.render?.(this.list);
  }

  async #getAllTodos() {
    try {
      const remoteTodos = await fetchAll();
      if (remoteTodos) {
        this.list = remoteTodos.map(
          (serverTodo) => new TodoItem(serverTodo.text, serverTodo.done)
        );
      }
    } catch (e) {
      console.error(e);
    }
  }
}

export default TodoList;
