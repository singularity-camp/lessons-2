import Header from "./Header";
import List from "./List";
import TodoList from "../model/TodoList";
import TodoItem from "../model/TodoItem";

class Main {
  header: Header;
  list: List;

  constructor(todos: TodoList) {
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

  renderTodos = (items: TodoItem[]) => {
    this.list.render(items);
  };
}

export default Main;
