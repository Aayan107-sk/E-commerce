import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'
import Electronics from './Electronics'
import Navbar from './Navbar'
import Hero   from './Hero'
import Category from './ShopCategory'
import Products from './Products'
import Apparel from './Apparel'
import HomeGoods from './HomeGoods'
import { Book } from 'lucide-react'
import Books from './Books'
import Sports from './Sports'
import Jewelry from './Jewelry'

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
      <Route path="/api/apparel" element={<Apparel/>} />
      <Route path="/api/home-goods" element={<HomeGoods/>} />
      <Route path="/api/books" element={<Books/>} />
      <Route path="/api/sports" element={<Sports/>} />
      <Route path="/api/jewelry" element={<Jewelry/>} />

      

    </Routes>
    </>
  )
}

export default App
