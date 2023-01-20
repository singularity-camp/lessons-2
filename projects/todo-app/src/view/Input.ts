class Input {
  el: null | HTMLInputElement;

  constructor() {
    this.el = null;
  }

  onInit() {
    this.el = document.getElementById("input") as HTMLInputElement;
  }

  onDestroy() {
    this.el = null;
  }

  getValue() {
    return this.el?.value;
  }

  removeValue() {
    if (this.el?.value) {
      this.el.value = "";
    }
  }
}

export default Input;
