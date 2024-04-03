import React from 'react'
import ControlledForm from './ControlledForm'
import SignUpForm from './SignUpForm'
import FormInput from './FormValidation/FormInput'
import { useState } from 'react'
const App = () => {

   //But lets use useState
   const [values,setValues] = useState({
    username:'',
    email:'',
    fullName:'',
    password:'',
    confpassword:''
  })

  const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    label:"Username",
    errorMessage:"Username should be more then 3 characters and shouldnot have special characters",
    required:true,
    pattern: "^[A-Za-z0-9]{3,16}$"
  },
  {
    id:2,
    name:"email",
    type:"email",
    placeholder:"Email",
    label:"Email",
    errorMessage:"It should be a valid email",
    required:true

  },
  {
    id:3,
    name:"fullName",
    type:"text",
    placeholder:"Full Name",
    label:"Full Name",
    errorMessage:"",
    required:false
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    label:"Password",
    errorMessage:"Password should be more then 8 characters, and include 1 letter, 1 number and 1 special character",
    required:true
  },
  {
    id:5,
    name:"confpassword",
    type:"password",
    placeholder:"Confirm Password",
    label:"Confirm Password",
    errorMessage:"Passwords don't match",
    required:true

  }

  ]
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(
      values
      )
    
    //Can use useref or FormData to get values from the form
    // const data = new FormData(e.target)
    // console.log(data)
    // console.log(Object.fromEntries(data.entries()))
  
  }
  const handleChange = (e)=>{
    setValues({...values,[e.target.name]:e.target.value})
  }
  console.log(values)
  return (
    <div className='app'>
      {/* <ControlledForm /> */}
      {/* <SignUpForm /> */}
     
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
        {inputs.map((input)=>
           <FormInput key={input.id} {...input} value={values[input.name]} handleChange={handleChange} />
        )}
        <button >Submit</button>

      </form>
   

    </div>
  )
}

export default App
