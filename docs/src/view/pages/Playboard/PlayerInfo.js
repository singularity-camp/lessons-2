class PlayerInfo {
    #elId;
    #el;
    constructor(id) {
        this.#elId = id;
        this.#el = null;
    }
    onInit() {
        this.#el = document.getElementById(this.#elId);
    }
    onDestroy() {
        this.#el = null;
    }
    render(player, piece, score) {
        this.#el?.replaceChildren(this.#renderScore(score), this.#renderAvatar(player.avatarUrl), this.#renderPlayerName(player.name), this.#renderPieceInfo(piece));
    }
    #renderScore(score) {
        const h3 = document.createElement("h3");
        h3.classList.add("score");
        h3.textContent = score.toString();
        return h3;
    }
    #renderAvatar(src) {
        const img = document.createElement("img");
        img.src = src;
        const container = document.createElement("div");
        container.classList.add("w-24");
        container.classList.add("rounded");
        container.appendChild(img);
        const parent = document.createElement("div");
        parent.classList.add("avatar");
        parent.classList.add("mt-3");
        parent.appendChild(container);
        return parent;
    }
    #renderPlayerName(name) {
        const h4 = document.createElement("h4");
        h4.textContent = name;
        return h4;
    }
    #renderPieceInfo(piece) {
        const div = document.createElement("div");
        div.classList.add("piece");
        switch (piece) {
            case 1:
                div.classList.add("piece-x");
                break;
            case -1:
                div.classList.add("piece-o");
                break;
        }
        return div;
    }
}
export default PlayerInfo;
