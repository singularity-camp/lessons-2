import { PIECE } from "./types";

class Player {
  readonly #name: string;
  readonly #avatarUrl: string;
  #piece: PIECE | null;

  constructor(name: string, avatarUrl: string) {
    this.#name = name;
    this.#avatarUrl = avatarUrl;
    this.#piece = null;
  }

  get piece() {
    if (!this.#piece) {
      return 0;
    }
    return this.#piece;
  }

  set piece(piece: PIECE) {
    this.#piece = piece;
  }

  move(board: PIECE[]) {
    return 2;
  }
}

export default Player;
