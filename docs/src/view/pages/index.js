class Page {
    el;
    constructor() {
        this.el = null;
    }
    show() {
        this.el?.classList.remove("hidden");
    }
    hide() {
        this.el?.classList.add("hidden");
    }
}
export default Page;
