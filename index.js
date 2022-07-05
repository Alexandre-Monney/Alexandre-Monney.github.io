const randomButton = function () {
  const button = document.querySelector(".button");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("click");
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
  const bulb = await result.json();
  let typesB = [];
  for (const type of bulb.types) {
    typesB.push(type.type.name);
  }

  const info = {
    name: frenchNamed.names[4].name,
    img: bulb.sprites.other["official-artwork"].front_default,
    type: typesB,
  };
  //   console.log(bulbIMG);
  return info;
};

const drawPokemon = async function () {
  const pokemon = document.querySelector("#pokemon");
  const bulb = await getPokemon();
  const h1 = document.createElement("h1");
  h1.textContent = bulb.name;
  const img = document.createElement("img");
  pokemon.appendChild(h1);
  img.src = bulb.img;
  //   console.log(bulb.img);
  //   console.log(bulb);
  //   console.log(pokemon.style);
  //   pokemon.style.backgroundImage = `url(${bulb.img})`;
  pokemon.appendChild(img);
  for (const type of bulb.type) {
    const text = document.createElement("div");
    text.innerText = type;
    pokemon.appendChild(text);
  }
};

document.addEventListener("DOMContentLoaded", randomButton);
