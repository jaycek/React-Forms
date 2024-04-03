import React from 'react'
import './formInput.css'
import { useState } from 'react';

const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    const {label,errorMessage,handleChange,id,...inputProps} = props
    const handleFocus = (e) => {
        setFocused(true);
      };

      
  return (
    <div className='formInput'>
        <label htmlFor="" >{label}</label>
        <input {...inputProps} 
        onChange={handleChange}
        onBlur={handleFocus}
        onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
        focused={focused.toString()}
        />
        <span>{errorMessage}</span>
    </div>
  )
}

export default FormInput
