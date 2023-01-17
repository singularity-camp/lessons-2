type PostBody = {
  text: string;
};

async function postItem(body: PostBody) {
  try {
    const res = await fetch(`todo/`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      await Promise.reject(new Error(`fail response: ${res.statusText}`));
    }
  } catch (e) {
    console.error(e);
  }
}

export default postItem;
