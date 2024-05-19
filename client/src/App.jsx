
import React from 'react'
import Home from './Pages/Home/Home'
import ProductList from './Pages/ProductList/ProductList'
import Product from './Pages/Product/Product'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Cart from './Pages/Cart/Cart'
import {BrowserRouter , Route , Routes , redirect} from 'react-router-dom'

const App = () => {




  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:category' element={<ProductList/>}/>
      <Route path='/product/:id' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
