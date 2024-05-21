import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {SignoutSuccess} from '../../redux/userRedux'


const Navbar = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {quantity} = useSelector((state)=>state.cart)
    const {currentUser}=useSelector((state)=>state.user)


    const handleSignout = async () => {
        try {
          const res = await fetch('/api/users/signout', {
            method: 'POST',
          });
          const data = await res.json();
          if (!res.ok) {
            console.log(data.message);
          } else {
            dispatch(SignoutSuccess());
            navigate('/login')
          }
        } catch (error) {
          console.log(error.message);
        }
      };



  return (
 
      <div className='ContainerNavbar'>
        <div className='WrapperNavbar'>

            <div className='LeftNavbar'>
                <span className='Lang'>EN</span>
                <div className='SearchContainer'>
                    <input className='InputNavbar' type="text" />
                    <SearchIcon style={{color:'black' , fontSize:16}} />
                </div>
            </div>


            <div className='CenterNavbar'>
                <Link className='LinkNav' to={'/'}><h1 className='Logo'>MOORY-SHOP</h1></Link>
            </div>


            <div className='RightNavbar'>

               {currentUser?(
               <div className='UserRegNav'>
                <div className='MenuItem'>Hello {currentUser.username}</div>
                <button onClick={handleSignout}>SignOut</button>
                <Link className='LinkNav' to={'/cart'}>
                    <div className='MenuItem'>
                    <Badge color="secondary" badgeContent={quantity}>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </div>
                </Link>

               </div>):(
                <>
                 <Link className='LinkNav' to={'/register'}>
                    <div className='MenuItem'>Register</div>
                </Link>
                <Link className='LinkNav' to={'/login'}>
                <div className='MenuItem'>SignIn</div>
                </Link></>
               )}

               {currentUser && currentUser.isAdmin?(<>
                <Link className='LinkNav' to={'/admin'}>
                    <div className='MenuItem'>Admin </div>
                </Link>
               </>):(<></>)}

                

               
            </div>
        </div>
      </div>

  )
}

export default Navbar
