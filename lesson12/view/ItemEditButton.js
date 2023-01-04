class ItemEditButton {
  constructor(ind, handleClick) {
    this.ind = ind;

    this.el = null;
    this.handleClick = handleClick;
  }

  onDestroy() {
    this.el?.removeEventListener("click", this.handleClick);
    this.el = null;
  }

  render() {
    this.el = document.createElement("button");

    this.el.textContent = "Edit";
    this.el.classList.add("edit");
    this.el.setAttribute("data-ind", this.ind);

    this.el.addEventListener("click", this.handleClick);

    return this.el;
  }
}

export default ItemEditButton;
