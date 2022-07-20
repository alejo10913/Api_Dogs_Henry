const {Dog, Temperament} =require('../db');
const axios = require('axios');
require('dotenv').config()
const YOUR_API_KEY = process.env

let getall = async () => {
    try {
        let getAllDogs = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`);
        getAllDogs = getAllDogs.data.map(e => {
        
            return {
                id: e.id, 
                name: e.name,
                weight: e.weight.metric.split("-"),
                height: e.height.metric.split("-"),
                life_span: e.life_span, 
                image: e.image.url,
                temperaments: e.temperament,
                createdInDb: false

            }
        });
        return getAllDogs;
        
        } catch (error) {
            return error
        }
}

let getinfoDB = async() =>{

    try {
        const dbDogs = await Dog.findAll({
            include: [
                {
                    model: Temperament,
                    through: { attributes: [] }
                }
            ]
        })

        const dogs = dbDogs.map(d =>{
            return {
                id: d.id,
                name: d.name,
                life_span: d.life_span,
                weight: d.weight,
                height: d.height,
                image: d.image,
                temperaments: d.temperaments.map(t => t.name),
                createdInDb: d.createdInDb
    
            }
        })
        return dogs
            
    } catch (error) {
        return error
    }
 
}

const getallApiDb = async () => {

    try {
    let infoApi = await getall()
    let infoDB = await getinfoDB()
    let infoTotal = infoDB.concat(infoApi)

    return infoTotal
    
    } catch (error) {
      return error  
    }
    
}

// const getallWQ = async (req, res) =>{
//     const {name} = req.query
//     let dogsTotal = await getallApiDb();
//     if (name){
//         let dogName = await dogsTotal.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()))
//         dogName.length?
//         dogName:
//         "No se econtraron perros con ese nombre"
//     }
//     else{
//         return dogsTotal
//     }
// }


// let createDog = async (req, res) =>{
//     const {name, height, weight, life_span, temperament} = req.body;

//     try {
//         let newDog = await Dog.create({
//             name, 
//             height,
//             weight,
//             life_span,
//             temperament
//         })
        
//         let temperamentoDB = await Temperament.findAll({
//             where:{ name: temperament}
//         })
//         newDog.addTemperament(temperamentoDB)

//     } catch (error) {
//         console.log(error)
//     }
// }

module.exports = {
    getallApiDb,
}

// [ ] GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados


// [ ] POST /dogs:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// // Crea una raza de perro en la base de datos relacionada con sus temperamentos