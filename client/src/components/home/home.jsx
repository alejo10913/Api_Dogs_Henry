import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getDogs, filterCreated, orderByName, orderByTemperaments, getTemperaments, orderByPesoMax, orderByPesoMin } from '../../actions';
import {Link} from 'react-router-dom'
import DogCard from '../dogCard/Dogcard.jsx';
import Paginado from '../paginado/paginado.jsx';
import SearchBar from '../searchbar/searchbar.jsx';


export default function Home(){
    const dispatch = useDispatch() //para despacahr las acciones con la constante 
    const allDogs = useSelector((state) => state.alldogs) // pasamos el estado, con useSelectro trae en la constante todo lo que esta en el estado de allDogs
    const allTemp =useSelector((state) => state.temperaments)
    
    
    const [state, setState] = useState(allDogs)     
    const [orden, setOrden] = useState('')

    
    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setdogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog)

   
    const paginando = (pageNumbers) =>{
            setCurrentPage(pageNumbers)
    }


    useEffect(()=>{  // traemos los perros cuando el componente s emonta 
        setState(allDogs)
    }, [allDogs]) // segundo parametro del useEffect para que no entre en un ciclo infinito

    useEffect(()=>{  
        dispatch(getDogs());
        dispatch(getTemperaments())
    }, [dispatch]) 

    function handleClick(e){ // funcion que llamamos en el boton. 
        e.preventDefault();
        dispatch(getDogs())
    }

    function handleSort (e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`ordenado ${e.target.value}`)
    };

    function handlefilterCreated(e){
        dispatch(filterCreated(e.target.value))
    };

    function handleTemperaments (e) { 
          dispatch(orderByTemperaments(e.target.value))
    }
       
    function handleSortPeso(e){
        if(e.target.value === "min"){
            e.preventDefault ();
            dispatch (orderByPesoMin(e.target.value));
            setCurrentPage(1);
            setOrden(`ordenado ${e.target.value}`)
        }else if(e.target.value === "max"){
            e.preventDefault ();
            dispatch (orderByPesoMax(e.target.value));
            setCurrentPage(1);
            setOrden(`ordenado ${e.target.value}`)
        }
    }


    return (
        <div>
            <Link to ='/dogs'>Crear raza</Link>
            <h1> api dogs</h1>
            <button onClick={e => {handleClick(e)}}>
                cargar todas las razas
            </button>

            <div>
                <select onChange={e => {handleSort(e)}}>
                    <option value="ascendente"> Ascendente</option>
                    <option value="descendente"> Descendente</option>
                </select>
                <select onChange={e => {handlefilterCreated(e)}}>
                    <option value="Existente">Existente</option>
                    <option value="Creado">Creado</option>
                </select>

            <select onChange={ (e) =>handleTemperaments(e)}>
                    <option  >Filtrar por temperamento</option>
                    {allTemp?.map((temp)=>(
                              <option value={temp.name}>{temp.name}</option>
                           ))}
            </select>

            <select onChange={handleSortPeso}>
                <option >Ordenar por peso</option>
                <option value="min">Min-Max</option>
                <option value="max">Max-Min</option>
            </select>  

            <Paginado
            dogsPerPage={dogsPerPage}
            allDogs = {allDogs.length}
            paginando = {paginando}
            />
           

            <SearchBar
            
            />

             {
                currentDogs? currentDogs.map(e => {
                    return(
                    <div key= {e.id}>
                        <DogCard
                        id = {e.id}
                        name={e.name}
                        image= {e.image} 
                        weight={e.weight} 
                        height ={e.height}
                        temperaments = {e.temperaments}
                        />
                    </div>
                )}): 'no hay datos'
             }   



            <Paginado
                dogsPerPage={dogsPerPage}
                allDogs = {allDogs.length}
                paginando = {paginando}
                />
            
                </div>
            </div>



    )

    

}