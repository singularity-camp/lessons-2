class ItemSaveButton {
  ind: number;
  handleClick: (event: MouseEvent) => void;
  el: null | HTMLButtonElement;

  constructor(ind: number, handleClick: (event: MouseEvent) => void) {
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

    this.el.textContent = "Save";
    this.el.classList.add("save");
    this.el.setAttribute("data-ind", this.ind.toString());

    this.el.addEventListener("click", this.handleClick);

    return this.el;
  }
}

export default ItemSaveButton;
