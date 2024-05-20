
import React from 'react'
import './Cart.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector((state) => state.cart);


  return (
    <div className='Cart'>
      <Navbar/>
      <Announcement/>

      <div className='WrapperCart'>
        <h1 className='titleCart'>Your Bag</h1>

        <div className='topCart'>

            <button className='topbtn'>Continue Shopping</button>
            <div className='topTexts'>
                <span className='topText'>Shopping bags (2)</span>
                <span className='topText'>Your Wishlist (0)</span>
            </div>
            <button className='topbtn'>Checkout Now</button>
        </div>


        <div className='bottomCart'>
            <div className='infoCart'>

                {cart.products.map((product)=>(
                    <>
                    <div className='product-cart' key={product.id}>

                        <div className='product-detial'>
                            <img className='imgCart' src={product.img} alt="" />
                            <div className='detials'>
                                <span className='product-name'><b>Product : </b> {product.title}</span>
                                <span className='product-id'><b>ID : </b>123456</span>
                                <div className='product-color' style={{
                                    backgroundColor:product.color
                                }}></div>
                                <span className='product-size'><b>Size : </b>{product.size} </span>
                            </div>
                        </div>


                        <div className='product-price'>
                             <div className='ProductamountContainer'>
                        <AddIcon/>
                         <div className='productAmount'>{product.quantity}</div>
                         <RemoveIcon/>
                        </div>
                     <div className='productPrice'>${product.price*product.quantity}</div>
                    </div>


                    </div>
                    <hr />
                    </>
                ))}
               



            </div>




            <div className='summaryCart'>
                <h1>Order Summary</h1>
                <div className='summaryItem'>
                    <span className='summaryItemText'>Subtotal</span>
                    <span className='summaryItemPrice'>${cart.total}</span>
                </div>

               
                <div className='summaryItem'>
                    <span className='summaryItemText'>Estimated Shipping</span>
                    <span className='summaryItemPrice'>$5.9</span>
                </div>

                <div className='summaryItem'>
                    <span className='summaryItemText'>Shipping Discount</span>
                    <span className='summaryItemPrice'>$-10</span>
                </div>

                <div className='summaryItem'>
                    <span className='summaryItemText' style={{fontSize:'25px',fontWeight:'bolder'}}>Total</span>
                    <span className='summaryItemPrice' style={{fontSize:'20px',fontWeight:'bolder'}}>${cart.total}</span>
                </div>
              
                <button className='btnChecOut'>CheckOut Now</button>
            </div>
        </div>
      </div>
      


      <Footer/>
    </div>
  )
}

export default Cart






