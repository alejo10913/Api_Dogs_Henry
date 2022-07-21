const {Temperament} =require('../db');
const axios = require('axios');
require('dotenv').config()
const YOUR_API_KEY = process.env


const getallTemp = async() =>{


 try {
    const getTemperamentsDB = await Temperament.findAll(); 
        if(!getTemperamentsDB.length ){
            let GetAlldogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${YOUR_API_KEY}`)
            let repeatedTemper =GetAlldogs.data.map(dog => dog.temperament).toString().split(',')
     
            let result = [...new Set(repeatedTemper.sort())]
        
            result = result.map(item => ({ name: item }));
            await Temperament.bulkCreate(result)
        }
    
 } catch (error) {
    console.log(error)
 }
}

module.exports = {getallTemp}
