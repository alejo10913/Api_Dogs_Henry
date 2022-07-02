const {Temperament} =require('../db');
const axios = require('axios');
require('dotenv').config()
const YOUR_API_KEY = process.env


let getall = async(req, res) =>{

    let GetAllTemperaments = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
    let repeatedTemper =GetAllTemperaments.data.map(elemento => elemento.temperament).toString().split(',')
    repeatedTemper = new Set(repeatedTemper) 
    console.log(repeatedTemper)
   
   


    
}

module.exports = {
    getall,
}
