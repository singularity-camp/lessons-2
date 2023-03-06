import Bot from "./Bot.js";
import wait from "../utils/wait.js";
const ROW = 3;
const COL = 3;
class Round {
    player1;
    player2;
    board;
    score;
    currentPlayer;
    #player1Piece;
    #player2Piece;
    #view;
    #winner;
    constructor(view, player1, player2, player1Piece, player2Piece, isFirtPlayerStarts, score) {
        this.#view = view;
        this.player1 = player1;
        this.player2 = player2;
        this.#player1Piece = player1Piece;
        this.#player2Piece = player2Piece;
        this.currentPlayer = isFirtPlayerStarts ? this.player1 : this.player2;
        this.#winner = undefined;
        this.board = new Array(COL * ROW).fill(0);
        this.score = score;
    }
    get winner() {
        return this.#winner;
    }
    get player1Piece() {
        return this.#player1Piece;
    }
    get player2Piece() {
        return this.#player2Piece;
    }
    async start() {
        await this.#view.pagePlayboard.render(this);
    }
    async run() {
        return new Promise(async (res) => {
            while (typeof this.#winner === "undefined") {
                const ind = await this.#playerMove();
                this.#updateBoard(ind);
                this.#judge(ind);
                this.#togglePlayer();
            }
            res(null);
        });
    }
    getCurrentPiece() {
        return this.currentPlayer === this.player1
            ? this.#player1Piece
            : this.#player2Piece;
    }
    async #playerMove() {
        if (this.currentPlayer instanceof Bot) {
            const ind = this.currentPlayer.move(this.board);
            await wait(500);
            return ind;
        }
        return this.#view.pagePlayboard.onEmptyCellClick();
    }
    #togglePlayer() {
        this.currentPlayer =
            this.currentPlayer === this.player1 ? this.player2 : this.player1;
        this.#view.pagePlayboard.renderCurrentPlayer(this.currentPlayer, this.getCurrentPiece());
    }
    #updateBoard(ind) {
        if (this.board[ind] !== 0) {
            window.confirm(`Selected cell(#${ind}) is already filled with piece ${this.board[ind] === 1 ? "x" : "o"}. Sorry but you lost the round.`);
            this.#winner =
                this.currentPlayer === this.player1 ? this.player2 : this.player1;
            return;
        }
        this.board[ind] = this.getCurrentPiece();
        this.#view.pagePlayboard.renderCell(ind, this.getCurrentPiece());
    }
    #judge(ind) {
        const piece = this.board[ind];
        const firstInRowInd = Math.floor(ind / COL) * COL;
        const firstInColInd = ind % COL;
        const win = 
        // row
        this.#assess(piece, firstInRowInd, COL, 1) ||
            // col
            this.#assess(piece, firstInColInd, ROW, COL) ||
            // diagonal 1
            this.#assess(piece, 0, COL, ROW + 1) ||
            // diagonal 2
            this.#assess(piece, ROW - 1, COL, ROW - 1);
        if (win) {
            this.#winner = this.currentPlayer;
            return;
        }
        const draw = !new Set(this.board).has(0);
        if (draw) {
            this.#winner = null;
            return;
        }
    }
    #assess(piece, firstInd, total, step) {
        let i = firstInd;
        for (let counter = 0; counter < total; counter++) {
            if (this.board[i] !== piece) {
                return false;
            }
            i += step;
        }
        return true;
    }
}
export default Round;
