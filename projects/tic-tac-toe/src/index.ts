import View from "./view/index";
import Tournament from "./model/Tournament";
import User from "./model/User";

const user1 = new User("user1", "/assets/gryffindor.webp");
const user2 = new User("user2", "/assets/hufflepuff.webp");

const tournament = new Tournament([user1, user2], 1);
const view = new View(tournament);

async function handleLoad() {
  view.onInit();
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
