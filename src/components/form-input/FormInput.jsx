import React from 'react';

import '../../css/style.css';


const FormInput=({handleChange, label, ...otherProps})=>(

    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label className={`${otherProps.value.length ? 'shrink' : '' } form-input-label`}>
                {label}
            </label>)
            :null
        }
    </div>
);

export default FormInput;

/* otherProps son las demás propiedades del input que se pasan del componente SignIn (required, 
    type, name, value) 
    El label prop ayudará a selectivamente regresar un label utilizando el operador ternario:
    si el desarrollador pasa el label: se genera, sino, no y regresa null.
    En el className se determinará el tipo de clase con el que retorna, si está en focus (ver estilos)
    Siempre tiene la clase: form-input-label pero además se agrega la clase shrink cuando el usuario
    teclea algo*/