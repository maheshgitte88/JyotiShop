import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Account/Login'
import SignIn from './Account/SignIn'
import AddProduct from './Admin/AddProduct'
import AllProducts from './Admin/AllProducts'
import Order from './Admin/Order'
import Users from './Admin/Users'
import Cart from './cart/Cart'
import Home from './Home/Home'
import HomePro from './HomeProduct/HomePro'
import SinglePage from './SingleProduct/SinglePage'
import Admin from "./Admin/Admin"
import Product from './SingleProduct/Product'
import OrderHistry from '../components/OrderHistry'
import GasPipe from './SingleProduct/GasPipe'
import GasSever from './SingleProduct/GasSever'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/cart' element={<Cart/>} />
      {/* <Route path='/singlepage/:id' element={<SinglePage />} /> */}
      <Route path='/Product' element={<Product />} />
      {/* <Route path='/GasSever' element={<GasSever />} /> */}
      {/* <Route path='/GasPipe' element={<GasPipe />} /> */}
      <Route path='/home' element={<HomePro />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/orders' element={<Order />} />
      <Route path='/admin/allproducts' element={<AllProducts />} />
      <Route path='/admin/addproducts' element={<AddProduct />} />
      <Route path='/admin/users' element={<Users />} />
      <Route path='/user/Orders' element={<OrderHistry />} />
    </Routes>
  )
}

export default Allroutes
