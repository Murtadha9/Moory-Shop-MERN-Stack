import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddProduct from '../AddProduct/AddProduct'
import {Link} from 'react-router-dom'
import './Admin.css'
import Footer from '../../Components/Footer/Footer'

const Admin = () => {
  return (
    <div className='adminContainer'>

      
      <div className='mainContainer'>
        <h1>Users</h1>
        <Link className='linkAdmin' to={'/users'}>Show all Users</Link>
      </div>


      <div className='mainContainer'>
        <h1>Products</h1>
        <div className='productAdmin'>
          <Link className='linkAdmin' to={'/addp'}>Add Product</Link>
          <Link className='linkAdmin' to={'/showproducts'}>Show Products</Link>
          </div>
      </div>


      <div className='mainContainer'>
        <h1>Orders</h1>
        <Link className='linkAdmin' to={'/orders'}>Show all Orders</Link>
      </div>

      
    </div>

  )
}

export default Admin
