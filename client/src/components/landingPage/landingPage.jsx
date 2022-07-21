import React from 'react'
import {Link} from 'react-router-dom'
import '../../components/landingPage/landingPage.css'


export default function landingPage(){
    return(
        <div className='landing'>
            <h1> Todas las razas de perros en un solo lugar</h1>
            <h2>Bienvenidos</h2>
            <Link to ='/home'>
            <button>ingresar</button>
            </Link>
        </div>
    )
}