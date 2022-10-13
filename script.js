let pokemonContainerEl = document.querySelector("#pokemon-container");

function getPokemon(){

    let inputVal = document.querySelector("#input-text").value
    console.log(inputVal)

    let apiURL = "https://pokeapi.co/api/v2/pokemon/" + inputVal

    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let pokemonName = document.createElement("h3");
            let pokemonID = document.createElement("h2");
            let pokemonSprite = document.createElement("img");

            pokemonName.textContent = data.name;
            pokemonID.textContent = data.id;
            pokemonSprite.setAttribute("src", data.sprites.front_default)

        
            pokemonContainerEl.appendChild(pokemonName)
            pokemonContainerEl.appendChild(pokemonID)
            pokemonContainerEl.appendChild(pokemonSprite)
        })


}
