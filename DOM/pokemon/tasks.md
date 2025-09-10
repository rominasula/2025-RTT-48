TASKS:

1. Change the `#trainer-name` to: `Trainer: Ash Ketchum`

2. Update the `.bio` paragraph to say:
    > Ash is ready to catch 'em all with his new Pokémon team.

3. Create a new `<li>` with the text `Pikachu` and append it to the `#pokemon-list`.

4. Add a new `<p>` inside `#new-pokemon-container` that says:
    > A wild adventure awaits!

5. Inside the `#badges` div:
    - Add a `<h2>` that says: `Badges Collected`
    - Add a `<ul>` with three badges:
        - Boulder Badge
        - Cascade Badge
        - Thunder Badge

6. Add the class `"pokemon"` to each `<li>` inside `#pokemon-list`.

7. Replace the list item `"Bulbasaur"` with a new `<li>` containing `"Squirtle"`.

8. Create a new `div` for a Pokémon team and populate it with 3 Pokémon cards.
    Each card should be structured like this:
    `<div class="pokemon-card">   <h3>Pikachu</h3>   <p>Type: Electric</p> </div>`
    Pokémon to include:
    - Pikachu (Electric)
    - Charmander (Fire)
    - Squirtle (Water)

9. Inside `#journal`:
    - Add a `<h2>` with: `Trainer's Journal`
    - Add a paragraph with today's date (`new Date().toDateString()`)
    - Add another paragraph with this text:
        > Ash saw a wild Snorlax blocking the road.

10. Select the `"Charmander"` list item and remove it from the list.

11. Create a new `div` with the id `pokedex`.
    Use the following array to dynamically generate 3 Pokédex entries:
    `const pokedex = [   { name: "Bulbasaur", type: "Grass/Poison", number: "#001" },   { name: "Charmander", type: "Fire", number: "#004" },   { name: "Squirtle", type: "Water", number: "#007" } ];`
    Each entry should follow this structure:
    `<div class="entry">   <h4>Name: Bulbasaur</h4>   <p>Type: Grass/Poison</p>   <p>Number: #001</p> </div>`