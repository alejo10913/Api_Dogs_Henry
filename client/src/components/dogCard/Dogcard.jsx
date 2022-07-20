import React from "react";
import { Link } from "react-router-dom";

export default function DogCard({name, image, height, weight, temperaments, id}){


return (
    <div>
     <Link to ={`./home/${id}`}>
     <h2> nombre raza: {name}</h2>
     <img src= {image} alt="imagen perro" width= '200px' weight= '200px'/>
     </Link>
    <h4>temperamentos: {temperaments} </h4>
     <h4>peso:  {weight}</h4>
     <h4>altura: {height}</h4>
    </div>
);
}



// <img src="{image}" alt="image dog" />