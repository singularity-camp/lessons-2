import Round from "./Round.js";
class Game {
    player1;
    player2;
    #view;
    #numRounds;
    #score;
    #rounds;
    constructor(view, player1, player2, numRounds) {
        this.player1 = player1;
        this.player2 = player2;
        this.#view = view;
        this.#numRounds = numRounds;
        this.#score = [0, 0];
        this.#rounds = [];
    }
    get score() {
        return this.#score;
    }
    async start(ind) {
        await this.#view.pageGameIntro.render(ind + 1, this);
        this.#init();
        await this.#run();
        await this.#view.pageGameResult.render(ind + 1, this);
    }
    #init() {
        for (let i = 0; i < this.#numRounds; i++) {
            const [player1Piece, player2Piece] = Math.floor(i / 2) % 2 === 0 ? [1, -1] : [-1, 1];
            const round = new Round(this.#view, this.player1, this.player2, player1Piece, player2Piece, i % 2 === 0, this.#score);
            this.#rounds.push(round);
        }
    }
    async #run() {
        for (const round of this.#rounds) {
            await round.start();
            switch (round.winner) {
                case this.player1:
                    this.#score[0]++;
                    break;
                case this.player2:
                    this.#score[1]++;
                    break;
            }
        }
    }
}
export default Game;
