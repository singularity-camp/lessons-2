class ItemInput {
  text: string;
  ind: number;
  el: null | HTMLInputElement;

  constructor(text: string, ind: number) {
    this.text = text;
    this.ind = ind;

    this.el = null;
  }

  onDestroy() {
    this.el = null;
  }

  render() {
    this.el = document.createElement("input");

    this.el.value = this.text;
    this.el.classList.add("input");
    this.el.setAttribute("data-ind", this.ind.toString());

    return this.el;
  }
}

export default ItemInput;
