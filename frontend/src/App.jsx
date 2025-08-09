import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './ShopCategory'
import Products from './Products'
import { Route,Routes } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

function App() {
 

  return (
    <>
    <Navbar />
    <Hero />
    <Category/>
    <Products />
    <Routes>
      
      <Route path="/cart" element={<ShoppingCart />} />

    </Routes>
    </>
  )
}

export default App
