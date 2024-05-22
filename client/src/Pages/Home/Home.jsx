import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Announcement from '../../Components/Announcement/Announcement'
import Slider from '../../Components/Slider/Slider'
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Products/Products'
import NewsLetters from '../../Components/NewsLetters/NewsLetters'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <div>

        <Slider/>
        <Categories/>
        <Products/>
        <NewsLetters/>
        <Footer/>
    </div>
  )
}

export default Home
