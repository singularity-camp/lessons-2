import TodoItem from "./TodoItem";
import fetchAll from "../services/fetchAll";
import postItem from "../services/postItem";
import patchItem from "../services/patchItem";
import deleteItem from "../services/deleteItem";

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

  async update(ind: number, newText: string) {
    try {
      await this.#updateTodo(this.list[ind].id, newText);
      await this.#getAllTodos();
      this.#render();
    } catch (e) {
      console.error(e);
    }
  }

  async delete(ind: number) {
    try {
      await this.#deleteTodo(this.list[ind].id);
      await this.#getAllTodos();
      this.#render();
    } catch (e) {
      console.error(e);
    }
  }

  updateMode(ind: number, newMode: "view" | "edit") {
    this.list[ind].mode = newMode;

    this.#render();
  }

  async toggleState(ind: number) {
    try {
      await this.#updateTodo(
        this.list[ind].id,
        undefined,
        !this.list[ind].isCompleted
      );
      await this.#getAllTodos();
      this.#render();
    } catch (e) {
      console.error(e);
    }
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
          (serverTodo) =>
            new TodoItem(serverTodo.id, serverTodo.text, serverTodo.done)
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

  async #updateTodo(id: number, text?: string, done?: boolean) {
    try {
      await patchItem(id, { text, done });
    } catch (e) {
      console.error(e);
    }
  }

  async #deleteTodo(id: number) {
    try {
      await deleteItem(id);
    } catch (e) {
      console.error(e);
    }
  }
}

export default TodoList;
