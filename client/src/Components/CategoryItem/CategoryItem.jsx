
import React from 'react';
import './CategoryItem.css';
import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  return (
    <div className='itemContainer'>
      <Link className='linkCategory' to={`/products/${item.title}`}>
        <img className='itemImg' src={item.image} alt={item.title} />
        <div className='itemInfo'>
          <h1 className='itemTitle'>{item.title}</h1>
          <button className='itembtn'>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
