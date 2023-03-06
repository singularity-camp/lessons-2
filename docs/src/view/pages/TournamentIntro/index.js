import Page from "../index.js";
import PlayersList from "./PlayersList.js";
import StartTournamentButton from "./StartTournamentButton.js";
class TournamentIntro extends Page {
    #playersList;
    #startTournamentButton;
    constructor() {
        super();
        this.#playersList = new PlayersList();
        this.#startTournamentButton = new StartTournamentButton();
    }
    onInit() {
        this.el = document.getElementById("page-tournament-intro");
        this.#startTournamentButton.onInit();
        this.#playersList.onInit();
    }
    onDestroy() {
        this.el = null;
        this.#startTournamentButton.onDestroy();
        this.#playersList.onDestroy();
    }
    async render(players) {
        this.show();
        this.#playersList.render(players);
        await this.#onStartClick();
        this.hide();
    }
    #onStartClick() {
        return new Promise((res) => this.#startTournamentButton.onClick(res));
    }
}
export default TournamentIntro;
