class PlayersList {
    #el;
    constructor() {
        this.#el = null;
    }
    onInit() {
        this.#el = document.getElementById("players-list");
    }
    onDestroy() {
        this.#el = null;
    }
    render(players) {
        const children = [];
        for (const player of players) {
            children.push(this.#renderPlayer(player.name, player.avatarUrl));
        }
        this.#el?.replaceChildren(...children);
    }
    #renderPlayer(title, src) {
        const playerImage = this.#renderPlayerImage(title, src);
        const playerTitle = this.#renderPlayerTitle(title);
        const li = document.createElement("li");
        li.classList.add("card", "card-compact");
        li.append(playerImage, playerTitle);
        return li;
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
export default PlayersList;
