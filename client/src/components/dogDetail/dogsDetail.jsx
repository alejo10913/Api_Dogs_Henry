import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";


export default function DogsDetail(props){
    const dispatch = useDispatch()


    const params = useParams() 

    useEffect(()=> {
        dispatch(getDetail(params.id));
    },[params.id])

    const mydog = useSelector((state) => state.detail)
 


return(
    <div>
        {
            mydog.length>0 ? mydog.map(el =>{
            return(
            <div>
                <h1>Raza: {el.name}</h1>
                <img src={el.image} alt="imagen de perro" width= "200px" height= "200px" />
                <h3>Altura: {el.height}</h3>
                <h3>Peso: {el.weight}</h3>
                <h3>Años de vida: {el.life_span}</h3>
                <h3>temperamentos: {el.temperaments} </h3>
            
            </div>
            )

            } ): <p>loading...</p>
        }
        <Link to = '/home'>
        <button>volver</button> 
        </Link>
    </div>
)
}