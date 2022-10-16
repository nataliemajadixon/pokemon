let pokemoniconContainerEl = document.querySelector("#pokemonicon-container");
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
            let pokemonbaseex = document.createElement("p");
            let pokemonheight = document.createElement("p");
            let pokemonweight = document.createElement("p");
            let pokemontype = document.createElement("p");
            let pokemonability = document.createElement("p");
            let pokemonhp = document.createElement("p");
            let pokemonattack = document.createElement("p");
            let pokemondefense = document.createElement("p");
           
            let pokemonSprite = document.createElement("img");

            pokemonName.textContent = data.name;
            pokemonID.textContent = `#${data.id}`
            pokemonbaseex.textContent = `Base Experience: ${data.base_experience}`
            pokemonheight.textContent = `Height: ${data.height} meter(s)`
            pokemonweight.textContent = `Weight: ${data.weight} kilogram(s)`
            pokemontype.textContent = `Type: ${data.types[0].type.name}`
            pokemonability.textContent = `Ability: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}`
            pokemonhp.textContent = `HP: ${data.stats[0].base_stat}`
            pokemonattack.textContent = `Attack: ${data.stats[1].base_stat}`
            pokemondefense.textContent = `Defense: ${data.stats[2].base_stat}`

            

            pokemonSprite.setAttribute("src", data.sprites.front_default)

           



            pokemonContainerEl.appendChild(pokemonName)
            pokemonContainerEl.appendChild(pokemonID)
            pokemonContainerEl.appendChild(pokemonbaseex)
            pokemonContainerEl.appendChild(pokemonheight)
            pokemonContainerEl.appendChild(pokemonweight)
            pokemonContainerEl.appendChild(pokemontype)
            pokemonContainerEl.appendChild(pokemonability)
            pokemonContainerEl.appendChild(pokemonhp)
            pokemonContainerEl.appendChild(pokemonattack)
            pokemonContainerEl.appendChild(pokemondefense)
            pokemoniconContainerEl.appendChild(pokemonSprite)

            
        })


}
