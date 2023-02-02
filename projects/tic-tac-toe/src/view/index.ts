import TournamentIntro from "./pages/TournamentIntro/index";
import GameIntro from "./pages/GameIntro/index";
import Playboard from "./pages/Playboard/index";
import { Component } from "./types";

class View implements Component {
  readonly pageTournamentIntro: TournamentIntro;
  readonly pageGameIntro: GameIntro;
  readonly pagePlayboard: Playboard;

  constructor() {
    this.pageTournamentIntro = new TournamentIntro();
    this.pageGameIntro = new GameIntro();
    this.pagePlayboard = new Playboard();
  }

  onInit() {
    this.pageTournamentIntro.onInit();
    this.pageGameIntro.onInit();
    this.pagePlayboard.onInit();
  }

  onDestroy() {
    this.pageTournamentIntro.onDestroy();
    this.pageGameIntro.onDestroy();
    this.pagePlayboard.onDestroy();
  }
}

export default View;
