import React from 'react'
import './NewsLetters.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const NewsLetters = () => {
  return (
    <div className='NewsLetters'>
        <h1 className='newsTitle'>NewsLetter</h1>
        <p className='newsDesc'>Get Time Update for all Products</p>
      <div className='newsContainer'>
        <input className='newsInput' type="text" placeholder='your Email' />
        <button className='newsBtn'>
            <SendOutlinedIcon/>
        </button>
      </div>
    </div>
  )
}

export default NewsLetters
