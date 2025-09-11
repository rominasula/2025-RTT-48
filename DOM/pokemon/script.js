// POKEDEX-LAB
// Romina Dervishi

// 1. Change the `#trainer-name` to: `Trainer: Ash Ketchum`

let trainerNameEl = document.getElementById("trainer-name");

trainerNameEl.textContent = "Trainer: Ash Ketchum";

// 2. Update the `.bio` paragraph to say:
//     > Ash is ready to catch 'em all with his new Pokémon team.

let bioEl = document.querySelector(".bio");
// console.log(bioEl);

bioEl.textContent = "Ash is ready to catch 'em all with his new Pokémon team.";

// 3. Create a new `<li>` with the text `Pikachu` and append it to the `#pokemon-list`.

const liEl = document.createElement("li");
const pokemonListEl = document.getElementById("pokemon-list");

pokemonListEl.appendChild(liEl);
pokemonListEl.lastChild.textContent = "Pikachu";

// 4. Add a new `<p>` inside `#new-pokemon-container` that says:
    // > A wild adventure awaits!

const pEl = document.createElement("p");
const pokemonContainer = document.getElementById("new-pokemon-container");

pokemonContainer.appendChild(pEl);
pokemonContainer.firstChild.textContent = "A new adventure awaits!";

/*5. Inside the `#badges` div:
    - Add a `<h2>` that says: `Badges Collected`
    - Add a `<ul>` with three badges:
        - Boulder Badge
        - Cascade Badge
        - Thunder Badge
*/

const badges = document.getElementById("badges");
// const h2El = document.createElement("h2");
// const ulEl = document.createElement("ul");



badges.appendChild(document.createElement("h2")); 
badges.firstChild.textContent = "Badges Collected";
badges.appendChild(document.createElement("ul"));
badges.querySelector("ul").innerHTML = "<li>Boulder Badge</li> <li>Cascade Badge</li> <li>Thunder Badge</li>";
// // badges.nextSibling.appendChild(document.createElement("li"));
// badges.appendChild(document.createElement("ul"));

// const li2 = document.createElement("li");
// badges.querySelector("ul").appendChild(li2);

// 6. Add the class `"pokemon"` to each `<li>` inside `#pokemon-list`.
document.getElementById("pokemon-list").querySelector("li").classList.add("pokemon");

// console.log(document.getElementById("pokemon-list").querySelector("li"));

// 7. Replace the list item `"Bulbasaur"` with a new `<li>` containing `"Squirtle"`.
const bulbasaur = document.querySelector("#pokemon-list :nth-child(2)");
// console.log(bulbasaur);
// let squirtle = document.createElement("li")
const newLi = document.createElement('li');

document.getElementById("pokemon-list").replaceChild(newLi, bulbasaur);
document.querySelector("#pokemon-list :nth-child(2)").textContent = "Squirtle";

// 8. Create a new `div` for a Pokémon team and populate it with 3 Pokémon cards.
//     Each card should be structured like this:
//     `<div class="pokemon-card">   <h3>Pikachu</h3>   <p>Type: Electric</p> </div>`
//     Pokémon to include:
//     - Pikachu (Electric)
//     - Charmander (Fire)
//     - Squirtle (Water)

const createDiv = document.createElement("div");
createDiv.classList.add("pokemon-card");
// building the structure first

document.body.appendChild(createDiv);

document.querySelector(".pokemon-card").appendChild(document.createElement("h3"));
document.querySelector(".pokemon-card :nth-child(1)").textContent = "Pikachu";
document.querySelector(".pokemon-card").appendChild(document.createElement("p"));
document.querySelector(".pokemon-card :nth-child(2)").textContent = "Type: Electric";

document.querySelector(".pokemon-card").appendChild(document.createElement("h3"));
document.querySelector(".pokemon-card :nth-child(3)").textContent = "Charmander";
document.querySelector(".pokemon-card").appendChild(document.createElement("p"));
document.querySelector(".pokemon-card :nth-child(4)").textContent = "Type: Fire";

document.querySelector(".pokemon-card").appendChild(document.createElement("h3"));
document.querySelector(".pokemon-card :nth-child(5)").textContent = "Squirtle";
document.querySelector(".pokemon-card").appendChild(document.createElement("p"));
document.querySelector(".pokemon-card :nth-child(6)").textContent = "Type: Water";

// 9. Inside `#journal`:
//     - Add a `<h2>` with: `Trainer's Journal`
//     - Add a paragraph with today's date (`new Date().toDateString()`)
//     - Add another paragraph with this text:
//         > Ash saw a wild Snorlax blocking the road.
document.querySelector("#journal").appendChild(document.createElement("h2"));
document.querySelector("#journal :nth-child(1)").textContent = "Trainer's Journal";
document.querySelector("#journal").appendChild(document.createElement("p"));
const currentDate = new Date().toDateString();
document.querySelector("#journal :nth-child(2)").textContent = `${currentDate}`;
document.querySelector("#journal").appendChild(document.createElement("p"));
document.querySelector("#journal :nth-child(3)").textContent = "Ash saw a wild Snorlax blocking the road.";

// 10. Select the `"Charmander"` list item and remove it from the list.

const charmander = document.querySelector("#pokemon-list :nth-child(1)");
charmander.remove();

/*
11. Create a new `div` with the id `pokedex`.
    Use the following array to dynamically generate 3 Pokédex entries:
    `const pokedex = [   { name: "Bulbasaur", type: "Grass/Poison", number: "#001" },   { name: "Charmander", type: "Fire", number: "#004" },   { name: "Squirtle", type: "Water", number: "#007" } ];`
    Each entry should follow this structure:
    `<div class="entry">   <h4>Name: Bulbasaur</h4>   <p>Type: Grass/Poison</p>   <p>Number: #001</p> </div>`
*/

const pokedexDiv = document.body.appendChild(document.createElement("div"));
pokedexDiv.id = "pokedex";

const pokedex = [   { 
    name: "Bulbasaur", 
    type: "Grass/Poison", 
    number: "#001" },   
    
    { name: "Charmander", 
        type: "Fire", 
        number: "#004" },   
        
        { name: "Squirtle", 
            type: "Water", 
            number: "#007" } 
        ];

for (let i = 0; i < pokedex.length; i++) {
    const pokemon = pokedex[i];
    pokedexDiv.innerHTML += `
    <div class="entry">
    <h4>Name: ${pokemon.name}</h4>
      <p>Type: ${pokemon.type}</p>
      <p>Number: ${pokemon.number}</p>
    </div>`

}

document.body.appendChild(pokedexDiv);






