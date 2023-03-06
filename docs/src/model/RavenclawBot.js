import Bot from "./Bot.js";
class RavenclawBot extends Bot {
    constructor(name, avatarUrl) {
        super(name, avatarUrl);
    }
    move(board) {
        const randomIndex = Math.floor(Math.random() * board.length);
        return randomIndex;
    }
}
export default RavenclawBot;
