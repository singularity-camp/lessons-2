import Page from "../index.js";
class TournamentResult extends Page {
    constructor() {
        super();
    }
    onInit() {
        this.el = document.getElementById("page-tournament-result");
    }
    onDestroy() {
        this.el = null;
    }
    async render() {
        this.show();
        // this.hide();
    }
}
export default TournamentResult;
