class PlayerCard {
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
    render(player) {
        this.#el?.replaceChildren(this.#renderPlayerImage(player.name, player.avatarUrl), this.#renderPlayerTitle(player.name));
    }
    #renderPlayerImage(title, src) {
        const img = document.createElement("img");
        img.alt = title;
        img.src = src;
        const figure = document.createElement("figure");
        figure.appendChild(img);
        return figure;
    }
    #renderPlayerTitle(title) {
        const h3 = document.createElement("h3");
        h3.classList.add("card-title");
        h3.textContent = title;
        const section = document.createElement("section");
        section.classList.add("card-body");
        section.appendChild(h3);
        return section;
    }
}
export default PlayerCard;
