import React from 'react'
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
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
                <h1 className='Logo'>MOORY-SHOP</h1>
            </div>


            <div className='RightNavbar'>
                <div className='MenuItem'>Register</div>
                <div className='MenuItem'>SignIn</div>
                <div className='MenuItem'>
                <Badge color="secondary" badgeContent={99}>
                    <ShoppingCartOutlinedIcon />
                </Badge>
                </div>
            </div>
        </div>
      </div>

  )
}

export default Navbar
