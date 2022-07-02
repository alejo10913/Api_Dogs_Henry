const {Dog} =require('../db');
const axios = require('axios');
require('dotenv').config()
const YOUR_API_KEY = process.env

let getall = async (req, res) => {
    try {
        let getAllDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
        getAllDogs = getAllDogs.data;
    
        if(!getAllDogs){
            return res.status(400).send('no hay perros')
        }
        res.status(200).send({getAllDogs})
        
        } catch (error) {
            console.log(error)
        }
}

let createdog = async (req, res) =>{
    const {name, height, weight, life_span} = req.body;

    try {
        
    } catch (error) {
        res.status(400)
    }
}

module.exports = {
    getall,
}



// [ ] GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado


// [ ] GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados


// [ ] POST /dogs:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// // Crea una raza de perro en la base de datos relacionada con sus temperamentos