const {Temperament} =require('../db');
const axios = require('axios');
require('dotenv').config()
const YOUR_API_KEY = process.env


const getallTemp = async() =>{


 try {
    const getTemperamentsDB = await Temperament.findAll();   // findAll: trae todas los atributos indiscriminadamente 
        if(!getTemperamentsDB.length ){
            let GetAllTemperaments = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
            let repeatedTemper =GetAllTemperaments.data.map(elemento => elemento.temperament).toString().split(',')
            
            let result = [...new Set(repeatedTemper.sort())]

            // let result = repeatedTemper.filter((item, index)=>{
            //     return repeatedTemper.indexOf(item) === index
            // })  
        
            result = result.map(item => ({ name: item }));
            await Temperament.bulkCreate(result) // cuando se le pasa un array de datos para que sea mas rapido la creacion. solo guarda informacion que tengo en la entidad 
            

        }
    
 } catch (error) {
    console.log(error)
 }
}

module.exports = {getallTemp}

//findOrCreate : si lo encuentra lo devuelve, si no lo crea 
// findByPk: le pasamos el id y trae por Pk
// create: crea de a uno 
// findOne: trae el primero que encuentre con el parametro que se le pase 

