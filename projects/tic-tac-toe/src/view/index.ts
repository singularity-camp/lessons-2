import Page from "./pages/index";
import TournamentIntro from "./pages/TournamentIntro/index";

const pageTournamentIntro = new TournamentIntro();

class View {
  #activePage: Page;

  constructor() {
    this.#activePage = pageTournamentIntro;
  }

  onInit() {
    pageTournamentIntro.onInit();

    this.#activePage.show();
  }

  onDestroy() {
    pageTournamentIntro.onDestroy();

    this.#activePage.hide();
  }
}

export default View;
