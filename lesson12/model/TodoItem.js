class TodoItem {
  constructor(text) {
    this.text = text;
    // NOTE: view, edit
    this.mode = "view";
    this.isCompleted = false;
  }
}

export default TodoItem;
