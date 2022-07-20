import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getNameDog} from '../../actions/index'


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function  handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDog(name))
    }

    return(
        <div>
            <input onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="buscar"
            />
            <button type="submit" onClick={(e) =>handleSubmit(e)}>buscar</button>

        </div>
    )
}