import React from "react";
import { Link } from "react-router-dom";
import './dogCard.css'
export default function DogCard({name, image, height, weight, temperaments, id, life_span}){


return (
    <div className="cardContainer">
     <Link to ={`./home/home/${id}`}>
     <h2> Nombre raza: {name}</h2>
     </Link>
     <div className="imagenes">
     <img src= {image} alt="imagen perro" width= '200px' weight= '200px'/>
     </div>
    <h4>Temperamentos: {temperaments} </h4>
     <h4>Peso min:  {weight[0]}  Peso max:  {weight[1]}</h4>
     <h4>Altura min: {height[0]} Altura max: {height[1]}   </h4>
     <h4>Años de vida: {life_span}</h4>
    </div>
);
}

