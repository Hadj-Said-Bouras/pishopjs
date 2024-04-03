import Image from 'next/image'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaCircle } from 'react-icons/fa'
import { FaTruckFast } from 'react-icons/fa6'
import { GrCycle } from 'react-icons/gr'
import { RiStarSFill } from 'react-icons/ri'

function SinglProduct() {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-20 mt-20 mb-20'>
       
    <div className='flex flex-col md:flex-row h-[500px] gap-10 ml-2 mr-2'>
        <div className='flex flex-row md:flex-col gap-2 justify-center'>
            <Image src={'/2.png'} width={120} height={120} alt='fdsa' className='bg-gray-100'/>
            <Image src={'/2.png'} width={120} height={120} alt='fdsa' className='bg-gray-100'/>
            <Image src={'/2.png'} width={120} height={120} alt='fdsa' className='bg-gray-100'/>
            <Image src={'/2.png'} width={120} height={120} alt='fdsa' className='bg-gray-100'/>
        </div>
        <div className='flex justify-center -order-1 md:order-1 items-center bg-gray-100'>

            <Image src={'/2.png'} width={400} height={400} alt='whatever' />
        </div>
    </div>
<div className='w-full md:w-1/3'>

<div className='flex flex-col gap-2 mx-2 md:mx-0'>
   <h1 className='font-bold absolute md:static  top-[200px] md:flex ml-5 md:ml-0 text-xl'>Havic HV G-92 Gamepad</h1>
   
   <div className='flex flex-col md:flex-row items-center  mr-5'>
    <div className='flex flex-row '> 
   <RiStarSFill className='text-yellow-400 text-3xl'/>
   <RiStarSFill className='text-yellow-400 text-3xl'/>
   <RiStarSFill className='text-yellow-400 text-3xl'/>
   <RiStarSFill className='text-yellow-400 text-3xl'/>
   <RiStarSFill className='text-gray-400 text-3xl'/>

    </div>


   <p className='text-gray-400'>{`(150 reviews)`} | <span className='text-cyan-300'>In Stock</span></p>
   </div>   

   <h3 className='font-semibold text-xl'><span className='md:hidden'>Price: </span>$192.00</h3>
   <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive 
       for easy bubble free install & mess free removal Pressure sensitive.</p>
   <div className='w-90 h-1 bg-gray-300'></div>
   <div className='flex flex-row gap-2'>
   <p>Colors:</p>
   <button ><FaCircle className='rounded-full text-green-500 border-2 hover:border-black'/></button>
   <button><FaCircle className='rounded-full text-red-500 border-2 hover:border-black'/></button>
   </div>
   <div className='flex flex-col gap-2'>
       <p>Sizes:</p>
       <div className='flex flex-row gap-3'>

       <button className='border-2 border-gray-500 w-10 h-10 bg-white transition-colors delay-80 hover:bg-red-500 hover:text-white'>XS</button>
       <button className='border-2 border-gray-500 w-10 h-10 bg-white transition-colors delay-80 hover:bg-red-500 hover:text-white'>S</button>
       <button className='border-2 border-gray-500 w-10 h-10 bg-white transition-colors delay-80 hover:bg-red-500 hover:text-white'>M</button>
       <button className='border-2 border-gray-500 w-10 h-10 bg-white transition-colors delay-80 hover:bg-red-500 hover:text-white'>L</button>
       <button className='border-2 border-gray-500 w-10 h-10 bg-white transition-colors delay-80 hover:bg-red-500 hover:text-white'>XL</button>
       <button className='border-2 border-gray-500 w-10 h-10 bg-white transition-colors delay-80 hover:bg-red-500 hover:text-white'>XXL</button>
       </div>
   </div>
   <div className='flex flex-row  gap-2 md:gap-10 mt-5'>
       <div className='flex flex-row items-center gap-10 md:gap-20 border border-gray-400 w-fit'>
           <button className=' bg-white transition-colors delay-200 hover:bg-red-500 hover:text-white h-9 w-9 text-3xl'>-</button>
           <p>2</p>
           <button className=' bg-red-500 transition-colors delay-200 hover:bg-red-600 text-white h-9 w-9 text-3xl'>+</button>
       </div>
       <div className='flex flex-row gap-2 md:gap-10'>

       <button className='px-10 bg-red-500 text-white transition ease-in-out hover:bg-red-600'>Buy Now</button>
       <button className='border-2 border-gray-500 p-2 bg-white transition-colors delay-200 hover:bg-red-500 hover:text-white'><CiHeart /></button>
       </div>
   </div>
   <div className='w-fit md:pr-5 mt-5 mx-auto md:mx-0'>
       <div className='border-gray p-2  flex flex-row gap-5 items-center border border-gray-400 '>
           <FaTruckFast className='text-3xl '/>
           <div className='flex flex-col'>

           <h1 className='font-semibold'>Free Delivery</h1>
           <p className='underline'>Enter your postal code for Delivery Availability</p>
           </div>
       </div>
       <div className='border-gray p-2  flex flex-row gap-5 items-center border border-gray-400 '>
           <GrCycle className='text-3xl '/>
           <div className='flex flex-col'>

           <h1>Return Delivery</h1>
           <p>Free 30 Days Delivery Returns. <span className='underline'>Details</span></p>
           </div>
       </div>
   </div>
</div>
</div>
   </div>
  )
}

export default SinglProduct