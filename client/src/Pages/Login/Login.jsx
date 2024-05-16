import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='Login'>
        <div className='WrapperRegister'>
            <h1 className='title-reg'>Create an account</h1>
            <form className='formLogin' action="">
              
                <input className='input' type="text" placeholder='Username' />
                <input className='input' type="text" placeholder='Email' />
                <button className='btnLogin'>Create</button>
                <a className='linkLogin' href="">DO NOT YOU REMEMBER THE PASSWORD?</a>
                <a className='linkLogin' href="">CREATE A NEW ACCOUNT</a>
            </form>
        </div>
      
    </div>
  )
}

export default Login
