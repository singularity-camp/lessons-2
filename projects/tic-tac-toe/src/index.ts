import View from "./view/index";
import Tournament from "./model/Tournament";
import User from "./model/User";

const user1 = new User("user1", "");
const user2 = new User("user1", "");

const tournamet = new Tournament([user1, user2], 1);
const view = new View();

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
