import ItemText from "./ItemText.js";
import ItemEditButton from "./ItemEditButton.js";
import ItemDeleteButton from "./ItemDeleteButton.js";
import ItemInput from "./ItemInput.js";
import ItemSaveButton from "./ItemSaveButton.js";

class Item {
  constructor(
    todo,
    ind,
    { handleTextClick, handleEditClick, handleSaveClick }
  ) {
    this.todo = todo;

    this.handleSaveClick = handleSaveClick;

    this.text = new ItemText(todo, ind, handleTextClick);
    this.edit = new ItemEditButton(ind, handleEditClick);
    this.delete = new ItemDeleteButton(ind);
    this.input = new ItemInput(todo.text, ind);
    this.save = new ItemSaveButton(ind, this._handleSaveClick);
  }

  onDestroy() {
    this.el = null;

    this.text?.onDestroy();
    this.edit?.onDestroy();
    this.delete?.onDestroy();
    this.input?.onDestroy();
    this.save?.onDestroy();
  }

  _handleSaveClick = (event) => {
    this.handleSaveClick(event, this.input.el.value);
  };

  render() {
    this.el = document.createElement("li");

    switch (this.todo.mode) {
      case "view":
        {
          this.el.appendChild(this.text.render());
          this.el.appendChild(this.edit.render());
          this.el.appendChild(this.delete.render());
        }
        break;
      case "edit":
        {
          this.el.appendChild(this.input.render());
          this.el.appendChild(this.save.render());
        }
        break;
    }

    return this.el;
  }
}

export default Item;
