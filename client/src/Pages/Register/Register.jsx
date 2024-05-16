import React from 'react'
import './Register.css'

const Register = () => {
  return (
    <div className='Register'>
        <div className='WrapperRegister'>
            <h1 className='title-reg'>Create an account</h1>
            <form className='form' action="">
                <input className='input' type="text" placeholder='First name' />
                <input className='input' type="text" placeholder='Last name' />
                <input className='input' type="text" placeholder='Username' />
                <input className='input' type="text" placeholder='Email' />
                <input className='input' type="text" placeholder='Password' />
                <input className='input' type="text" placeholder='Confirm Password' />
                <span className='agreement'>By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></span>
                <button className='btnRegister'>Create</button>
            </form>
        </div>
      
    </div>
  )
}

export default Register
