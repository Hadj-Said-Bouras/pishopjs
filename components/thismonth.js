import Image from 'next/image'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2'
import { IoEyeOutline } from 'react-icons/io5'
import { LiaStarSolid } from 'react-icons/lia'

function ThisMonth() {
  return (
<div className='w-full h-1/6'>
       <div className='flex flex-row items-center ml-10 mt-20 gap-2'>
            <div className='w-[20px] h-[60px] bg-red-500  rounded'></div>
            <p className='text-red-400 font-bold'>This month:</p>
        </div> 

        <div className='flex flex-row justify-between items-center mt-10 ml-10 mr-10'>
          <h2 className='font-bold text-2xl'>Best Selling Products</h2>
            <div className='text-md flex justify-center bg-red-500 px-6 py-2'>
                      <button className='text-white '>View All</button>
            </div>
          </div>

        <div className='flex flex-row flex-wrap justify-center my-auto text-center gap-4 mt-10'>
            
            <div className='border border-0 w-[250px] h-[340px] mb-20 mx-auto  '>
                    <div className='absolute ml-[210px] p-1 mt-5 bg-white rounded-full  '>

                    <IoEyeOutline className=' text-2xl'/>
                    </div>
                    <div className='absolute ml-[210px] p-1 mt-[60px] bg-white rounded-full'>

                    <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
                    </div>
                    <div className='text-center w-[50px] h-[25px] bg-red-500 absolute mt-2 ml-1'>
                        <p className='text-white'>-40%</p>
                    </div>
                    <div className='flex flex-col gap-1 text-left'>

                    <Image src={'/test.png'} width={250} height={100}  alt='ntb' className='bg-gray-100 overflow-hidden '/>
                    <h3 className='font-bold mt-3'>Gamming Mouse</h3>
                    <h4 className='text-red-400'>$12 <span className='text-gray-500 line-through'>$20</span></h4>
                    <div className='flex flex-row text-yellow-400 '>
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid className='text-gray-400'/>
                    <LiaStarSolid className='text-gray-400'/>
                    <p className='text-gray-400'> (51)</p>
                    </div>
                </div>
            </div>
            <div className='border border-0 w-[250px] h-[340px] mb-20 mx-auto lg:flex  '>
                    <div className='absolute ml-[210px] p-1 mt-5 bg-white rounded-full  '>

                    <IoEyeOutline className=' text-2xl'/>
                    </div>
                    <div className='absolute ml-[210px] p-1 mt-[60px] bg-white rounded-full'>

                    <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
                    </div>
                    <div className='text-center w-[50px] h-[25px] bg-red-500 absolute mt-2 ml-1'>
                        <p className='text-white'>-40%</p>
                    </div>
                    <div className='flex flex-col gap-1 text-left'>

                    <Image src={'/test.png'} width={250} height={100}  alt='ntb' className='bg-gray-100 overflow-hidden '/>
                    <h3 className='font-bold mt-3'>Gamming Mouse</h3>
                    <h4 className='text-red-400'>$12 <span className='text-gray-500 line-through'>$20</span></h4>
                    <div className='flex flex-row text-yellow-400 '>
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid className='text-gray-400'/>
                    <LiaStarSolid className='text-gray-400'/>
                    <p className='text-gray-400'> (51)</p>
                    </div>
                    </div>
                </div>
                <div className='border border-0 w-[250px] h-[340px] mb-20 mx-auto  '>
                    <div className='absolute ml-[210px] p-1 mt-5 bg-white rounded-full  '>

                    <IoEyeOutline className=' text-2xl'/>
                    </div>
                    <div className='absolute ml-[210px] p-1 mt-[60px] bg-white rounded-full'>

                    <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
                    </div>
                    <div className='text-center w-[50px] h-[25px] bg-red-500 absolute mt-2 ml-1'>
                        <p className='text-white'>-40%</p>
                    </div>
                    <div className='flex flex-col gap-1 text-left'>

                    <Image src={'/test.png'} width={250} height={100}  alt='ntb' className='bg-gray-100 overflow-hidden '/>
                    <h3 className='font-bold mt-3'>Gamming Mouse</h3>
                    <h4 className='text-red-400'>$12 <span className='text-gray-500 line-through'>$20</span></h4>
                    <div className='flex flex-row text-yellow-400 '>
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid className='text-gray-400'/>
                    <LiaStarSolid className='text-gray-400'/>
                    <p className='text-gray-400'> (51)</p>
                    </div>
                    </div>
                </div>
                <div className='border border-0 w-[250px] h-[340px] mb-20 mx-auto  '>
                    <div className='absolute ml-[210px] p-1 mt-5 bg-white rounded-full  '>

                    <IoEyeOutline className=' text-2xl'/>
                    </div>
                    <div className='absolute ml-[210px] p-1 mt-[60px] bg-white rounded-full'>

                    <AiOutlineHeart className='text-2xl bg-white rounded-full'/>
                    </div>
                    <div className='text-center w-[50px] h-[25px] bg-red-500 absolute mt-2 ml-1'>
                        <p className='text-white'>-40%</p>
                    </div>
                    <div className='flex flex-col gap-1 text-left'>

                    <Image src={'/test.png'} width={250} height={100}  alt='ntb' className='bg-gray-100 overflow-hidden '/>
                    <h3 className='font-bold mt-3'>Gamming Mouse</h3>
                    <h4 className='text-red-400'>$12 <span className='text-gray-500 line-through'>$20</span></h4>
                    <div className='flex flex-row text-yellow-400 '>
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid className='text-gray-400'/>
                    <LiaStarSolid className='text-gray-400'/>
                    <p className='text-gray-400'> (51)</p>
                    </div>
                    </div>
                </div>
         </div>
    </div>
  )
}

export default ThisMonth