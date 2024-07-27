"use client"
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { HiOutlineArrowSmallRight, HiOutlineArrowSmallLeft  } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'





function Categories() {
  const swiperRef = useRef(null)
  const handleInit = (swiper) => {
    swiperRef.current = swiper;
  }

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }

  }
  return (
    <div className='w-full h-2/6'>
       <div className='flex flex-row items-center ml-2 sm:ml-10 mt-20 gap-2'>
            <div className='w-[20px] h-[60px] bg-red-500  rounded'></div>
            <p className='text-red-400 font-bold'>Categories:</p>
        </div> 

        <div className='flex flex-row justify-between items-center mt-10 ml-10 mr-10 mb-10'>
          <h2 className='font-bold sm:text-2xl hidden sm:flex'>Browse By Categorie</h2>
            <div className='text-black hidden sm:flex text-4xl flex gap-5 justify-center'>
                      <button onClick={handlePrevSlide}><HiOutlineArrowSmallLeft  className='bg-gray-200 rounded-full'  /></button>
                      <button onClick={handleNextSlide}><HiOutlineArrowSmallRight  className='bg-gray-200 rounded-full'/></button>
            </div>
          </div>
          <div className='ml-5'>

        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          onInit={handleInit}
          breakpoints={{
            768: { 
            slidesPerView: 4,
        },
        
        480: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
          },
        1024: {
            slidesPerView: 6,
          }, 
          1200:{
            slidesPerView: 6,
          },
        }}
        className='flex justify-center'
        >
        
          <SwiperSlide>
           
            

            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex flex-col items-center w-[170px] h-[145px] border-2 border-gray-300'>

              <Image src={'/phone.png'} width={100} height={90} alt='phones' className='mx-auto'/>
              <p>Iphones</p>
            </div>
          </SwiperSlide>
        </Swiper>
          </div>
        
         <div className="h-[1px] w-full mx-auto bg-gray-400 mt-20"></div>
    </div>
  )
}

export default Categories;