import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {signInStart,signInSuccess,signInFailure} from '../../redux/userRedux'
import {GoogleAuthProvider, signInWithPopup ,getAuth} from 'firebase/auth'
import { app } from '../../firebase'
import GoogleIcon from '@mui/icons-material/Google';
import './OAuth.css'

const OAuth = () => {

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const auth=getAuth(app)



    const handleGoogleClick=async()=>{
        const provider= new GoogleAuthProvider()
        provider.setCustomParameters({prompt:'select_account',})
        try {
            const resultFromGoogle = await signInWithPopup(auth ,provider)
            const res=await fetch('/api/auth/google' ,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    name:resultFromGoogle.user.displayName,
                    email:resultFromGoogle.user.email,
                    photo:resultFromGoogle.user.photoURL,
                })
            })

            const data=await res.json()
            if(res.ok){
               dispatch(signInSuccess(data));
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
      <button className='authO' onClick={handleGoogleClick} type='button'>
        <p>Continue with google</p>
         <GoogleIcon className='iconG'/> 
         </button>
    </div>
  )
}

export default OAuth
