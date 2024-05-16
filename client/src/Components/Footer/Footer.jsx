import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='FooterContainer'>

      <div className='leftFooter'>
        <h2>MOORY SHOP</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut accusamus </p>
        <div className='socialFooter'>
            <div className='socialIcon' style={{background:'blue'}}>
                <FacebookOutlinedIcon/>
            </div>
            <div className='socialIcon' style={{background:'brown'}}>
                <InstagramIcon/>
            </div>
            <div className='socialIcon' style={{background:'red'}}>
                <PinterestIcon/>
            </div>
        </div>
      </div>

      <div className='centerFooter'>
        <h3 className='h3Footer'>Useful Links</h3>
        <ul className='ulFooter'>
            <li className='liFooter'>Home</li>
            <li className='liFooter'>Cart</li>
            <li className='liFooter'>Man Fashion</li>
            <li className='liFooter'>Women Fashion</li>
            <li className='liFooter'>Accessories</li>
            <li className='liFooter'>My Account</li>
            <li className='liFooter'>Order Tracking</li>
            <li className='liFooter'>WhishList</li>
            <li className='liFooter'>Terms</li>
        </ul>
      </div>

      <div className='rightFooter'>
      <h3 className='h3Footer'>Contact</h3>
      <div className='contactItem'> <PlaceIcon style={{marginRight:'10px'}}/> Iraq - Baghdad</div>
      <div className='contactItem'> <LocalPhoneIcon style={{marginRight:'10px'}}/> 07722980016</div>
      <div className='contactItem'><EmailIcon style={{marginRight:'10px'}}/> murtadha.hussen1@gmail.com</div>
      
        <img className='paymentFooter' src="https://i.ibb.co/Qfvn4z6/payment.png"  alt="" />
      
   
      </div>

    </div>
  )
}

export default Footer
