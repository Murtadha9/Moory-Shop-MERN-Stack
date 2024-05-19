import React, { useEffect, useState } from 'react'
import './Product.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import NewsLetters from '../../Components/NewsLetters/NewsLetters'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom'

const Product = () => {

  const location=useLocation();
  const id=location.pathname.split('/')[2]

  const [product,setProduct]=useState({});

  useEffect(()=>{
    const getProduct=async()=>{
      try {
        const res=await fetch(cate?`/api/product?category=${cate}`: '/api/product');
        
        const data=await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }

    }
    getProduct()
  },[id])



  return (
    <div className='Product-container'>
      <Navbar/>
      <Announcement/>

      <div className='wrapper-products'>
        <div className='img-container'>
            <img className='img-products' src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className='info-container'>
            <h2>Denim JumpSuit</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores distinctio suscipit velit enim, deserunt repellendus placeat praesentium aliquid, a natus blanditiis aliquam at officia eaque? Exercitationem perferendis sint asperiores.
               </p>
            <span className='span-price'>$90</span>

            <div className='filter-container'>
                
                <div className='filterF'>
                    <span className='filter-Title'>Color</span>
                    <div className='div1'></div>
                    <div className='div2'></div>
                    <div className='div3'></div>
                </div>
                <div className='filterF'>
                    <span className='filter-Title'>Size</span>
                    <select className='FilterSize' name="" id="">
                        <option className='sizeOption' value="">M</option>
                        <option className='sizeOption' value="">L</option>
                        <option className='sizeOption' value="">XL</option>
                        <option className='sizeOption' value="">XXL</option>
                    </select>
                </div>
            </div>
            <div className='add-container'>
                <div className='amount-container'>
                    <RemoveIcon/>
                    <span className='amount'>90</span>
                    <AddIcon/>
                </div>
                <button className='btn-product'>Add to Cart</button>
            </div>
        </div>
      </div>



      <NewsLetters/>
      <Footer/>
    </div>
  )
}

export default Product
