const allPokemon = document.querySelector(".allPokemon")

let URL = "https://pokeapi.co/api/v2/pokemon/"

for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((res) => res.json())
    .then((data) => showPokemon(data))
}

function showPokemon(pokemon) {
  const div = document.createElement("div")
  div.classList.add("pokemons")
  div.innerHTML = `
  <h2>${pokemon.name}</h2>
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg" alt="pokemons" />
  `
  allPokemon.append(div)
}