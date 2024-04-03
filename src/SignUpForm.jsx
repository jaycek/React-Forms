import React from 'react'
import { useState } from 'react'

const SignUpForm = () => {

    const [formData, setFormData] = useState({name:'',email:'',message:''})
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
        );
    };
  return (
    <div>
      <form onSubmit={handleSubmit}> 

        <label htmlFor="">Name</label>
        <input name= "name" value={formData.name}   onChange={e => {
            setFormData({
              ...formData,
              name: e.target.value
            });
          }} />
        <label htmlFor="">Email</label>
        <input name= "email" value={formData.email}  onChange={e => {
            setFormData({
              ...formData,
              email: e.target.value
            });
          }}   />
        <label htmlFor="">Message</label>
        <input name= "message" value={formData.message}  onChange={e => {
            setFormData({
              ...formData,
              message: e.target.value
            });
          }}  />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
