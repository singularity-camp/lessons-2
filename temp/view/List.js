import Item from "./Item";
class List {
    el;
    todos;
    items;
    constructor(todos) {
        this.todos = todos;
        this.items = [];
        this.el = null;
    }
    onInit() {
        this.el = document.getElementById("list");
    }
    onDestroy() {
        this.el = null;
    }
    handleTextClick = (event) => {
        const { currentTarget } = event;
        if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
            return;
        }
        const { dataset } = currentTarget;
        const ind = Number(dataset.ind);
        this.todos.toggleState(ind);
    };
    handleDeleteClick = (event) => {
        const { currentTarget } = event;
        if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
            return;
        }
        const { dataset } = currentTarget;
        const ind = Number(dataset.ind);
        this.todos.delete(ind);
    };
    handleEditClick = (event) => {
        const { currentTarget } = event;
        if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
            return;
        }
        const { dataset } = currentTarget;
        const ind = Number(dataset.ind);
        this.todos.updateMode(ind, "edit");
    };
    handleSaveClick = (event, newText) => {
        const { currentTarget } = event;
        if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
            return;
        }
        const { dataset } = currentTarget;
        const ind = Number(dataset.ind);
        this.todos.update(ind, newText);
        this.todos.updateMode(ind, "view");
    };
    render(list) {
        for (const item of this.items) {
            item.onDestroy();
        }
        this.items = list
            .map((todo, i) => new Item(todo, i, {
            handleTextClick: this.handleTextClick,
            handleEditClick: this.handleEditClick,
            handleSaveClick: this.handleSaveClick,
            handleDeleteClick: this.handleDeleteClick,
        }))
            .reverse();
        this.el?.replaceChildren(...this.items.map((item) => item.render()));
    }
}
export default List;
