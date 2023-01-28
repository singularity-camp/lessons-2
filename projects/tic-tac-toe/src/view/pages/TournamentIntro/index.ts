import Page from "../index";
import { Component, Hideable, Renderable } from "../../types";
import PlayersList from "./PlayersList";
import Tournament from "../../../model/Tournament";

class TournamentIntro extends Page implements Hideable, Component, Renderable {
  readonly #playersList: PlayersList;

  constructor(tournament: Tournament) {
    super();
    this.#playersList = new PlayersList(tournament);
  }

  onInit() {
    this.el = document.getElementById(
      "page-tournament-intro"
    ) as HTMLDivElement;
    this.#playersList.onInit();
  }

  onDestroy() {
    this.el = null;
  }

  render() {
    this.#playersList.render();
  }
}

export default TournamentIntro;
