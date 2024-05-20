import React, { useState } from 'react'
import './Register.css'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {

  const navigate=useNavigate();

  const [formData,setFormData]=useState({})
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    try {
      setLoading(true)
      const res=await fetch('/api/auth/signup',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      })
      const data=await res.json()
      if(data.success === false){
        setLoading(false)
        setError(data.message)
        
        return;
      }
      setLoading(false)
      setError(null)
      navigate('/')
    } catch (error) {
      setLoading(false);
      setError(error.message)
    }
    
  }

  return (
    <div className='Register'>
        <div className='WrapperRegister'>
            <h1 className='title-reg'>Create an account</h1>
            <form className='form' onSubmit={handleSubmit}>
                
                <input className='input' type="text" placeholder='Username' id='username' onChange={handleChange} />
                <input className='input' type="text" placeholder='Email' id='email' onChange={handleChange}/>
                <input className='input' type="text" placeholder='Password' id='password' onChange={handleChange}/>
               
               
                <button className='btnRegister'>Register</button>
            </form>

            <span className='spanReg'>
            aleardy have account ?
            <Link className='LinkReg' to={'/login'}>Login</Link>
            </span>
            
        </div>
      
    </div>
  )
}

export default Register
