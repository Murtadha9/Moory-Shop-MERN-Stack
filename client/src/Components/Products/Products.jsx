import React, { useEffect, useState } from 'react';
import './Products.css';
import {popularProducts} from '../../data';
import Product from '../Product/Product';


const Products = ({cate,filters,sort}) => {

  const [products, setProducts] =useState([])
  const [filteredProducts, setFilteredProducts] =useState([])


  useEffect(()=>{
    const getProducts=async()=>{
      try {
        const res=await fetch(cate?`/api/product?category=${cate}`: '/api/product');
        
        const data=await res.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }

    }
    getProducts()
  },[cate])

  useEffect(() => {
    cate &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cate, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

 

  return (
    <div className='containerProducts'>
      {cate
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </div>
  )
}

export default Products
