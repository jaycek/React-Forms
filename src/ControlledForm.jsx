import React from 'react'
import { useState } from 'react'

const ControlledForm = () => {

    const [inputValue,setInputValue] = useState('')
    const handleChange = (event)=>{
        setInputValue(event.target.value)
    }
    const handleDropdownChange = (event)=>{
        setSelectedOption(event.target.value)
    }
    
    const [selectedOption,setSelectedOption] = useState('volvo')

  return (
    <div>
      

      <form action="">
        <label htmlFor="">Input Value:
        <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <p>{inputValue}</p>
        <label for="cars">Choose a car:</label>

        <select value={selectedOption} onChange={handleDropdownChange}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>

        <p>Selected option: {selectedOption}</p>
      </form>
    </div>
  )
  }

export default ControlledForm
