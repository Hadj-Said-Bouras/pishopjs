import Image from 'next/image'
import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { RiStarSFill } from 'react-icons/ri'



function ProductsList(props) {
  return (
    <div className='mb-20'>

        <div className='h-80 w-80 flex  flex-col gap-2'>
                            <div className='absolute ml-[280px] p-1 mt-5 hover:text-white hover:bg-red-500 bg-white z-20  rounded-full  '>
        
                            <IoEyeOutline className=' text-2xl '/>
                            </div>
                                    <div className='w-80 h-[215px]  overflow-hidden top-0 rounded z-0 relative group' >
                                      <Image src={`${props.imgUrl[0]}`}  alt='dsfa' width={800} height={300} className='z-10' />      
                                      <div className='absolute bottom-0 w-full h-8 items-center text-lg bg-black transition-all delay-300 text-white flex flex-row justify-center  translate-y-0 lg:translate-y-8 ease-out group-hover:translate-y-0  '>
                                        <button>Add To Cart</button>
                                      </div>                          
                                        </div>
                                        <h1 className='font-bold tracking-wider'>{`${props.product}`}</h1>
                                        <p className='text-red-600'>{props.price} <span className='line-through text-gray-500'>{props.comparedPrice}</span></p>
                                        <div className='flex flex-row text-yellow-400 items-center'>
                                        <RiStarSFill className='text-yellow-400'/>
                                        <RiStarSFill className='text-yellow-400'/>
                                        <RiStarSFill className='text-yellow-400'/>
                                        <RiStarSFill className='text-yellow-400'/>
                                        <RiStarSFill className='text-gray-400'/>
                                            <p className='text-gray-500 ml-2'>{props.reviews}</p>
                                        </div>
                                        
                                  
        </div>
    </div>
  )
}

export default ProductsList