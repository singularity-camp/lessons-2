class StartTournamentButton {
    #el;
    constructor() {
        this.#el = null;
    }
    onInit() {
        this.#el = document.getElementById("btn-start-tournament");
    }
    onDestroy() {
        this.#el = null;
    }
    onClick(listener) {
        this.#el?.addEventListener("click", listener, { once: true });
    }
}
export default StartTournamentButton;
