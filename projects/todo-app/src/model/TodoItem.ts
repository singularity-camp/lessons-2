class TodoItem {
  text: string;
  mode: "view" | "edit";
  isCompleted: boolean;

  constructor(text: string) {
    this.text = text;
    // NOTE: view, edit
    this.mode = "view";
    this.isCompleted = false;
  }
}

export default TodoItem;
