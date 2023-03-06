import Bot from "./Bot.js";
class SlytherinBot extends Bot {
    constructor() {
        super("Slytherin", "/assets/slytherin.webp");
    }
    move(board) {
        for (let i = 0; i < board.length; i++) {
            const piece = board[i];
            if (piece === 0) {
                return i;
            }
        }
        return 0;
    }
}
export default SlytherinBot;
