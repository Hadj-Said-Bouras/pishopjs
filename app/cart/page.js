import Image from 'next/image';
import React from 'react';
import { CiHeart } from 'react-icons/ci';

function Cart() {
  return (
    <div>
      <div className='flex flex-col gap-10 my-20 sm:mx-40'>
        <div className='flex hidden lg:flex flex-row justify-between overflow-hidden'>
          <p className='w-[40%]'>Product</p>
          <p className='w-[25%]'>Price</p>
          <p className='w-[25%]'>Quantity</p>
          <p className='w-[25%]'>Subtotal</p>
        </div>
        <div className='sm:hidden w-full  '>
            <p className='mx-2 text-xl font-bold'>Shopping Cart</p>
            <div className='flex flex-row justify-between mx-2 text-xl font-bold mt-5'>

            <p>Estimated total (3 items)</p><span>$997</span>
            </div>
            <button className='p-3 px-3 text-lg text-white bg-red-600 rounded mb-5 mt-2 w-full'>Proceed To Checkout</button>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-around'>
                <Image src={'/test.png'} width={100} height={100} alt='falkj' className='border border-gray-500'/> 
                <p>Product Title</p>
                </div>
                <div className='flex flex-row  gap-2 md:gap-10 mt-5'>
       <div className='flex ml-2 flex-row items-center gap-10 md:gap-20 border border-gray-400 w-fit'>
           <button className=' bg-white transition-colors delay-200 hover:bg-red-500 hover:text-white h-9 w-9 text-3xl'>-</button>
           <p>3</p>
           <button className=' bg-red-500 transition-colors delay-200 hover:bg-red-600 text-white h-9 w-9 text-3xl'>+</button>
       </div>
       <div className='flex flex-row gap-2 md:gap-10'>

       <button className='px-10 bg-red-500 text-white transition ease-in-out hover:bg-red-600'>Buy Now</button>
       <button className='border-2 border-gray-500 p-2 bg-white transition-colors delay-200 hover:bg-red-500 hover:text-white'><CiHeart /></button>
       </div>
       
   </div>
   <p className='grid justify-items-end w-full mt-2 text-red-500 font-bold underline'>Remove</p>
            </div>
        </div>
        <div className='flex flex-row justify-between hidden sm:flex '>
          <p className='w-[40%] flex flex-row items-center gap-4'><Image src={'/test.png'} width={50} height={50} alt='falkj' /> Product title</p>
          <p className='w-[25%]'>43</p>
          <div className='w-[25%]'> 
            <select className=' p-2 border border-black'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <p className='w-[25%]'>Subtotal</p>
        </div>
        <div className='flex flex-row justify-between hidden sm:flex'>
        <p className='w-[40%] flex flex-row items-center gap-4'><Image src={'/test.png'} width={50} height={50} alt='falkj' /> Product title</p>
          <p className='w-[25%]'>432</p>
          <div className='w-[25%] '> {/* Adjusted width for alignment */}
            <select className=' p-2 border border-black'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <p className='w-[25%]'>Subtotal</p>
        </div>
        <div className='flex flex-row justify-between hidden sm:flex'>
        <p className='w-[40%] flex flex-row items-center gap-4'><Image src={'/test.png'} width={50} height={50} alt='falkj' /> Product title</p>
          <p className='w-[25%]'>543</p>
          <div className='w-[25%]'> 
            <select className=' p-2 border border-black'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <p className='w-[25%]'>Subtotal</p>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center m-0 sm:m-10 gap-4 sm:gap-0 sm:mx-40'>
        <button className='p-2 sm:p-3 px-3 m-4 text-lg border border-black'>Move All To Bag</button>
        <button className='p-2 sm:p-3 px-3 m-4 text-lg border border-black'>Update Cart</button>
      </div>
      <div className='flex justify-between flex-wrap flex-row m-10 sm:m-60 gap-2 sm:gap-0'>
        <div className=' -order-first sm:-order-last'>
          <form className='flex gap-2 sm:gap-5 flex-wrap'>
            <input type="text" placeholder='Coupon code' className='border rounded p-3 border-black' />
            <button className='p-3 px-7 text-lg text-white bg-red-600 rounded'>Apply coupon</button>
          </form>
        </div>
        <div className='w-[400px] h-[320px] border border-2 border-black flex flex-col gap-3 p-3'>
          <h1 className='font-semibold mt-5'>Cart Total</h1>
          <div className='flex flex-row mt-5 justify-between'>
            <p>Subtotal:</p>
            <p>$1023</p>
          </div>
          <div className='mx-auto w-[280px] h-1 bg-gray-300'></div>
          <div className='flex flex-row justify-between'>
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <div className='mx-auto w-[280px] h-1 bg-gray-300'></div>
          <div className='flex flex-row justify-between'>
            <p>Total:</p>
            <p>$1023</p>
          </div>
          <button className='p-3 px-3 text-lg text-white bg-red-600 rounded mb-5'>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
