import { useState } from 'react'
import './App.css'


const Hero = () => {

 

  return (
    <>
    <section className=' flex items-center justify-center mt-10'>
      <div className="relative h-80 w-350">
        <img className='h-80 w-350 rounded-3xl' src="hero.jpg" alt="img is not loading"  />
      
         <h1 
         className='absolute inset-0 flex  mt-20 justify-center text-gray-800 text-3xl font-bold'>
          Discover Your Next Favorite Item
        </h1>
         <p
          className='absolute inset-0 mt-35  flex  justify-center text-gray-900 text-xl' >
            Shop the latest trends and exclusive deals.
        </p>
        <button className=' absolute inset-0  h-12 w-40 rounded-xl  bg-[#007bff] mt-50 ml-[44%]  '> Shop Now</button>

      </div>
      
      
    </section>
    
   
     
    </>
  )
}

export default Hero