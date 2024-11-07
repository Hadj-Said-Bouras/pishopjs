"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { CategoriesProduct } from '../app/products';


function RightBar() {
  const router = useRouter()
  return (
    <div className='hidden lg:flex lg:mr-2'>
      <div className="h-[390px] border-l-2 border-r-2 absolute ml-40 lg:ml-60 top-30 sm:top-40 lg:top-[150px]  xl:top-[160px]"></div>
    <div className='flex flex-col ml-10 gap-3 mt-3'>
      {CategoriesProduct.map((category, index) => (
            <p key={index} className='flex flex-row items-center gap-1 cursor-pointer' onClick={() => router.push(`/products/?c=${category.name}`)}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1).replace(/-/g, ' ')}<span><MdOutlineArrowForwardIos /></span>
        </p>
      ))}



    </div>
    </div>

  )
}

export default RightBar