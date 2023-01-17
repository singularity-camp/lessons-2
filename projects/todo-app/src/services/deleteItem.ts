async function deleteItem(id: number) {
  try {
    const res = await fetch(`todo/${id}`, { method: "DELETE" });
    if (!res.ok) {
      await Promise.reject(new Error(`fail response: ${res.statusText}`));
    }
  } catch (e) {
    console.error(e);
  }
}
