import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';


const Navbar = () => {

    const navigate=useNavigate()
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
                    <SearchIcon style={{color:'gray' , fontSize:16}} />
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
               
               

               </div>):(
                <>
                 <Link className='LinkNav' to={'/register'}>
                    <div className='MenuItem'>Register</div>
                </Link>
                <Link className='LinkNav' to={'/login'}>
                <div className='MenuItem'>SignIn</div>
                </Link></>
               )}

                <Link className='LinkNav' to={'/cart'}>
                    <div className='MenuItem'>
                    <Badge color="secondary" badgeContent={quantity}>
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                    </div>
                </Link>

               
            </div>
        </div>
      </div>

  )
}

export default Navbar
