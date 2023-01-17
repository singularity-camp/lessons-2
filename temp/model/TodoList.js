import TodoItem from "./TodoItem";
class TodoList {
    list;
    render;
    constructor() {
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
    async fetchAllTodos() {
        try {
            const res = await fetch("https://localhost:4001/todo");
            if (!res.ok) {
                await Promise.reject(new Error(`fail response: ${res.statusText}`));
            }
            const json = await res.json();
            this.list = json.map((serverTodo) => new TodoItem(serverTodo.text, serverTodo.done));
            this.#render();
        }
        catch (e) {
            console.error(e);
        }
    }
    // Private method
    #render() {
        this.render?.(this.list);
    }
}
export default TodoList;
