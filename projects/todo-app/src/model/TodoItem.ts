class TodoItem {
  text: string;
  mode: "view" | "edit";
  isCompleted: boolean;

  constructor(text: string, isCompleted = false) {
    this.text = text;
    // NOTE: view, edit
    this.mode = "view";
    this.isCompleted = isCompleted;
  }
}

export default TodoItem;
