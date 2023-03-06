import Cell from "./Cell.js";
class Playarea {
    #el;
    #cells;
    constructor() {
        this.#el = null;
        this.#cells = [];
    }
    onInit() {
        this.#el = document.getElementById("playarea");
        for (const cell of this.#cells) {
            cell.onInit();
        }
    }
    onDestroy() {
        this.#el = null;
        for (const cell of this.#cells) {
            cell.onDestroy();
        }
    }
    render(board) {
        this.#renderCells(board);
        this.#el?.replaceChildren(...this.#cells.map((cell) => cell.render()).filter(this.#filterOutNull));
    }
    renderCell(ind, piece) {
        this.#cells[ind].update(piece);
    }
    handleEmptyCellClick(resolve) {
        for (const cell of this.#cells) {
            if (cell.piece === 0) {
                cell.resolve = resolve;
            }
        }
    }
    #renderCells(board) {
        this.#cells = board.map((piece, ind) => new Cell(piece, ind));
        for (const cell of this.#cells) {
            cell.onInit();
        }
    }
    #filterOutNull(value) {
        return value !== null;
    }
}
export default Playarea;
