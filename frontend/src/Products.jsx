
import React, { useState ,useEffect} from 'react'

import Rating from 'react-rating';
import axios from 'axios'
import Hero from './Hero';

const Products = () => {
  const [productCount,setProductCount]=useState(0)
  const [products,setProduct] = useState([])//this is new



   useEffect(() => {
     axios.get('/api') 
    .then((response) => {
      console.log("Response ", response);
      setProduct(response.data);
      

    })
    .catch((error) => {
      console.error("conection fale",error);
      
    })


  },[])

  const addToCard = ()=>{

    setProductCount(productCount+1);
    
  }

  return (
   <>
      
   <section className="h-auto w-screen my-20 pb-20" >
    {/* <div className="h-20 w-screen "  >
      <h2 className='text-center pt-5  text-3xl font-semibold text-[#333333]'>Featured Products</h2>
    </div> */}
    <div className="h-auto flex justify-center flex-wrap gap-10 mt-5">
          {products.map((cat, index) => (
            <div
              key={index}
              className="bg-[#ffffff] h-auto w-60 border-2 border-[#E0E0E0] p-4 rounded-xl flex flex-col  justify-center"
            >
              <div className="h-50 flex items-center"><img src={cat.img} alt=" Img" /></div>

              <h2 className="mt-2">
                {cat.name}
              </h2>
              <h2 className="mt-1 text-[#007BFF]">{cat.price}</h2>
              <button className='bg-[#007BFF] text-[#ffffff] mt-2  rounded-md h-8' onClick={addToCard}>Add to Cart</button>
              
            </div>
          ))}
        </div>
   </section>
   

   </>
  )
}

export default Products;
