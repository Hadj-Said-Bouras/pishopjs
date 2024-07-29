"use client"

import React from 'react'
import ProductsList from '../../components/products'
import ItemsHead from '../../components/itemshead'
import useWishlist from '../../components/whitelistcontext';
import { IoMdCloseCircle } from 'react-icons/io';

function WishList() {
    const { wishlistCount, removeItemFromWhishList, whishListItems } = useWishlist()
    const offer = [
        {id: 1, product: 'flkadsj', price: 32, comparedPrice: 2444, imgUrl: 'default1.jpg'},
        {id: 2, product: 'fads', price: 43, comparedPrice: 543, imgUrl: 'default2.jpg'},
        {id: 3, product: 'ewf', price: 6345, comparedPrice: 24, imgUrl: 'default3.jpg'},
        {id: 4, product: 'flkvxzcadsj', price: 6745, comparedPrice: 5342, imgUrl: 'default4.jpg'},
        {id: 5, product: 'we', price: 543, comparedPrice: 325231, imgUrl: 'default5.jpg'},  
    ]

    const handleRemoveFromCart = (product) => {
        removeItemFromWhishList(product)
    }

    return (
        <div>
            <div className='flex flex-row justify-between items-center m-10'>
                <p>Wishlist {`${wishlistCount}`}</p>
                <button className='p-3 px-7 text-lg border border-black '>Move All To Bag</button>
            </div>
            <div className='flex flex-row flex-wrap justify-center gap-5'>
                {whishListItems.map((product, index) => (
                    <div className='flex flex-row group relative' key={product.id || index}>
                        <IoMdCloseCircle 
                            className='text-xl text-red-500 group-hover:flex absolute z-10 bg-white rounded-full left-2 top-6 hidden cursor-pointer ' 
                            onClick={() => handleRemoveFromCart(product)}
                        />
                        <ProductsList 
                            id={product.id}
                            imgUrl={product.imgUrl[0]}
                            product={product.title || product.product}
                            price={product.price}
                            comparedPrice={product.comparedPrice}
                            reviews={product.reviews}
                        />
                    </div>
                ))}
            </div>
            <div className='flex flex-row justify-between items-center'>
                <ItemsHead title='Just For You' />
                <button className='p-3 px-7 text-lg border md:mr-[135px] border-black '>See All</button>
            </div>
            <div className='flex flex-row flex-wrap justify-center mt-20 gap-5'>
                {offer.map((offerItem) => (
                    <div key={offerItem.id}>
                        <ProductsList 
                            id={offerItem.id}
                            imgUrl={offerItem.imgUrl}
                            product={offerItem.product}
                            price={offerItem.price}
                            comparedPrice={offerItem.comparedPrice}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WishList