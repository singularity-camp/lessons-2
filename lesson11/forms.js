async function fetchPokemon(name) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const json = await res.json();
    return json;
  } catch (err) {
    console.error(err);
  }
}

async function fetchSpriteUrl(name) {
  try {
    const pokemonInfo = await fetchPokemon(name);
    return pokemonInfo?.sprites?.front_default;
  } catch (err) {
    console.error(err);
  }
}

function showImage(imgUrl) {
  const imgEl = document.getElementById("pokemon-image");
  imgEl.src = imgUrl;
}

async function handleSubmitForm(event) {
  event.preventDefault();

  const pokemonNameEl = document.getElementById("name");

  const imgUrl = await fetchSpriteUrl(pokemonNameEl.value);

  showImage(imgUrl);
}

function form() {
  const formEl = document.getElementById("form");

  formEl.addEventListener("submit", handleSubmitForm);
}

export default form;
