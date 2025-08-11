import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Electronics from './Electronics'
import Navbar from './Navbar'
import Hero   from './Hero'
import Category from './ShopCategory'
import Products from './Products'

function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Category/>
    
    
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/api/electronics" element={<Electronics/>} />

    </Routes>
    </>
  )
}

export default App
