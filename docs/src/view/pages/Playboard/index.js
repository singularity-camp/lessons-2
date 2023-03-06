import Page from "../index.js";
import PlayerInfo from "./PlayerInfo.js";
import Playarea from "./Playarea.js";
class Playboard extends Page {
    #player1Info;
    #player2Info;
    #playarea;
    constructor() {
        super();
        this.#player1Info = new PlayerInfo("player1-info");
        this.#player2Info = new PlayerInfo("player2-info");
        this.#playarea = new Playarea();
    }
    onInit() {
        this.el = document.getElementById("page-playboard");
        this.#player1Info.onInit();
        this.#player2Info.onInit();
        this.#playarea.onInit();
    }
    onDestroy() {
        this.el = null;
        this.#player1Info.onDestroy();
        this.#player2Info.onDestroy();
        this.#playarea.onDestroy();
    }
    async render(round) {
        this.show();
        this.#player1Info.render(round.player1, round.player1Piece, round.score[0]);
        this.#player2Info.render(round.player2, round.player2Piece, round.score[1]);
        this.#playarea.render(round.board);
        this.renderCurrentPlayer(round.currentPlayer, round.getCurrentPiece());
        await round.run();
        this.hide();
    }
    renderCurrentPlayer(player, piece) {
        switch (piece) {
            case 1:
                if (this.el?.classList.contains("player-o")) {
                    this.el?.classList.remove("player-o");
                }
                this.el?.classList.add("player-x");
                break;
            case -1:
                if (this.el?.classList.contains("player-x")) {
                    this.el?.classList.remove("player-x");
                }
                this.el?.classList.add("player-o");
                break;
        }
    }
    renderCell(ind, piece) {
        this.#playarea.renderCell(ind, piece);
    }
    async onEmptyCellClick() {
        return new Promise((res) => this.#playarea.handleEmptyCellClick(res));
    }
}
export default Playboard;
