import Input from "./Input";
import AddButton from "./AddButton";
import TodoList from "../model/TodoList";

class Header {
  todos: TodoList;
  input: Input;
  addButton: AddButton;

  constructor(todos: TodoList) {
    this.todos = todos;

    this.input = new Input();
    this.addButton = new AddButton(this.handleAddClick);
  }

  onInit() {
    this.input?.onInit();
    this.addButton?.onInit();
  }

  onDestroy() {
    this.input?.onDestroy();
    this.addButton?.onDestroy();
  }

  handleAddClick = () => {
    const inputValue = this.input.getValue();

    this.todos.add(inputValue || "");

    this.input.removeValue();
  };
}

export default Header;
