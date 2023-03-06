import TournamentIntro from "./pages/TournamentIntro/index.js";
import GameIntro from "./pages/GameIntro/index.js";
import Playboard from "./pages/Playboard/index.js";
import GameResult from "./pages/GameResult/index.js";
import TournamentResult from "./pages/TournamentResult/index.js";
class View {
    pageTournamentIntro;
    pageGameIntro;
    pagePlayboard;
    pageGameResult;
    pageTournamentResult;
    constructor() {
        this.pageTournamentIntro = new TournamentIntro();
        this.pageGameIntro = new GameIntro();
        this.pagePlayboard = new Playboard();
        this.pageGameResult = new GameResult();
        this.pageTournamentResult = new TournamentResult();
    }
    onInit() {
        this.pageTournamentIntro.onInit();
        this.pageGameIntro.onInit();
        this.pagePlayboard.onInit();
        this.pageGameResult.onInit();
        this.pageTournamentResult.onInit();
    }
    onDestroy() {
        this.pageTournamentIntro.onDestroy();
        this.pageGameIntro.onDestroy();
        this.pagePlayboard.onDestroy();
        this.pageGameResult.onDestroy();
        this.pageTournamentResult.onDestroy();
    }
}
export default View;
