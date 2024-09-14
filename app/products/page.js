"use client"
import React, { useState, useEffect } from 'react'
import ProductsList from '../../components/products'
import { CategoriesProduct, Products } from '../products'
import { IoFilter } from 'react-icons/io5'
import { MdFilterListOff } from 'react-icons/md'

export default function ProductList({ searchParams }) {
  const [searchValue, setSearchValue] = useState(searchParams.s || '')
  const [filteredItems, setFilteredItems] = useState(Products)
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filtersIcon, setFiltersIcon] = useState(false)
  const itemsPerPage = 8

  useEffect(() => {
    filterProducts()
  }, [searchValue, category])

  const filterProducts = () => {
    let filtered = Products

    if (searchValue) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    if (category) {
      filtered = filtered.filter((product) => product.category === category)
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

  return (
    <div className=''>
      <div className='w-full h-full mt-10 flex justify-center flex-row items-center'>
        <div className='bg-black mr-5 p-2 rounded cursor-pointer'>
          <IoFilter className={`text-xl text-white ${filtersIcon ? "hidden" : ''}`} onClick={() => setFiltersIcon(!filtersIcon)}/>
          <MdFilterListOff className={`text-xl text-white ${filtersIcon ? "" : 'hidden'}`} onClick={() => setFiltersIcon(!filtersIcon)}/>
        </div>
        <input 
          type="text" 
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} 
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
                  onClick={() => handleCategoryClick(categoryItem.name)}
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
  )
}
