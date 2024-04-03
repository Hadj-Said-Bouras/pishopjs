import React from 'react'
import { BiStore } from 'react-icons/bi'

function Revenue() {
  return (
    <div className='flex justify-center gap-20 mb-20 flex-wrap'>
        <div className='w-60 h-60 border-2 border-gray-300 group flex items-center flex-col transition-colors ease-in-out duration-300 text-center justify-center hover:bg-red-500 hover:text-white'>
          <div className='text-3xl text-white w-[70px] m-2 h-[70px] items-center justify-center transition-colors ease-in-out duration-300 flex bg-gray-200 rounded-full '>

          <span className='w-[50px] bg-black h-[50px] group-hover:bg-white group-hover:text-black  flex justify-center items-center rounded-full '><BiStore /></span>
          </div>
          <h1 className='text-xl font-semibold '>10.5k</h1>
          <p>Sallers Active in our site</p>
        </div>
        <div className='w-60 h-60 border-2 border-gray-300 group flex items-center flex-col transition-colors ease-in-out duration-300 text-center justify-center hover:bg-red-500 hover:text-white'>
          <div className='text-3xl text-white w-[70px] m-2 h-[70px] items-center justify-center flex bg-gray-200 rounded-full '>

          <span className='w-[50px] bg-black h-[50px] group-hover:bg-white group-hover:text-black  flex justify-center items-center rounded-full '><BiStore /></span>
          </div>
          <h1 className='text-xl font-semibold '>33k</h1>
          <p>Sallers Active in our site</p>
        </div>
        <div className='w-60 h-60 border-2 border-gray-300 group flex items-center flex-col transition-colors ease-in-out duration-300 text-center justify-center hover:bg-red-500 hover:text-white'>
          <div className='text-3xl text-white w-[70px] m-2 h-[70px] items-center justify-center flex bg-gray-200 rounded-full '>

          <span className='w-[50px] bg-black h-[50px] group-hover:bg-white group-hover:text-black  flex justify-center items-center rounded-full '><BiStore /></span>
          </div>
          <h1 className='text-xl font-semibold '>45.5k</h1>
          <p>Sallers Active in our site</p>
        </div>
        <div className='w-60 h-60 border-2 border-gray-300 group flex items-center flex-col transition-colors ease-in-out duration-300 text-center justify-center hover:bg-red-500 hover:text-white'>
          <div className='text-3xl text-white w-[70px] m-2 h-[70px] items-center justify-center flex bg-gray-200 rounded-full '>

          <span className='w-[50px] bg-black h-[50px] group-hover:bg-white group-hover:text-black  flex justify-center items-center rounded-full '><BiStore /></span>
          </div>
          <h1 className='text-xl font-semibold '>25k</h1>
          <p>Sallers Active in our site</p>
        </div>
      </div>
  )
}

export default Revenue