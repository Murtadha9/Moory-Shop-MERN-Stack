import React from 'react'
import './CategoryItem.css'
import { Link } from 'react-router-dom'

const CategoryItem = ({item}) => {
  return (
    <div className='itemContainer'>
     <Link to={`/products/${item.cate}`}>
     <img className='itemImg' src={item.img} alt="" />
      <div className='itemInfo'>
        <h1 className='itemTitle'>{item.title}</h1>
        <button className='itembtn'>SHOP NOW</button>
      </div>
      </Link>
    </div>
  )
}

export default CategoryItem
