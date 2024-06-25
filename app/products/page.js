'use client'
import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/products'
import { Products } from '../products'

function ProuctList() {

  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(Products)


  useEffect(() => {
    setFilteredItems(

      Products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase())) 
      
    )
  }, [searchValue])


  return (
    <div className=' '>
      <div className='w-full h-full mt-10 flex justify-center'>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Place your Search' className='bg-gray-100 rounded-l-lg focus:outline-none p-2 w-[400px]'/>
        <button className='text-white bg-black p-2 rounded-r-lg' onClick={() => setFilteredItems(() => {
          Products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase()))
        })}>Search</button>
      </div>

      <div className='flex flex-row '>



      <div className=' flex w-full justify-center gap-5 flex-wrap  mt-20 '>
      
      {filteredItems.map((product, index) => (
        <div key={index}>

        <ProductsList  imgUrl={product.imgUrl} product={product.title} comparedPrice={product.comparedPrice} price={product.price} reviews={product.reviews} id={product.id}/>
        </div>
      ))}
      </div>
      </div>
      </div>
  )
}

export default ProuctList