"use client";

import Image from 'next/image';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { LuInstagram, LuLinkedin, LuTwitter, LuVoicemail } from 'react-icons/lu';
import { useRef, useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

function Workers() {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0);
  const images = [
    '/man1.png', '/man1.png', '/man1.png', '/man1.png', '/man1.png', '/man1.png', '/man1.png', '/man1.png', '/man1.png',
  ];
  const slides = images.slice(0, -2);

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

  return (
    <div className=' mx-auto w-4/6 mb-20'>
      <SwiperComponent
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => {
          const swiper = swiperRef.current;
          if (swiper) {
            setIndex((prevIndex) =>
              prevIndex <= swiper.realIndex ? prevIndex + 1 : prevIndex - 1
            );
          }
        }}
        onInit={handleInit}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        <div className='flex justify-between mt-10 mx-auto'>
          <button onClick={handlePrevSlide} className='text-blue-500 bg-white text-4xl'><FaArrowCircleLeft /></button>
          <button onClick={handleNextSlide} className='text-blue-500 bg-white text-4xl'><FaArrowCircleRight /></button>
        </div>
        <div className='flex justify-center gap-10 mt-5 hidden md:flex'>
          {slides.map((_, indicatorIndex) => (
            <div key={indicatorIndex} className={`h-[20px] w-[20px] border-white border-4 rounded-full pointer mt-[15px] mr-[7px] mb-0 ${index === indicatorIndex ? 'bg-red-400' : 'bg-gray-400 '}`}></div>
          ))}
        </div>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='overflow-hidden w-[280px] h-4/6 bg-gray-100 w-full'>
              <Image src={img} width={150} height={100} alt='fldsakj' className='w-4/6 h-full flex mx-auto ' />
            </div>
            <h1 className='text-xl font-semibold mb-1'>Tome Curise</h1>
            <p>Founder & Chaiman</p>
            <div className='flex mt-1 gap-5 flex-row'>
              <LuTwitter className='cursor-pointer'/>
              <LuLinkedin className='cursor-pointer' />
              <LuInstagram className='cursor-pointer'/>
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div className='flex justify-center mt-20'>
        <Image src={'/secure.webp'} width={500} height={200} alt='secure' />
      </div>
    </div>
  );
}

export default Workers;