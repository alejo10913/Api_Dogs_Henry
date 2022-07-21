import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {getNameDog} from '../../actions/index'
import './searchbar.css'

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const history = useHistory()

    function  handleInputChange(e){
        setName(e.target.value)
        
    }

    function handleSubmit(e){
        e.preventDefault()
        if(!name){
            alert('ingresa un nombre')
        }else{
            dispatch(getNameDog(name))
            setName("")
        }
       
    }

    return(
        <div>
            <form className="buscador" onSubmit={(e) =>handleSubmit(e)}>
           
            <input
             onChange={(e) => handleInputChange(e)} 
             type="text"
             placeholder="buscar"
             value={name}
            
            />
            <button onClick={(e) =>handleSubmit(e)}>buscar</button>

            </form>
        

        </div>
    )
}