class GameNumber {
    #el;
    constructor() {
        this.#el = null;
    }
    onInit() {
        this.#el = document.getElementById("game-number");
    }
    onDestroy() {
        this.#el = null;
    }
    render(num) {
        if (this.#el && "innerText" in this.#el) {
            this.#el.innerText = num.toString();
        }
    }
}
export default GameNumber;
