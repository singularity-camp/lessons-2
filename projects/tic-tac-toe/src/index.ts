import View from "./view/index";
import Tournament from "./model/Tournament";
import SlytherinBot from "./model/SlytherinBot";
import GryffindorBot from "./model/GryffindorBot";
import GryffindorBot2 from "./model/GryffindorBot2";
import RavenclawBot from "./model/RavenclawBot";
import HufflepuffBot from "./model/HufflepuffBot";

const slytherinBot = new SlytherinBot();
const gryffindorBot = new GryffindorBot(
  "Gryffindor",
  "/assets/gryffindor.webp"
);
const gryffindorBot2 = new GryffindorBot2(
  "Gryffindor2",
  "/assets/gryffindor.webp"
);
const ravenclawBot = new RavenclawBot("Ravenclaw", "/assets/ravenclaw.webp");
const hufflepuffBot = new HufflepuffBot(
  "Hufflepuff",
  "/assets/hufflepuff.webp"
);

const view = new View();
const tournament = new Tournament(
  view,
  [slytherinBot, gryffindorBot, gryffindorBot2, ravenclawBot, hufflepuffBot],
  4
);

async function handleLoad() {
  view.onInit();
  await tournament.start();
}

function handleUnload() {
  view.onDestroy();
}

window.addEventListener("load", handleLoad, {
  once: true,
});

window.addEventListener("unload", handleUnload, {
  once: true,
});
