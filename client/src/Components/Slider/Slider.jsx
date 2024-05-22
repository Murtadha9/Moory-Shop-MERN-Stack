import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import './Slider.css'
import {sliderItems} from '../../data'
import {Link} from 'react-router-dom'

const Slider = () => {

    const [slideIndex,setSlideIndex] =useState(0)

    const handelClick=(direction)=>{

        if(direction === 'left'){
            setSlideIndex( slideIndex>0 ? slideIndex-1 : 2)
        }else{
            setSlideIndex( slideIndex <2 ? slideIndex+1 : 0)
        }

    }
  return (
    <div className='ContainerSlider'>
      <div className='arrow' style={{left:10}} onClick={()=>{handelClick('left')}} >
        <ArrowLeftOutlinedIcon/>
      </div>

       <div className='WrapperSlider' style={{ transform: `translateX(${slideIndex * -100}vw)` }}
 >

        {sliderItems.map(item=>(
             <div className='Slide' style={{background:item.bg}} key={item.id}>
             <div className='ImgContainer'>
                 <img className='imgSlide' src={item.img} alt="" />
             </div>
             <div className='InfoContainer'>
                 <h1 className='TitleSlide'>{item.title}</h1>
                 <p className='DescSlide'>{item.desc} </p>
                 <Link to={'/category'} className='btnSlide'>More</Link>
             </div>
           </div>
        ))}

          

         

          
       </div>

      <div className='arrow' style={{right:10}} onClick={()=>{handelClick('right')}}>
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  )
}

export default Slider
