import React, { useEffect, useState } from 'react';
import './Products.css';
import {popularProducts} from '../../data';
import Product from '../Product/Product';


const Products = ({cate,filters,sort}) => {

  const [products, setProducts] =useState([])
  const [filteredProducts, setFilteredProducts] =useState([])

 

  return (
    <div className='containerProducts'>
      {popularProducts.map(item =>(
         <Product item={item} key={item.id} />
      )
       
      )}
    </div>
  )
}

export default Products
