class TodoItem {
    text;
    mode;
    isCompleted;
    constructor(text, isCompleted = false) {
        this.text = text;
        // NOTE: view, edit
        this.mode = "view";
        this.isCompleted = isCompleted;
    }
}
export default TodoItem;
