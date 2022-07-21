import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTemperaments, createDogs} from "../../actions";
import { Link} from "react-router-dom";
import '../dogcreate/dogCreate.css'

function validate(input) {
    let errors = {};
    //nombre
    if (!input.name) {
        errors.name = "se requiere un nombre";
    }else if (!/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) {
        errors.name= "Ingrese más de una letra ,la primera letra en Mayúscula, solo letras y números"
    } 
    // altura minima
    else if (!input.height_min) {
        errors.height_min = "la altura minima es requerida";
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.height_min)) {
        errors.height_min = "Solo numeros enteros"
    }else if (input.height_min < 1) {
        errors.height_min = "pesos mayores que 1"
    }
    
    //altura maxima
    else if (!input.height_max ) {
      errors.height_max = "la altura maxima es requerida";
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.height_max)) {
        errors.height_max = "Ingrese solo números enteros"   ///lee el primer numero no el numero entero
     }else if (parseInt(input.height_max) <= parseInt(input.height_min)) {
        errors.height_max = "Debe ser mayor a la altura miníma"
     }

    //peso minimo
    else if (!input.weight_min) {
      errors.weight_min = "el peso es requerido";
    }else if(Number(input.weight_max) <Number( input.weight_min)){
    errors.height_min = "el peso minimo no puede exceder al maximo"
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.weight_min)) {
        errors.weight_min = "Ingrese solo números enteros"
     }else if (input.weight_min < 1) {
     errors.weight_min = "pesos mayores que 1"
     }

    // peso maximo
    else if (!input.weight_max) {
        errors.weight_max = "el peso es requerido";
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.weight_max)) {
        errors.pesoMax = "Ingrese solo números enteros"
     }else if (parseInt(input.weight_max)  <=  parseInt(input.weight_min)) {
     errors.weight_max = "Debe ser mayor al peso minímo"
     }
    
    //años de vida

    else if (!input.life_span) {
        errors.life_span = "los años de vida son requeridos";
    }else if (!/^[0-9]\d*(\.\d+)?$/.test(input.life_span)) {
        errors.life_span = "Ingrese solo números enteros"
     }else if (input.life_span  <  0) {
     errors.life_span = "solo edades mayores o iguales a 1 año"
     }else if (input.life_span > 25) {
     errors.life_span = "un perro no vive tantos años"
     }
    
    //imagen
    else if (!input.image) {
        errors.image = "la imagen es requerida";
    } 
    //temperamentos
    else if (!input.temperament.length) {
        errors.temperament = "los temperamentos son requeridos ";
    }
    return errors;
}

export default function DogCreate() {
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state) => state.temperaments);
    const [errors, setErrors] = useState([""]);

    //Obtener todos los temperamentos
    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch])

    const [input, setInput] = useState({
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        image: "",
        temperament: [],
    });

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }
    console.log(input)

    function handleSelect(e) {
        setInput({
            ...input,
            temperament: (input.temperament.length === 0) ? [{ id: e.target.value, name: e.target.options[e.target.selectedIndex].text }] : [...input.temperament, { id: e.target.value, name: e.target.options[e.target.selectedIndex].text }]
        });
        setErrors(
            validate({
                ...input,
                temperaments: [{ ...input.temperament }, { id: e.target.value, name: e.target.options[e.target.selectedIndex].text }],
            })
        );
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(input)
        dispatch(createDogs(input));
        alert("raza creada");
        
        setInput({ name: "", height: "", weight: "", life_span: "", image: "", temperament: [] });
        history.push('/home');
    }

    function handleDelete(id) {
        setInput({ ...input, temperament: input.temperament.filter((temp) => temp.id !== id) });
    }

    return (
        <div className="container">
            <div className="container2">
                <h4>ingresa la informacion requerida</h4>
            
            <form onSubmit={handleSubmit}>
{/* --------------------------nombre------------------------------------- */}
                <div>
                    <label>Nombre:  </label>
                    <input type="text" value={input.name} name="name" onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>

{/* --------------------------alturas------------------------------------- */}
                <div>
                    <label> Altura minima:  </label>
                    <input type="text" value={input.height_min} name="height_min" onChange={handleChange} />
                    {errors.height_min && <p>{errors.height_min}</p>}
                </div>
                <div>
                    <label> Altura maxima:  </label>
                    <input type="text" value={input.height_max} name="height_max" onChange={handleChange} />
                    {errors.height_max && <p>{errors.height_max}</p>}
                </div>

{/* --------------------------pesos------------------------------------- */}                
                <div>
                    <label> Peso minimo:  </label>
                    <input type="text" value={input.weight_min} name="weight_min" onChange={handleChange} />
                    {errors.weight_min && <p>{errors.weight_min}</p>}
                </div>
                <div>
                    <label> Peso maximo:  </label>
                    <input type="text" value={input.weight_max} name="weight_max" onChange={handleChange} />
                    {errors.weight_max && <p>{errors.weight_max}</p>}
                </div>

{/* --------------------------años de vida ------------------------------------ */}
                <div>
                    <label> Años de vida:  </label>
                    <input type="text" value={input.life_span} name="life_span" onChange={handleChange} />
                    {errors.life_span && <p>{errors.life_span}</p>}
                </div>

{/* --------------------------imagen------------------------------------- */}
                <div>
                    <label> Imagen:  </label>
                    <input type="text" value={input.image} name="image" onChange={handleChange} />
                    {errors.image && <p>{errors.image}</p>}
                </div>

{/* ---------------------------------------------------------------------- */}
                <select onChange={(e) => handleSelect(e)} defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    {temperaments?.map((temp) => (
                    <option value={temp.id}>{temp.name}</option>
                    ))}
                </select>

                <ul>
                    {input.temperament.map((el, i) => (<li key={i}>{el.name}</li>))}
                </ul>
                <button disabled={Object.keys(errors).length === 0 ? false : true} type="submit">Crear raza</button>
            </form>

            {input.temperament.map((el) => (
                <div>
                    <p>{el.name}</p>
                    <button onClick={() => handleDelete(el.id)}>X</button>
                </div>
                
            ))}
        

        <Link to = '/home'>
        <button>volver a pagina principal</button> 
        </Link>
        </div>
        </div>
    );
}
