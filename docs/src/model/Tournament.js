import Game from "./Game.js";
class Tournament {
    #view;
    #players;
    #games;
    #numRoundsPerGame;
    constructor(view, players, numRoundsPerGame) {
        this.#view = view;
        this.#players = players;
        this.#games = [];
        this.#numRoundsPerGame = numRoundsPerGame;
    }
    async start() {
        await this.#view.pageTournamentIntro.render(this.#players);
        this.#initGames();
        await this.#runGames();
        await this.#view.pageTournamentResult.render();
    }
    #initGames() {
        for (let i = 0; i < this.#players.length; i++) {
            const player1 = this.#players[i];
            for (let j = i + 1; j < this.#players.length; j++) {
                const player2 = this.#players[j];
                const game = new Game(this.#view, player1, player2, this.#numRoundsPerGame);
                this.#games.push(game);
            }
        }
    }
    async #runGames() {
        for (let i = 0; i < this.#games.length; i++) {
            const game = this.#games[i];
            await game.start(i);
        }
    }
}
export default Tournament;
