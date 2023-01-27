import Page from "../index";

class TournamentIntro extends Page {
  constructor() {
    super();
  }

  onInit() {
    this.el = document.getElementById(
      "page-tournament-intro"
    ) as HTMLDivElement;
  }

  onDestroy() {
    this.el = null;
  }
}

export default TournamentIntro;
