import Page from "./pages/index";
import TournamentIntro from "./pages/TournamentIntro/index";
import { Component } from "./types";
import Tournament from "../model/Tournament";

class View implements Component {
  readonly #pageTournamentIntro: TournamentIntro;
  #activePage: null | Page;

  constructor(tournament: Tournament) {
    this.#pageTournamentIntro = new TournamentIntro(tournament);

    this.#activePage = null;
  }

  onInit() {
    this.#pageTournamentIntro.onInit();

    this.#setActivePage(this.#pageTournamentIntro);
  }

  onDestroy() {
    this.#pageTournamentIntro.onDestroy();

    this.#setActivePage(null);
  }

  #setActivePage(page: null | Page) {
    if (this.#activePage) {
      this.#activePage.hide();
    }

    this.#activePage = page;

    if (this.#activePage) {
      this.#activePage.show();
      this.#activePage.render();
    }
  }
}

export default View;
