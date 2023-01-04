import Item from "./Item.js";

class List {
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
    const { dataset } = event.currentTarget;
    const ind = Number(dataset.ind);

    this.todos.toggleState(ind);
  };

  handleEditClick = (event) => {
    const { dataset } = event.currentTarget;
    const ind = Number(dataset.ind);

    this.todos.updateMode(ind, "edit");
  };

  handleSaveClick = (event, newText) => {
    const { dataset } = event.currentTarget;
    const ind = Number(dataset.ind);

    this.todos.update(ind, newText);
    this.todos.updateMode(ind, "view");
  };

  render(list) {
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
          })
      )
      .reverse();

    this.el.replaceChildren(...this.items.map((item) => item.render()));
  }
}

export default List;
