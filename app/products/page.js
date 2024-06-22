import React from 'react'
import ProductsList from '../../components/products'
import { Products } from '../products'

function ProuctList() {
  return (
    <div className='flex flex-row'>
      <div className='w-1/6 h-full '></div>
      <div className='w-5/6 h-full flex gap-5 flex-wrap '>
      {Products.map((product) => (

        <ProductsList  imgUrl={product.imgUrl} product={product.title} comparedPrice={product.comparedPrice} price={product.price} reviews={product.reviews}/>
      ))}
      </div>
    </div>
  )
}

export default ProuctList