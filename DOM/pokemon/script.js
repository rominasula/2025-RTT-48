// POKEDEX-LAB
// Romina Dervishi

//1. Change the `#trainer-name` to: `Trainer: Ash Ketchum`

let TrainerName = document.getElementById("trainer-name")
TrainerName.textContent = `Trainer: Ash Ketchum`

//2. Update the `.bio` paragraph to say:
//Ash is ready to catch 'em all with his new Pokémon team.

let bio1 = document.querySelector(".bio")
//console.log ( document.getElementsByName (".bio"));
bio1.textContent= "Ash is ready to catch 'em all with his new Pokémon team."

//3. Create a new `<li>` with the text `Pikachu` and append it to the `#pokemon-list`.

const liE1 = document.createElement("li")
const PokemonListE1 = document.getElementById("pokemon-list")

PokemonListE1.appendChild(liE1)
PokemonListE1.lastChild.textContent = "Pikachu";