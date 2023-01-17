import { ServerTodo } from "./types";

async function fetchItem(id: number) {
  try {
    const res = await fetch(`todo/${id}`);
    if (!res.ok) {
      await Promise.reject(new Error(`fail response: ${res.statusText}`));
    }
    const json: ServerTodo = await res.json();

    return json;
  } catch (e) {
    console.error(e);
  }
}
