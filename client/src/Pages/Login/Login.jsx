import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signInStart,signInSuccess,signInFailure} from '../../redux/userRedux'
import OAuth from '../../Components/OAuth/OAuth'

const Login = () => {

  const navigate = useNavigate()
  const [formData , setFormData]=useState({});
  const {error ,loading}=useSelector((state)=>state.user)
  const dispatch=useDispatch()

  const handleChange=(e)=>{
    setFormData({...formData ,[e.target.id]: e.target.value})
}

  const handleSubmit=async(e)=>{
     e.preventDefault()
  
    try {
     dispatch(signInStart())
      const res=await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const data=await res.json()
    if(data.success === false){
      dispatch(signInFailure(data.message))
      return;
        }
        dispatch(signInSuccess(data))
        navigate('/')
      } catch (error) {
        dispatch(signInFailure(error.message))
      }
  
    }
  return (
    <div className='Login'>
        <div className='WrapperRegister'>
            <h1 className='title-reg'>Log In</h1>
            <form className='form' onSubmit={handleSubmit}>
              
                
                <input className='input' type="text" placeholder='Email' id='email' onChange={handleChange} />
                <input className='input' type="password" placeholder='password' id='password' onChange={handleChange}/>
                <button className='btnRegister'>Login</button>
                
            </form>

            <span className='spanReg'>
            <p>Don't have account yet ?</p>
            <Link className='LinkReg' to={'/register'}>Register</Link>
            </span>

            <div className='aouthContainer'>
            <OAuth/>
            </div>
        </div>
      
    </div>
  )
}

export default Login
