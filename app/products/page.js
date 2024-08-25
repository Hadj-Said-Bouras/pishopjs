'use client'
import React, { useEffect, useState } from 'react'
import ProductsList from '../../components/products'
import { Products } from '../products'
import { IoFilter } from 'react-icons/io5'
import { MdFilterListOff } from 'react-icons/md'
import { useSearchParams } from 'next/navigation'


function ProductList() {
  const [searchValue, setSearchValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(Products)
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [filtersIcon, setFiltersIcon] = useState(false)
  const itemsPerPage = 8

  let searchParams = useSearchParams()
  const search = searchParams.get('s')
  console.log(search) 
  useEffect(() => {
    filterProducts()
  }, [searchValue, category])

  const filterProducts = () => {  
    let filtered = Products
    
    if (search !== '') {
      setSearchValue(search)
    }

    // Apply search filter
    if (searchValue) {
      filtered = filtered.filter((product) => 
        product.title.toString().toLowerCase().includes(searchValue.toString().toLowerCase())
      )
    }
    
    // Apply category filter only if there are search results or no search term
    if (category && (filtered.length > 0 || !searchValue)) {
      filtered = filtered.filter((product) => product.category === category)
    }
    
    // If no results found with category filter, show all search results
    if (filtered.length === 0 && searchValue) {
      filtered = Products.filter((product) => 
        product.title.toLowerCase().includes(searchValue.toString().toLowerCase())
      )
      setCategory('') // Reset category selection
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

        <IoFilter className={`text-xl   text-white ${filtersIcon ? "hidden" : ''}`} onClick={() => setFiltersIcon(!filtersIcon)}/>
        <MdFilterListOff className={`text-xl   text-white ${filtersIcon ? "" : 'hidden'}`} onClick={() => setFiltersIcon(!filtersIcon)}/>

        </div>
        <input 
          type="text" 
          value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} 
          placeholder='Place your Search' 
          className='bg-gray-100 rounded-l-lg focus:outline-none p-2 w-[400px]'
        />
        <button className='text-white bg-black p-2 rounded-r-lg' onClick={filterProducts}>Search</button>

      </div>
      {filtersIcon ? 
      <div className='bg-gray-500 w-fit h-full absolute z-40 flex flex-col lg:flex-row pt-5 lg:pt-0 lg:mx-auto top-40 sticky mt-5  rounded-lg mx-1 lg:items-center'>
        <h1 className={`bg-gray-500 text-white p-2 rounded-full cursor-pointer flex flex-wrap ${category === 'Computer Accessories' ? 'bg-red-500 text-red' : ''}`} onClick={() => handleCategoryClick('Computer Accessories')}>Computer Accessories</h1>
        <h1 className={`bg-gray-500 text-white p-2 rounded-full cursor-pointer flex flex-wrap ${category === 'Computers' ? 'bg-red-500 text-red' : ''}`} onClick={() => handleCategoryClick('Computers')}>Computers</h1>
        <h1 className={`bg-gray-500 text-white p-2 rounded-full cursor-pointer flex flex-wrap ${category === 'Smartphones' ? 'bg-red-500 text-red' : ''}`} onClick={() => handleCategoryClick('Smartphones')}>Smartphones</h1>
        <h1 className={`bg-gray-500 text-white p-2 rounded-full cursor-pointer flex flex-wrap ${category === 'Gaming Accessories' ? 'bg-red-500 text-red' : ''}`} onClick={() => handleCategoryClick('Gaming Accessories')}>Gaming Accessories</h1>
      </div>
        : null}
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

export default ProductList