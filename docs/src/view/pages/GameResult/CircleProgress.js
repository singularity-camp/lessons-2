const ANIMATION_DURATION = 1500;
class CircleProgress {
    #el;
    constructor() {
        this.#el = null;
    }
    onInit() {
        this.#el = document.getElementById("circle-progress-result");
    }
    onDestroy() {
        this.#el = null;
    }
    onAnimationEnd(listener) {
        this.#el?.style.setProperty("--duration", `${ANIMATION_DURATION}ms`);
        this.#el?.addEventListener("animationend", listener, { once: true });
    }
}
export default CircleProgress;
