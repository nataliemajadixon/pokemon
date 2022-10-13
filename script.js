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
            let pokemonID = document.createElement("h3");

            pokemonName.textContent = data.name;
        
            pokemonContainerEl.appendChild(pokemonName)
        })


}
