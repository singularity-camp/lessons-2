import TodoItem from "./TodoItem";
import fetchAll from "../services/fetchAll";
import postItem from "../services/postItem";

class TodoList {
  list: TodoItem[];
  render: ((list: TodoItem[]) => void) | null;

  constructor() {
    this.list = [];
    this.render = null;
  }

  async add(text: string) {
    try {
      await this.#createTodo(text);
      await this.#getAllTodos();
      this.#render();
    } catch (e) {
      console.error(e);
    }
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

  async #createTodo(text: string) {
    try {
      await postItem({ text });
    } catch (e) {
      console.error(e);
    }
  }
}

export default TodoList;
