import TodoItem from "../model/TodoItem";

class ItemText {
  todo: TodoItem;
  ind: number;
  el: null | HTMLElement;
  handleClick: (event: MouseEvent) => void;

  constructor(
    todo: TodoItem,
    ind: number,
    handleClick: (event: MouseEvent) => void
  ) {
    this.todo = todo;
    this.ind = ind;

    this.el = null;
    this.handleClick = handleClick;
  }

  onDestroy() {
    this.el?.removeEventListener("click", this.handleClick);
    this.el = null;
  }

  render() {
    if (this.todo.isCompleted) {
      this.el = document.createElement("del");
    } else {
      this.el = document.createElement("span");
    }

    this.el.textContent = this.todo.text;
    this.el.classList.add("text");
    this.el.setAttribute("data-ind", this.ind.toString());
    -this.el.addEventListener("click", this.handleClick);

    return this.el;
  }
}

export default ItemText;
