'use client'
import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/products'
import { Products } from '../products'

function ProuctList() {

  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(Products)
  let [pageNum, setPageNum] = useState(5)
  const [showItems, setShowItems] = useState(filteredItems.slice(0, 8))


const searchFun = () => {

  setFilteredItems(
    
    Products.filter((product) => product.title.toLowerCase().includes(searchValue.toLowerCase())) 
    
  )
}



  const handleNextPagination = () => {
    setPageNum(pageNum + 8)
    
    const showedItems = Products.slice(pageNum, pageNum + 8)
    setShowItems(showedItems);
    
    if (pageNum === Products.length) {
      pageNum = 5
    }
  }

  const handlePrevPagination = () => {
    setPageNum(pageNum - 8)
    
    const showedItems = Products.slice(pageNum, pageNum - 8)
    setShowItems(showedItems);
    
    if (pageNum === Products.length) {
      pageNum = 5
    }
  }



  return (
    <div className=' '>
      <div className='w-full h-full mt-10 flex justify-center'>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder='Place your Search' className='bg-gray-100 rounded-l-lg focus:outline-none p-2 w-[400px]'/>
        <button className='text-white bg-black p-2 rounded-r-lg' onClick={searchFun}>Search</button>
      </div>

      <div className='flex flex-row '>



      <div className=' flex w-full justify-center gap-5 flex-wrap  mt-20 '>
      
      {searchValue ? filteredItems.map((product, index) => (
        <div key={index}>

        <ProductsList  imgUrl={product.imgUrl} product={product.title} comparedPrice={product.comparedPrice} price={product.price} reviews={product.reviews} id={product.id}/>
        </div>
      )): showItems.map((product, index) => (
        <div key={index}>

        <ProductsList  imgUrl={product.imgUrl} product={product.title} comparedPrice={product.comparedPrice} price={product.price} reviews={product.reviews} id={product.id}/>
        </div>
      ))}
      </div>
      </div>
      <div className='flex justify-between m-20'>

      <button onClick={handleNextPagination}>Next</button>
      <button onClick={handlePrevPagination}>Prev</button>
      </div>
      </div>
  )
}

export default ProuctList