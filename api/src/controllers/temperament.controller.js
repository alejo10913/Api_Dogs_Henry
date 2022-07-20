const {Temperament} =require('../db');

const getTemperaments = async () => {
    const temperaments = await Temperament.findAll();
    const temperament = temperaments.map((temp) => {
      return {
        id: temp.id,
        name: temp.name,
        
      };
    });
    return temperament;
  };

module.exports = {getTemperaments}