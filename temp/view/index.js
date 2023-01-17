import Header from "./Header";
import List from "./List";
class Main {
    header;
    list;
    constructor(todos) {
        this.header = new Header();
        this.list = new List(todos);
    }
    onInit() {
        this.header?.onInit();
        this.list?.onInit();
    }
    onDestroy() {
        this.header?.onDestroy();
        this.list?.onDestroy();
    }
    renderTodos = (items) => {
        this.list.render(items);
    };
}
export default Main;
