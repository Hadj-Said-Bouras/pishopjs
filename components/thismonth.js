"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "../components/cartcontext";
import useWishlist from "./whitelistcontext";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineStarPurple500 } from "react-icons/md";

import "swiper/swiper-bundle.css";
import { Products } from "../app/products";

function ThisMonth() {
  const router = useRouter();

  const { addToCart, removeFromCart, cartItems } = useCart();
  const { addToWhishList, removeItemFromWhishList, whishListItems } = useWishlist();

  const [randomProducts, setRandomProducts] = useState([]);

  const handleAddToCart = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  const handleAddToWishlist = (product) => {
    if (whishListItems.find((item) => item.id === product.id)) {
      removeItemFromWhishList(product);
    } else {
      addToWhishList(product);
    }
  };

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

  const randomItems = () => {
    let collection = [];
    let items = Array.from(Products);
    for (let i = 0; i <= Products.length; i++) {
      collection.push(items[Math.floor(Math.random() * items.length)]);
    }
    return collection;
  };

  useEffect(() => {
    setRandomProducts(randomItems());
  }, []);

  return (
    <div className="w-full h-fit pb-10">
      <div className="flex flex-row items-center ml-10 mt-20 gap-2 relative">
        <div className="w-[20px] h-[60px] bg-red-500 rounded"></div>
        <p className="text-red-400 font-bold">This month:</p>
      </div>

      <div className="flex flex-row justify-between items-center mt-10 ml-10 mr-10 mb-5">
        <h2 className="font-bold text-2xl">Best Selling Products</h2>
        <div>
          <div className="text-md flex justify-center bg-red-500 px-6 py-2">
            <button className="text-white ">View All</button>
          </div>
          <div className="ml-10 text-black text-4xl flex relative hidden lg:flex gap-5 top-20 xl:top-10">
            <button onClick={handlePrevSlide}>
              <HiOutlineArrowSmallLeft className="bg-gray-200 rounded-full" />
            </button>
            <button onClick={handleNextSlide}>
              <HiOutlineArrowSmallRight className="bg-gray-200 rounded-full" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap justify-center text-center gap-4 mb-40 ml-3">
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
            1200: {
              slidesPerView: 4,
            },
          }}
          className="xl:top-[150px] sm:bottom-0"
        >
          {randomProducts.map((product, index) => (
            <SwiperSlide key={index} className="lg:ml-5">
              <div className="h-80 w-80 flex flex-col gap-2">
                <div className="absolute ml-[280px] p-1 mt-5 hover:text-white hover:bg-red-500 bg-white z-20 rounded-full">
                  <IoEyeOutline
                    className="text-2xl"
                    onClick={() => {
                      router.push(`/product/${product.id}`);
                    }}
                  />
                </div>
                <div className="absolute ml-[280px] p-1 mt-[60px] bg-white z-20 hover:text-white hover:bg-red-500 rounded-full">
                  <AiOutlineHeart
                    className="text-2xl rounded-full"
                    onClick={() => handleAddToWishlist(product)}
                  />
                </div>
                <div className="w-80 h-[215px] overflow-hidden top-0 rounded z-0 relative group">
                  <Image
                    src={`${product.imgUrl[0]}`}
                    alt={product.title}
                    width={800}
                    height={300}
                    className="z-10"
                  />
                  <div
                    className="absolute bottom-0 w-full h-8 items-center text-lg bg-black transition-all delay-300 text-white flex flex-row justify-center translate-y-0 lg:translate-y-8 ease-out group-hover:translate-y-0 cursor-pointer"
                    onClick={() => handleAddToCart(product)}
                  >
                    <button>Add To Cart</button>
                  </div>
                </div>
                <h1 className="font-bold tracking-wider">{product.title}</h1>
                <p className="text-red-600">
                  {product.price} <span className="line-through text-gray-500">{product.comparedPrice}</span>
                </p>
                <div className="flex flex-row text-yellow-400 items-center justify-center">
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <MdOutlineStarPurple500 />
                  <p className="text-gray-500 ml-2">({product.reviews})</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ThisMonth;
