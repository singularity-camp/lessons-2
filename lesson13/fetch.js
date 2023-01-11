async function main() {
  // POST
  try {
    const resp = await fetch("https://swapi.dev/api/films/1", {
      method: "POST",
      body: JSON.stringify({
        title: "Star Wars and Soccesers Stone",
      }),
    });
    if (!resp.ok) {
      await Promise.reject("Erorr!", resp.status, resp.text());
    }

    const json = await resp.json();

    console.log(json);
  } catch (err) {
    console.error(err);
  }
  // DELETE
  try {
    const resp = await fetch("https://swapi.dev/api/films/1", {
      method: "DELETE",
    });
    if (!resp.ok) {
      await Promise.reject("Erorr!", resp.status, resp.text());
    }

    const json = await resp.json();

    console.log(json);
  } catch (err) {
    console.error(err);
  }

  // REQUEST
  try {
    const req = new Request({
      url: "https://swapi.dev/api/films/1",
      method: "DELETE",
    });
    const resp = await fetch(req);
    if (!resp.ok) {
      await Promise.reject("Erorr!", resp.status, resp.text());
    }

    const json = await resp.json();

    console.log(json);
  } catch (err) {
    console.error(err);
  }
}

main();
