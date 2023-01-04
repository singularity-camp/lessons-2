import Input from "./Input.js";
import AddButton from "./AddButton.js";

class Header {
  constructor(todos) {
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

    this.todos.add(inputValue);

    this.input.setValue("");
  };
}

export default Header;
