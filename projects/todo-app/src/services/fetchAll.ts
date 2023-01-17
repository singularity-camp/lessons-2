import { ServerTodo } from "./types";

async function fetchAll() {
  try {
    const res = await fetch("todo");
    if (!res.ok) {
      await Promise.reject(new Error(`fail response: ${res.statusText}`));
    }
    const json: ServerTodo[] = await res.json();

    return json;
  } catch (e) {
    console.error(e);
  }
}

export default fetchAll;
