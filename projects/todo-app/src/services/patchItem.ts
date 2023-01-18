type PatchBody = {
  text?: string;
  done?: boolean;
};

async function patchItem(id: number, body: PatchBody) {
  try {
    const res = await fetch(`todo/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      await Promise.reject(new Error(`fail response: ${res.statusText}`));
    }
  } catch (e) {
    console.error(e);
  }
}

export default patchItem;
