import Page from "../index.js";
import PlayerCard from "./PlayerCard.js";
import GameNumber from "./GameNumber.js";
import CircleProgress from "./CircleProgress.js";
class GameResult extends Page {
    #player1Card;
    #player2Card;
    #gameNumber;
    #circleProgress;
    constructor() {
        super();
        this.#player1Card = new PlayerCard("player1-card-result");
        this.#player2Card = new PlayerCard("player2-card-result");
        this.#gameNumber = new GameNumber();
        this.#circleProgress = new CircleProgress();
    }
    onInit() {
        this.el = document.getElementById("page-game-result");
        this.#player1Card.onInit();
        this.#player2Card.onInit();
        this.#gameNumber.onInit();
        this.#circleProgress.onInit();
    }
    onDestroy() {
        this.el = null;
        this.#player1Card.onDestroy();
        this.#player2Card.onDestroy();
        this.#gameNumber.onDestroy();
        this.#circleProgress.onDestroy();
    }
    async render(gameNumber, game) {
        this.show();
        this.#gameNumber.render(gameNumber);
        this.#player1Card.render(game.player1, game.score[0]);
        this.#player2Card.render(game.player2, game.score[1]);
        await this.#onProgressEnd();
        this.hide();
    }
    #onProgressEnd() {
        return new Promise((res) => this.#circleProgress.onAnimationEnd(res));
    }
}
export default GameResult;
