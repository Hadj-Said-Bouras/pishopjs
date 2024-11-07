"use client"
import React, { useState, useEffect, useCallback } from 'react'

import { CategoriesProduct, Products } from '../app/products'
import { IoFilter } from 'react-icons/io5'
import { MdFilterListOff } from 'react-icons/md'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ProductsList from './products'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(Products)
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filtersIcon, setFiltersIcon] = useState(false)
  const itemsPerPage = 8

  const searchParams = useSearchParams()
  const search = searchParams.get('s')
  const categoryHome = searchParams.get('c')

  const router = useRouter()
  const pathname = usePathname()

 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  useEffect(() => {
    if (searchValue || search) {
      setCategory('')
    } else (category || categoryHome)
    filterProducts()
  }, [searchValue, category])



  const filterProducts = () => {
    let filtered = Products

    if (searchValue || search) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase() || search.toLowerCase())
      )
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category || categoryHome)
      
    }

    setFilteredItems(filtered)
    setCurrentPage(1)
  }

  const handleCategoryClick = (selectedCategory) => {
    setCategory(selectedCategory === category ? '' : selectedCategory)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem)

  const handleNextPagination = () => {
    setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredItems.length / itemsPerPage)))
  }

  const handlePrevPagination = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }
  return <div>      <div className='w-full h-full mt-10 flex justify-center flex-row items-center'>
  <div className='bg-black mr-5 p-2 rounded cursor-pointer'>
    <IoFilter className={`text-xl text-white ${filtersIcon ? "hidden" : ''}`} onClick={() => setFiltersIcon(!filtersIcon)}/>
    <MdFilterListOff className={`text-xl text-white ${filtersIcon ? "" : 'hidden'}`} onClick={() => setFiltersIcon(!filtersIcon)}/>
  </div>
  <input 
    type="text" 
    value={searchValue} 
    onChange={(e) => setSearchValue(e.target.value) && search == ''} 
    placeholder='Place your Search' 
    className='bg-gray-100 rounded-l-lg focus:outline-none p-2 w-[400px]'
  />
  <button className='text-white bg-black p-2 rounded-r-lg'>Search</button>
</div>

{filtersIcon && (
  <div className='relative lg:static lg:mt-5 h-fit z-30 flex lg:flex-row flex-col justify-center w-fit lg:mx-auto lg:items-center'>
    <div className='bg-gray-500 absolute lg:static top-2 flex flex-col lg:flex-row rounded-md'>
      {CategoriesProduct.map((categoryItem, index) => {
        // Safely render the icon
        const IconComponent = categoryItem.icon && typeof categoryItem.icon === 'function' 
          ? categoryItem.icon 
          : null;

        return (
          <div 
            key={index} 
            className={`bg-gray-500 text-white p-2 rounded-lg cursor-pointer ${category === categoryItem.name ? 'bg-red-500 text-red' : ''}`}
            onClick={() => handleCategoryClick(categoryItem.name) && router.push(pathname + '?' + createQueryString('c', `${category}`))}
          >
            {IconComponent && <IconComponent />}
            <span>{categoryItem.name}</span>
          </div>
        );
      })}
    </div>
  </div>
)}

<div className='flex flex-row'>
  <div className='flex w-full justify-center gap-5 flex-wrap mt-10'>
    {currentItems.map((product, index) => (
      <div key={index}>
        <ProductsList
          imgUrl={product.imgUrl} 
          product={product.title} 
          comparedPrice={product.comparedPrice} 
          price={product.price} 
          reviews={product.reviews} 
          id={product.id}
        />
      </div>
    ))}
  </div>
</div>

<div className='flex justify-between m-20'>
  <button 
    onClick={handlePrevPagination} 
    className='bg-red-500 p-2 px-3 text-white text-xl rounded-lg'
    disabled={currentPage === 1}
  >
    Prev
  </button>
  <button 
    onClick={handleNextPagination} 
    className='bg-red-500 p-2 px-3 text-white text-xl rounded-lg'
    disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}
  >
    Next
  </button>
</div>
</div>
}

export default Search
