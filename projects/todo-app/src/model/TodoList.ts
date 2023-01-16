import TodoItem from "./TodoItem";
import { ServerTodo } from "./ServerTodos";

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

  async fetchAllTodos() {
    try {
      const res = await fetch("https://localhost:4001/todo");
      if (!res.ok) {
        await Promise.reject(new Error(`fail response: ${res.statusText}`));
      }
      const json: ServerTodo[] = await res.json();

      this.list = json.map(
        (serverTodo) => new TodoItem(serverTodo.text, serverTodo.done)
      );

      this.#render();
    } catch (e) {
      console.error(e);
    }
  }

  // Private method
  #render() {
    this.render?.(this.list);
  }
}

export default TodoList;
