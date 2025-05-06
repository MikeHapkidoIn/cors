const express = require("express");
const axios = require("axios")
const app = express();
const cors = require ("cors")

app.use(cors()) //hacemos que todas las rutas pasen por aqui y permita la entrada


// con esto solicitamos la informacion de los nombres de los personajes desde la api generando async (asincronia) para esperar a que  
//lleguen los datos antes de seguir trabajando.
app.get('/rickandmorty/:name', async (req,res) => {
    const name = req.params.name
    const url = `https://rickandmortyapi.com/api/character/?name=${name}`

    try{
        const response = await axios.get(url)
        const character = response.data.results[0]
        const {name, status, species, origin, image} = character;    // esto es lo que nos trae la api 
        

        res.json ({name, status, species, origin: origin.name, image})
    } catch (Error) { // usamos cacth para si sale un error aparezca el mensaje de abajo
        res.status (404).json ({error: "el personaje no existe"})

    }

})



app.listen(3000, () => {
    console.log("el puerto esta escuchando en el puerto http://localhost:3000")
})


