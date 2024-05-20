import React, { useEffect, useState } from 'react'
import './Product.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import NewsLetters from '../../Components/NewsLetters/NewsLetters'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useLocation } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {addProduct} from '../../redux/cartRedux'

const Product = () => {

  const location=useLocation();
  const id=location.pathname.split('/')[2]

  const [product,setProduct]=useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const dispatch = useDispatch();

  useEffect(()=>{
    const getProduct=async()=>{
      try {
        const res=await fetch(`/api/product/find/${id}`);
        
        const data=await res.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }

    }
    getProduct()
  },[id])

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity, color, size })
    );
  }

  

  return (
    <div className='Product-container'>
      <Navbar/>
      <Announcement/>

      <div className='wrapper-products'>
        <div className='img-container'>
            <img className='img-products' src={product.img} alt="" />
        </div>
        <div className='info-container'>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <span className='span-price'>${product.price}</span>

            <div className='filter-container'>
                
            <div className='filterF'>
            <span className='filter-Title'>Color</span>
            {product && product.color ? (
                product.color.map((c, index) => (
           <div
            className='div1'
            key={index} 
            style={{ backgroundColor: c }}
            onClick={() => setColor(c)}
          ></div>
           ))
          ) : (
           <p>No colors available</p> 
              )}
          </div>


                <div className='filterF'>
                    <span className='filter-Title'>Size</span>
                    
                    <select className='FilterSize' name="" id="" onChange={(e) => setSize(e.target.value)}>

                      {product && product.size?(
                        product.size.map((s,index)=>(
                          <option className='sizeOption' key={index} value={s} >{s}</option>
                        ))
                      ):(<></>)}
                       
                    </select>
                </div>
            </div>
            <div className='add-container'>
                <div className='amount-container'>
                    <RemoveIcon onClick={() => handleQuantity("dec")}/>
                    <span className='amount'>{quantity}</span>
                    <AddIcon onClick={() => handleQuantity("inc")}/>
                </div>
                <button className='btn-product' onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
      </div>



      <NewsLetters/>
      <Footer/>
    </div>
  )
}

export default Product
