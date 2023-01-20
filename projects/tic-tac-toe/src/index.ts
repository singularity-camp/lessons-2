import Tournament from "./model/Tournament";
import User from "./model/User";
import PageStart from "./view/pages/PageStart/index";

const user1 = new User("user1", "");
const user2 = new User("user1", "");

const tournamet = new Tournament([user1, user2], 1);
const pageStart = new PageStart();

async function handleLoad() {}

function handleUnload() {}

window.addEventListener("load", handleLoad, {
  once: true,
});

window.addEventListener("unload", handleUnload, {
  once: true,
});
