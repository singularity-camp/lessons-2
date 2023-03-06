class Player {
    #name;
    #avatarUrl;
    constructor(name, avatarUrl) {
        this.#name = name;
        this.#avatarUrl = avatarUrl;
    }
    get name() {
        return this.#name;
    }
    get avatarUrl() {
        return this.#avatarUrl;
    }
}
export default Player;
