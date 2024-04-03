import React from 'react'
import ProductsList from '../../components/products'
import ItemsHead from '../../components/itemshead'
import { off } from 'process'

function WishList() {
    const products = [
        {product: 'flkadsj', originalprice: 32, compairedprice: 2444, },
        {product: 'fads', originalprice: 43, compairedprice: 543, },
        {product: 'ewf', originalprice: 6345, compairedprice: 24, },
        {product: 'flkvxzcadsj', originalprice: 6745, compairedprice: 5342, },
        {product: 'we', originalprice: 543, compairedprice: 325231, },  
    ]

    const offer = [
        {product: 'flkadsj', originalprice: 32, compairedprice: 2444, },
        {product: 'fads', originalprice: 43, compairedprice: 543, },
        {product: 'ewf', originalprice: 6345, compairedprice: 24, },
        {product: 'flkvxzcadsj', originalprice: 6745, compairedprice: 5342, },
        {product: 'we', originalprice: 543, compairedprice: 325231, },  
    ]
  return (
    <div>
        <div className='flex flex-row justify-between items-center m-10'>
            <p>Whishlist {`(4)`}</p>
            <button className='p-3 px-7 text-lg border border-black '>Move All To Bag</button>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-5'>


        {products.map((product, index) => (

            <div className='flex flex-row' key={index}>

            <ProductsList product={product.product} originalprice={product.originalprice} compairedprice={product.compairedprice} />
            </div>
        ))}
</div>
        <div className='flex flex-row justify-between items-center'>

        <ItemsHead title='Just For You' />
        <button className='p-3 px-7 text-lg border md:mr-[135px] border-black '>See All</button>
        </div>
        <div className='flex flex-row flex-wrap justify-center mt-20 gap-5'>

    {offer.map((offer, index) => (
    <div key={index}>

    <ProductsList originalprice={offer.originalprice} compairedprice={offer.compairedprice} />
    </div>
))}
</div>
    </div>
  )
}

export default WishList