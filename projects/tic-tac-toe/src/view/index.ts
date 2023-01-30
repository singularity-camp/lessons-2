import TournamentIntro from "./pages/TournamentIntro/index";
import GameIntro from "./pages/GameIntro/index";
import { Component } from "./types";

class View implements Component {
  readonly pageTournamentIntro: TournamentIntro;
  readonly pageGameIntro: GameIntro;

  constructor() {
    this.pageTournamentIntro = new TournamentIntro();
    this.pageGameIntro = new GameIntro();
  }

  onInit() {
    this.pageTournamentIntro.onInit();
    this.pageGameIntro.onInit();
  }

  onDestroy() {
    this.pageTournamentIntro.onDestroy();
    this.pageGameIntro.onDestroy();
  }
}

export default View;
