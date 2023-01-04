import Header from "./Header.js";
import List from "./List.js";

class Main {
  constructor(todos) {
    this.header = new Header(todos);
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

  renderTodos = (todos) => {
    this.list.render(todos);
  };
}

export default Main;
