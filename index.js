const randomizeButton = function () {
  const button = document.querySelector(".button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#pokemon").innerHTML = "";
    drawPokemon();
  });
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getPokemon = async function () {
  const pokemonNumber = getRandomInt(1, 151);

  const frenchName = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${pokemonNumber}`
  );

  const result = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
  );

  const frenchNamed = await frenchName.json();
  const poke = await result.json();
  let types = [];
  for (const type of poke.types) {
    types.push(type.type.name);
  }

  const info = {
    name: frenchNamed.names[4].name,
    img: poke.sprites.other["official-artwork"].front_default,
    type: types,
  };
  return info;
};

const drawPokemon = async function () {
  const selectedPokemon = await getPokemon();

  const pokemon = document.querySelector("#pokemon");

  const h1 = document.createElement("h1");
  const img = document.createElement("img");

  h1.textContent = selectedPokemon.name;
  img.src = selectedPokemon.img;

  pokemon.appendChild(h1);
  pokemon.appendChild(img);

  for (const type of selectedPokemon.type) {
    const text = document.createElement("div");
    text.innerText = type;
    pokemon.appendChild(text);
  }
};

document.addEventListener("DOMContentLoaded", randomizeButton);
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  document.querySelector("#pokemon").innerText =
    "TOUCHE PAS A CA FILS DEEEEEEEE";
  return false;
});
