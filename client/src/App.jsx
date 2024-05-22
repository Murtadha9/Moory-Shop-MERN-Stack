
import React from 'react'
import Home from './Pages/Home/Home'
import ProductList from './Pages/ProductList/ProductList'
import Product from './Pages/Product/Product'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter , Route , Routes , redirect} from 'react-router-dom'
import Admin from './Pages/Admin/Admin'
import Navbar from './Components/Navbar/Navbar'
import AddProduct from './Pages/AddProduct/AddProduct'
import Users from './Pages/Users/Users'
import Announcement from './Components/Announcement/Announcement'
import Orders from './Pages/Orders/Orders'
import ShowProducts from './Pages/ShowProducts/ShowProducts'
import EditProduct from './Pages/EditProduct/EditProduct'
import EditUser from './Pages/EditUser/EditUser'
import Categories from './Components/Categories/Categories'

const App = () => {




  return (
    <BrowserRouter>
    <Navbar/>
    <Announcement/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/category' element={<Categories/>}/>
      <Route path='/products/:category' element={<ProductList/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/addp' element={<AddProduct/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/orders' element={<Orders/>}/>
      <Route path='/showproducts' element={<ShowProducts/>}/>
      <Route path='/editproduct/:productId' element={<EditProduct/>}/>
      <Route path='/edituser/:userId' element={<EditUser/>}/>

    </Routes>
    
      
    </BrowserRouter>
  )
}

export default App
