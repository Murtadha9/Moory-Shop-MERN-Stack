import React from 'react'
import './Product.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';




const Product = ({item}) => {
  return (
    <div className='containerProduct'>
      <div className='circle'></div>
      <img className='imgProduct' src={item.img} alt="" />
      
      <div className='infoProduct'>
        <div className='iconProduct'>
            <ShoppingCartOutlinedIcon/>
        </div>
        <div className='iconProduct'>
            <SearchOutlinedIcon/>
        </div>
        <div className='iconProduct'>
            <FavoriteBorderOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Product
