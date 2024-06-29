'use client'
import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/products'
import { Products } from '../products'

function ProuctList() {

  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(Products)
  const [pageNum, setPageNum] = useState(5)
  const [showItems, setShowItems] = useState(filteredItems.slice(0, 5) )


  useEffect(() => {
    setFilteredItems(

      Products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase())) 
      
    )
  }, [searchValue])


  const handlePagination = () => {
    setPageNum(pageNum + 5)
    
    const showedItems = Products.slice(pageNum, pageNum + 5)
    setShowItems(showedItems);
    
    if (pageNum >= Products.length) {
      alert('nothing to show')
    }

  }


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
      
      {showItems.map((product, index) => (
        <div key={index}>

        <ProductsList  imgUrl={product.imgUrl} product={product.title} comparedPrice={product.comparedPrice} price={product.price} reviews={product.reviews} id={product.id}/>
        </div>
      ))}
      </div>
      </div>

      <button onClick={handlePagination}>Click Me</button>
      </div>
  )
}

export default ProuctList