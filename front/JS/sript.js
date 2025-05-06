function getRickAndMorty() { // creamos funcion para traer la informacion 
    const name = document.getElementById("name") // extraemos del html la id de rickandmorty
    const rickInfo = document.getElementById ("rickInfo") // extraemos del html la informacion que aparecera en el DIV

    const pokemonName = pokemonNameInput.value.toLowerCase
    fetch(`http://localhost:3000/rickandmorty/characters${chara}`)
        .then (response => response.json())
        .then (data => {
            const {name, status, species, origin} = data
            rickInfo.innerHTML = `
            <h2>${name}</h2>
            <img src "${image}" alt = ${name}"/>
            <p>${status}</p>
            <p>${species}</p>
            <p>${origin}</p>
            `
        })
        .catch(error => rickInfo.innerHTML = `<p>Imposible acceder al pokemon solicitado</p>`)
}