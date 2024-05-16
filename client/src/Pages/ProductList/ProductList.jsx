import React, { useState } from 'react'
import './ProductList.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'

import Products from '../../Components/Products/Products'
import NewsLetters from '../../Components/NewsLetters/NewsLetters'
import Footer from '../../Components/Footer/Footer'
import { useLocation } from 'react-router-dom'

const ProductList = () => {

  const location=useLocation();
  const cate=location.pathname.split('/')[2]

  const [filters ,setFilters]=useState({})
  const [sort ,setSort]=useState('newset')
  const handelFilters=(e)=>{
    const value=e.target.value;
    setFilters({
      ...filters,
     [e.target.name]:value
    })
  }

  


  return (
    <div className='ProductList'>
      <Navbar/>
      <Announcement/>
      <h2>Dressses</h2>
      <div className='FilterContainer'>
        <div className='Filter'>
            <span className='filterText'>Filter Product: </span>
            <select className='select' name="color" id="" onChange={handelFilters} >
                <option className='option'   >Color</option>
                <option className='option'  value="Red">Red</option>
                <option className='option'  value="White">White</option>
                <option className='option'  value="Black">Black</option>
                <option className='option'  value="Green">Green</option>
                <option className='option'  value="Blue">Blue</option>
                <option className='option'  value="Yellow">Yellow</option>
            </select>

            <select className='select' name="size" id="" onChange={handelFilters}>
                <option className='option'   >Size</option>
                <option className='option'  value="S">S</option>
                <option className='option'  value="M">M</option>
                <option className='option'  value="L">L</option>
                <option className='option'  value="XL">XL</option>
                <option className='option'  value="XXL">XXL</option>
            </select>
        </div>
        <div className='Filter'>
        <span className='filterText'>Sort Products: </span>
        <select className='select' name="" id="" onChange={(e)=>{setSort(e.target.value)}}  >
                <option className='option' value='newset' >Newset</option>
                <option className='option'  value="asc">Price (asc) </option>
                <option className='option'  value="desc">Price (desc) </option>
                
            </select>
        </div>
      </div>
      <Products cate={cate} filters={filters} sort={sort} />
      <NewsLetters/>
      <Footer/>
    </div>
  )
}

export default ProductList
