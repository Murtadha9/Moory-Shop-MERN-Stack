
import React from 'react'
import './Cart.css'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Cart = () => {
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
                <div className='product-cart'>

                    <div className='product-detial'>
                        <img className='imgCart' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                        <div className='detials'>
                            <span className='product-name'><b>Product : </b> jenus thunder shoes </span>
                            <span className='product-id'><b>ID : </b>123456</span>
                            <div className='product-color'></div>
                            <span className='product-size'><b>Size : </b>45 </span>
                        </div>
                    </div>
                    

                    <div className='product-price'>
                        <div className='ProductamountContainer'>
                            <AddIcon/>
                            <div className='productAmount'>2</div>
                            <RemoveIcon/>
                        </div>
                        <div className='productPrice'>$200</div>
                    </div>
                </div>
                <hr />
                <div className='product-cart'>

                    <div className='product-detial'>
                        <img className='imgCart' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                        <div className='detials'>
                            <span className='product-name'><b>Product : </b> jenus thunder shoes </span>
                            <span className='product-id'><b>ID : </b>123456</span>
                            <div className='product-color'></div>
                            <span className='product-size'><b>Size : </b>45 </span>
                        </div>
                    </div>
                    

                    <div className='product-price'>
                        <div className='ProductamountContainer'>
                            <AddIcon/>
                            <div className='productAmount'>2</div>
                            <RemoveIcon/>
                        </div>
                        <div className='productPrice'>$200</div>
                    </div>
                </div>
            </div>
            <div className='summaryCart'>
                <h1>Order Summary</h1>
                <div className='summaryItem'>
                    <span className='summaryItemText'>Subtotal</span>
                    <span className='summaryItemPrice'>$900</span>
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
                    <span className='summaryItemPrice' style={{fontSize:'20px',fontWeight:'bolder'}}>$900</span>
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






