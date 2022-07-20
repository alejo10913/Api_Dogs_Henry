import React from "react";
import './paginado.css'

export default function Paginado ({dogsPerPage, allDogs, paginando}){
    const pageNumbers = []
   

    for (let i=1; i<= Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i)
    }
    
    return(
        <nav>
            <ul>
                {pageNumbers && pageNumbers.map(number =>{
                    return(
                    <li key={number}>
                        <a onClick={() => paginando(number)}>{number}</a>
                    </li>
                    )
                })}
            </ul>
            

        </nav>
    )
}