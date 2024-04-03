"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft  } from "react-icons/hi2";
import { IoEyeOutline } from 'react-icons/io5';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useTimer } from 'react-timer-hook';

import { Swiper, SwiperSlide, useSwiper,  } from 'swiper/react';

import 'swiper/swiper-bundle.css'

function FlashSales() {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ 
            expiryTimestamp: Date.now() + 24 * 60 * 60 * 1000,
            onExpire: () => console.warn('onExpire called') 
           })

    const swiperRef = useRef(null);
    const handleInit = (swiper) => {
      swiperRef.current = swiper;
    };
  
    const handleNextSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slideNext();
      }
    };
  
    const handlePrevSlide = () => {
      if (swiperRef.current) {
        swiperRef.current.slidePrev();
      }
    };

    const products = [
        {title: 'mouse', price: '$20', comparedPrice: '$50', reviews: 50, imgUrl: '/p2.jpg'},
        {title: 'computer', price: '$20', comparedPrice: '$50', reviews: 50, imgUrl: '/p3.jpg'},
        {title: 'phone', price: '$20', comparedPrice: '$50', reviews: 50, imgUrl: '/p4.jpg'},
        {title: 'mouse', price: '$20', comparedPrice: '$50', reviews: 50, imgUrl: '/p2.jpg'},
        {title: 'computer', price: '$20', comparedPrice: '$50', reviews: 50, imgUrl: '/p3.jpg'},
        {title: 'phone', price: '$20', comparedPrice: '$50', reviews: 50, imgUrl: '/p4.jpg'},
    ]
return (
    <div>
        <div className='w-full h-full'>

            <div className='flex flex-row items-center bottom-[450px] sm:bottom-60 relative ml-1 sm:ml-10'>
                <div className='w-[20px] h-[60px] bg-red-500 rounded'></div>
                <div className='ml-2'>Today&apos;s</div>
                <h3 className='text-2xl font-bold relative ml-10 sm:ml-[100px]  md:mr-0 md:ml-[-90px] top-0 md:top-[130px]'>Flash Sales</h3>
            </div>
            <div className='flex flex-row bottom-[400px] sm:bottom-[200px]  relative '>
                <div className='flex flex-row gap-4 sm:gap-9 mx-auto ml-[50px] sm:ml-[150px] md:ml-[300px] lg:ml-[400px] xl:ml-[470px]'>
                    <h5>Days:</h5>
                    <h5>Hours:</h5>
                    <h5>Minutes:    </h5>
                    <h5>Seconds:</h5>
                </div>
                <div className='flex flex-row gap-2 absolute ml-[60px] md:ml-80 sm:ml-[170px] xl:ml-[500px] mx-auto lg:ml-[410px] mt-10 md:mt-10 xl:mt-10 text-3xl sm:text-4xl font-bold tracking-widest  '>
                     <span>{String(days).padStart(2, "0")}</span>:
                     <span>{String(hours).padStart(2, "0")}</span>:
                     <span>{String(minutes).padStart(2, "0")}</span>:
                     <span>{String(seconds).padStart(2, "0")}</span>
                </div>
                <div className='text-black  text-4xl flex relative hidden lg:flex right-20 gap-5 top-20 xl:top-10  '>
                <button onClick={handlePrevSlide}><HiOutlineArrowSmallLeft  className='bg-gray-200 rounded-full'  /></button>
                <button onClick={handleNextSlide}><HiOutlineArrowSmallRight  className='bg-gray-200 rounded-full'/></button>
                </div>
            </div>
                
                <Swiper 
                    
                    spaceBetween={50}
                    slidesPerView={1}
                    onInit={handleInit}
                    breakpoints={{
                        768: { 
                        slidesPerView: 3,
                    },
            
                    480: {
                        slidesPerView: 2,
                    },
                    320: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 4,
                    }, 
                    1200:{
                        slidesPerView: 4,
                    },
                    }}
                    className='bottom-[300px] sm:bottom-0 left-auto'
                    >
                    {products.map((product, index) => (
                        

                        <SwiperSlide key={index} className='  ml-10 lg:ml-5'>
                        <div className='h-80 w-80 flex  flex-col gap-2'>
                        <div className='absolute ml-[280px] p-1 mt-5 hover:text-white hover:bg-red-500 bg-white z-20  rounded-full  '>
    
                        <IoEyeOutline className=' text-2xl '/>
                        </div>
                        <div className='absolute ml-[280px] p-1 mt-[60px] bg-white z-20 hover:text-white hover:bg-red-500 rounded-full '>
    
                        <AiOutlineHeart className='text-2xl rounded-full'/>
                        </div>
                                <div className='w-80 h-[215px]  overflow-hidden top-0 rounded z-0 relative group' >
                                  <Image src={`${product.imgUrl}`}  alt='dsfa' width={800} height={300} className='  z-10' />      
                                  <div className='absolute bottom-0 w-full h-8 items-center text-lg bg-black transition-all delay-300 text-white flex flex-row justify-center  translate-y-0 lg:translate-y-8 ease-out group-hover:translate-y-0  '>
                                    <button>Add To Cart</button>
                                  </div>                          
                                    </div>
                                    <h1 className='font-bold tracking-wider'>{`${product.title}`}</h1>
                                    <p className='text-red-600'>{`${product.price}`} <span className='line-through text-gray-500'>{`${product.comparedPrice}`}</span></p>
                                    <div className='flex flex-row text-yellow-400 items-center'>
                                        <MdOutlineStarPurple500 />
                                        <MdOutlineStarPurple500 />
                                        <MdOutlineStarPurple500 />
                                        <MdOutlineStarPurple500 />
                                        <p className='text-gray-500 ml-2'>{`${product.reviews}`}</p>
                                    </div>
                              
                        </div>
                    </SwiperSlide>
                   
                     
                    ))}
            </Swiper>
                    
        

            <div className='flex justify-center  top-[1050px] absolute sm:static mb-10 mt-20 w-full'>
                <button className=' p-3 bg-red-400 text-white hover:bg-red-500'>View All Products</button>
            </div>
        
        </div>
    </div>
)
}

export default FlashSales