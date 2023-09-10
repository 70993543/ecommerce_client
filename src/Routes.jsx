import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/inicio/Home'
import { Product } from './pages/producto/Product'
import { Contact } from './pages/contacto/Contact'
import { Cart } from './pages/cart/cart'

const AppRoutes = ({product, setProduct, detail, view, close, setClose, cart, setCart, addtocart}) => {
  return (
    <Routes>
      <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}/>
        <Route path='/product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
  )
}

export default AppRoutes