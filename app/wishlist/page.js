"use client"

import React from 'react'
import ProductsList from '../../components/products'
import ItemsHead from '../../components/itemshead'
import useWishlist from '@/components/whitelistcontext';
import { IoMdCloseCircle } from 'react-icons/io';

function WishList() {

    const { wishlistCount, addToWhishList, removeItemFromWhishList, whishListItems } = useWishlist();
    const offer = [
        {product: 'flkadsj', originalprice: 32, compairedprice: 2444,},
        {product: 'fads', originalprice: 43, compairedprice: 543,},
        {product: 'ewf', originalprice: 6345, compairedprice: 24,},
        {product: 'flkvxzcadsj', originalprice: 6745, compairedprice: 5342,},
        {product: 'we', originalprice: 543, compairedprice: 325231,},  
    ]

    const handelRemoveFromCart = (product) => {
        removeItemFromWhishList(product)
    }
  return (
    <div>
        <div className='flex flex-row justify-between items-center m-10'>
            <p>Whishlist {`${wishlistCount}`}</p>
            <button className='p-3 px-7 text-lg border border-black '>Move All To Bag</button>
        </div>
        <div className='flex flex-row flex-wrap justify-center gap-5'>


        {whishListItems.map((product, index) => (
            
            <div className='flex flex-row group relative' key={index}>
                <IoMdCloseCircle className='text-xl text-red-500 group-hover:flex absolute z-10 bg-white rounded-full left-2 top-6 hidden cursor-pointer ' onClick={() => handelRemoveFromCart(product)}/>
            
                <ProductsList image={product.imgUrl} product={product.title} originalprice={product.price} compairedprice={product.comparedPrice} />
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