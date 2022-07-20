import React from 'react'
import {Link} from 'react-router-dom'



export default function landingPage(){
    return(
        <div className='landing'>
            <h1> Bienvenidos api Dogs
            </h1>
            <Link to ='/home'>
            <button>ingresar</button>
            </Link>
        </div>
    )
}