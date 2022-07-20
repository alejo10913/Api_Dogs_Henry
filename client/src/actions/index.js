import axios from 'axios'

export function getDogs(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/dogs');
        return dispatch ({
            type: 'GET_DOGS',
            payload: json.data
        })
    }
}

export function getNameDog(name){
    return async function(dispatch){
        try{
            var json = await axios.get('http://localhost:3001/dogs?name=' + name)
            return dispatch({
                type: 'GET_NAME_DOG',
                payload: json.data
            })
        }   catch (error){
            console.log(error)
        }
    }
}

export function getTemperaments(){
    return async function (dispatch){
     let info = await axios.get('http://localhost:3001/temperament',{

     });
     return dispatch({
        type: 'GET_TEMPERAMENTS', 
        payload: info.data 
    });
    };
}


export function createDogs(data) {
    let arrTemperament = [];
    data.temperament.map(temp => arrTemperament.push(Number(temp.id)));
    data.temperament = arrTemperament;//reescribir el array recibido del formulario.
    console.log(data)
    return async function () {
        const createDog = await axios.post("http://localhost:3001/dogs", data);
        console.log(createDog);
    }
}


export function filterCreated(payload){
    return{
        type: 'FILTER_CREATED',
        payload
    }
}  

export function orderByName(payload){
    return{
        type: 'ORDER_BY_NAME',
        payload
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            let json =await axios.get("http://localhost:3001/dogs/" + id)
            return dispatch({
                type: 'GET_DETAILS',
                payload: json.data

            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function orderByTemperaments(payload) {
    console.log(payload)
       return {
          type: 'ORDER_BY_TEMPERAMENT',
          payload
       }
    }

    export function orderByPesoMin(payload) {
        return {
           type: 'ORDER_BY_PESO_MIN',
           payload
        }
     }
     
     export function orderByPesoMax(payload){
        console.log(payload)
        return {
           type: 'ORDER_BY_PESO_MAX',
           payload
        }
     }