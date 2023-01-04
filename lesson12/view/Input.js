class Input {
  constructor() {
    this.el = null;
  }

  onInit() {
    this.el = document.getElementById("input");
  }

  onDestroy() {
    this.el = null;
  }

  getValue() {
    return this.el.value;
  }

  setValue() {
    this.el.value = "";
  }
}

export default Input;
