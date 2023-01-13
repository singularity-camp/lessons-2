import Item from "./Item";
import TodoList from "../model/TodoList";
import TodoItem from "../model/TodoItem";

class List {
  el: null | HTMLUListElement;
  private readonly todos: TodoList;
  private items: Item[];

  constructor(todos: TodoList) {
    this.todos = todos;
    this.items = [];

    this.el = null;
  }

  onInit() {
    this.el = document.getElementById("list") as HTMLUListElement;
  }

  onDestroy() {
    this.el = null;
  }

  handleTextClick = (event: MouseEvent) => {
    const { currentTarget } = event;
    if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
      return;
    }

    const { dataset } = currentTarget;
    const ind = Number(dataset.ind);

    this.todos.toggleState(ind);
  };

  handleDeleteClick = (event: MouseEvent) => {
    const { currentTarget } = event;
    if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
      return;
    }

    const { dataset } = currentTarget;
    const ind = Number(dataset.ind);

    this.todos.delete(ind);
  };

  handleEditClick = (event: MouseEvent) => {
    const { currentTarget } = event;
    if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
      return;
    }

    const { dataset } = currentTarget;
    const ind = Number(dataset.ind);

    this.todos.updateMode(ind, "edit");
  };

  handleSaveClick = (event: MouseEvent, newText: string) => {
    const { currentTarget } = event;
    if (!currentTarget || !(currentTarget instanceof HTMLElement)) {
      return;
    }

    const { dataset } = currentTarget;
    const ind = Number(dataset.ind);

    this.todos.update(ind, newText);
    this.todos.updateMode(ind, "view");
  };

  render(list: TodoItem[]) {
    for (const item of this.items) {
      item.onDestroy();
    }

    this.items = list
      .map(
        (todo, i) =>
          new Item(todo, i, {
            handleTextClick: this.handleTextClick,
            handleEditClick: this.handleEditClick,
            handleSaveClick: this.handleSaveClick,
            handleDeleteClick: this.handleDeleteClick,
          })
      )
      .reverse();

    this.el?.replaceChildren(...this.items.map((item) => item.render()));
  }
}

export default List;
