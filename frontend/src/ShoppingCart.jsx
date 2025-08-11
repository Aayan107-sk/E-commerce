import React from 'react'

const ShoppingCart = () => {
  
  return (
    <>
    <section className='h-screen w-screen mt-20 bg-[#F8F8F8] flex flex-col'>
      <h2 className="text-3xl text-center h-20 font-semibold text-[#333333]">Shopping Cart</h2>

      <div className="  h-full w-full my-10 flex   ">
        <div className="h-full w-[60%] flex flex-col gap-4 ">

          <div className="h-30 w-[90%] ml-12 bg-[#ffffff] rounded-xl border border-[#E0E0E0]"></div>
          <div className="h-30 w-[90%] ml-12 bg-[#ffffff] rounded-xl border border-[#E0E0E0]"></div>
           <div className="h-30 w-[90%] ml-12 bg-[#ffffff] rounded-xl border border-[#E0E0E0]"></div>


        </div>
        <div className="h-[30%] w-[20%]  ml-6  bg-[#ffffff] rounded-xl border border-[#E0E0E0]">
          <div className="mt-2 ml-2  "><span className='text-[#333333]'>Subtotal:</span> <span className='pl-40 text-[#333333]'>$448.99</span></div>
        </div>
      </div>


    </section>
    </>
  )
}

export default ShoppingCart;
