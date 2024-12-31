let pokemonName;

function searchPokemon() {
  pokemonName = document.querySelector(".pokemon-search").value.toLowerCase();
  document.querySelector(".pokemon-search").value = "";
  displayPokemon();
}

let pokemonImg = document.querySelector(".pokemon-img");
function displayPokemon() {
  const pokemon = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  pokemon
    .then((response) => {
      if (!response.ok) {
        alert("Pokemon Not Found!");
        throw new Error("Pokemon Not Found!");
      } else {
        return response.json();
      }
    })
    .then((pokemonData) => {
      pokemonImg.src = pokemonData.sprites.front_default;
      pokemonImg.style.display = "inline";
    })
    .catch((error) => {
      console.log("Pokemon not found");
    });
}
