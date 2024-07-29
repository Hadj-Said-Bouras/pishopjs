"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoEyeOutline } from 'react-icons/io5'
import { RiStarSFill } from 'react-icons/ri'

function ProductsList({ id, imgUrl, product, price, comparedPrice, reviews }) {
  const router = useRouter()
  
  // Default image URL in case imgUrl is undefined or empty
  const defaultImageUrl = '/default-product-image.jpg'
  
  // Function to process and return a valid image URL
  const getValidImageUrl = (url) => {
    // If url is not a string or is empty, return the default image
    if (typeof url !== 'string' || url.trim() === '') {
      return defaultImageUrl;
    }
    
    // If it's a comma-separated list, take the first URL
    const firstUrl = url.split(',')[0].trim();
    
    // If it starts with '//', add 'https:' to make it absolute
    if (firstUrl.startsWith('//')) {
      return `https:${firstUrl}`;
    }
    
    // If it doesn't start with '/' or 'http', add '/' at the beginning
    if (!firstUrl.startsWith('/') && !firstUrl.startsWith('http')) {
      return `/${firstUrl}`;
    }
    
    return firstUrl;
  }

  // Get a valid image URL
  const imageUrl = getValidImageUrl(imgUrl);

  return (
    <div className='mb-20'>
      <div className='h-80 w-80 flex flex-col gap-2'>
        <div className='absolute ml-[280px] p-1 mt-5 hover:text-white hover:bg-red-500 bg-white z-20 rounded-full'>
          <IoEyeOutline 
            className='text-2xl'
            onClick={() => {
              router.push(`../product/${id}`)
            }}
          />
        </div>
        <div className='w-80 h-[215px] overflow-hidden top-0 rounded z-0 relative group'>
          <Image src={imageUrl} alt={product || 'Product image'} width={800} height={300} className='z-10' />
          <div className='absolute bottom-0 w-full h-8 items-center text-lg bg-black transition-all delay-300 text-white flex flex-row justify-center translate-y-0 lg:translate-y-8 ease-out group-hover:translate-y-0'>
            <button>Add To Cart</button>
          </div>
        </div>
        <h1 className='font-bold tracking-wider'>{product || 'Product Name'}</h1>
        <p className='text-red-600'>{price || 'N/A'} <span className='line-through text-gray-500'>{comparedPrice || ''}</span></p>
        <div className='flex flex-row text-yellow-400 items-center'>
          <RiStarSFill className='text-yellow-400'/>
          <RiStarSFill className='text-yellow-400'/>
          <RiStarSFill className='text-yellow-400'/>
          <RiStarSFill className='text-yellow-400'/>
          <RiStarSFill className='text-gray-400'/>
          <p className='text-gray-500 ml-2'>{reviews || '0 reviews'}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductsList