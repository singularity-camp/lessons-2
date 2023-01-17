class ItemInput {
    text;
    ind;
    el;
    constructor(text, ind) {
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
