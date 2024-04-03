import React from 'react'
import { useRef } from 'react'

const SignUpRef = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const messageRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${nameRef.current.value}, Email: ${email.current.value}, 
        Message: ${message.current.value}`
        );
    };
  return (
    <div>
       <form onSubmit={handleSubmit}> 

            <label htmlFor="">Name</label>
            <input name= "name" ref={nameRef} />
            <label htmlFor="">Email</label>
            <input name= "email"  ref={emailRef}  />
            <label htmlFor="">Message</label>
            <input name= "message" ref = {messageRef}  />
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default SignUpRef
