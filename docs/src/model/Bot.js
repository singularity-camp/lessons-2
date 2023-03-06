import Player from "./Player.js";
class Bot extends Player {
    constructor(name, avatarUrl) {
        super(name, avatarUrl);
    }
    move(board) {
        return 0;
    }
}
export default Bot;
