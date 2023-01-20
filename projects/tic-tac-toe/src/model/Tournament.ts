import Player from "./Player";
import Game from "./Game";

class Tournament {
  readonly #players: Player[];
  readonly #games: Game[];
  readonly #numRoundsPerGame: number;

  constructor(players: Player[], numRoundsPerGame: number) {
    this.#players = players;
    this.#games = [];
    this.#numRoundsPerGame = numRoundsPerGame;
  }

  async start() {
    this.#init();
    await this.#run();
  }

  #init() {
    for (let i = 0; i < this.#players.length; i++) {
      const player1 = this.#players[i];
      for (let j = i + 1; j < this.#players.length; j++) {
        const player2 = this.#players[j];
        const game = new Game(player1, player2, this.#numRoundsPerGame);
        this.#games.push(game);
      }
    }
  }

  async #run() {
    for (const game of this.#games) {
      await game.start();
    }
  }
}

export default Tournament;
