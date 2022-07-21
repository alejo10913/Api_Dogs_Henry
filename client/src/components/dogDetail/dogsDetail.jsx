import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../actions";
import { useEffect } from "react";
import './dogsDetail.css'

export default function DogsDetail(props){
    const dispatch = useDispatch()
       const params = useParams() 

    useEffect(()=> {
        dispatch(getDetail(params.id));
    },[params.id])

    const mydog = useSelector((state) => state.detail)

return(
    <div>

<Link to = '/home'>
        <button>volver a la pagina principal</button> 
        </Link>

        {
            mydog.length>0 ? mydog.map(el =>{
            return(
            <div className="containerdetail">
                <div className="image">
                <img src={el.image} alt="imagen de perro"  />
                </div>
                <div className="info">
                <h2>Raza: {el.name}</h2>
                <h4>altura min: {el.height[0]} altura max: {el.height[1]}</h4> 
                <h4>peso min:  {el.weight[0]}  peso max:  {el.weight[1]}</h4>
                <h4>Años de vida: {el.life_span}</h4>
                <h4>temperamentos: {el.temperaments} </h4>
                </div>
            </div>
            )

            } ): <p>loading...</p>
        }
       
    </div>
)
}