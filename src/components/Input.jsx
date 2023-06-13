import React, { useState } from 'react'

import { AppRouter } from '../AppRouter';

export const Input = () => {

  const [value,setValue] = useState(''); 

  const handleChange = (event) =>{
    const mayus = event.target.value.toUpperCase();
    setValue(mayus);
  };
    
  const handleConfirm = (event)  =>{
        event.preventDefault();
        localStorage.setItem('palabra', value);
  }

  return (
    <div>
        <h3>Introduzca la palabra a adivinar</h3>

        <form onClick={
            (e) => {
                handleConfirm(e);
        }
        }>
            <input type="text" name='palabra' onChange={handleChange} value={value}/>
            <input type="Submit" value='Confirmar'/>
        </form>
    </div>
  )
}
