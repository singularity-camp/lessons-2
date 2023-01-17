class AddButton {
    handleClick;
    el;
    constructor(handleClick) {
        this.el = null;
        this.handleClick = handleClick;
    }
    onInit() {
        this.el = document.getElementById("add-button");
        this.el?.addEventListener("click", this.handleClick);
    }
    onDestroy() {
        this.el?.removeEventListener("click", this.handleClick);
        this.el = null;
    }
}
export default AddButton;
