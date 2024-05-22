
import React from 'react';
import './Product.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  return (
    <div className='containerProduct'>
      <div className='circle'></div>
      <img className='imgProduct2' src={item.image} alt={item.title} />
      
      <div className='infoProduct'>
        <div className='iconProduct'>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className='iconProduct'>
          <Link to={`/product/${item._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div className='iconProduct'>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Product;
