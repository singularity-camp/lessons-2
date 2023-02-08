import { Route } from "./types";
import home from "./view-home";
import about from "./view-about";

export const routes: Route[] = [
  {
    path: "/",
    view: home,
  },
  {
    path: "/about",
    view: about,
  },
];

export async function router(
  app: HTMLElement,
  location: Location,
  routes: Route[]
) {
  const match = routes.find((route) => route.path === location.pathname);

  // NOTE: THINK!!!
  if (!match) {
    return;
  }

  const el = await match.view.render();
  if (Array.isArray(el)) {
    app.replaceChildren(...el);
    return;
  }

  app.replaceChildren(el);
  return;
}
