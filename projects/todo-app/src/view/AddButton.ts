type ClickHandler = () => void;

class AddButton {
  handleClick: ClickHandler;
  el: null | HTMLButtonElement;

  constructor(handleClick: ClickHandler) {
    this.el = null;
    this.handleClick = handleClick;
  }

  onInit() {
    this.el = document.getElementById("add-button") as HTMLButtonElement;
    this.el?.addEventListener("click", this.handleClick);
  }

  onDestroy() {
    this.el?.removeEventListener("click", this.handleClick);
    this.el = null;
  }
}

export default AddButton;
