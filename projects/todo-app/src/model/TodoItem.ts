class TodoItem {
  id: number;
  text: string;
  mode: "view" | "edit";
  isCompleted: boolean;

  constructor(id: number, text: string, isCompleted = false) {
    this.id = id;
    this.text = text;
    // NOTE: view, edit
    this.mode = "view";
    this.isCompleted = isCompleted;
  }
}

export default TodoItem;
