"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaRegHeart, FaShoppingCart, FaSearch   } from "react-icons/fa";
import { LuUser2 } from 'react-icons/lu';
import { useCart } from '@/app/cartcontext';
import { useWishlist } from '@/app/whitelistcontext'

function NavBar() {
    
    const [menu, setShowMenu] = useState(false)
    const { cartCount } = useCart();
    const { wishlistCount } = useWishlist();

  return (
    <div className='pb-10 sm:pb-10 h-full border-b-4 '>
        <div className="flex justify-center bg-black text-white pt-2 pb-2 text-center ">
            <p className=''>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="/products" className='underline'><b> ShopNow</b></a></p>
            <div className='relative'>
            <button className='pl-20 flex items-center hidden sm:hidden lg:flex md:hidden xl:flex' onClick={() => setShowMenu(!menu)}>English <FaChevronDown className='ml-2 top-1'/></button>
            <div className={`${menu ? 'visibel' : 'hidden'} absolute top-6  text-black flex flex-col mt-1 p-3  left-10 w-40 bg-white rounded-md shadow-lg z-10 *:border *:border-white *:rounded-lg gap-2 `}>
                <button className='hover:bg-gray-100'>Arabic</button>
                <button className='hover:bg-gray-100'>English</button>
                <button className='hover:bg-gray-100'>French</button>
            </div>
            </div>
        </div>

        <div className='flex mt-10'>
            <div className='flex justify-between w-full lg:w-0 '>
            <Link href="/" className='font-bold sm:ml-10 ml-10 md:ml-10 text-xl  '>PISHOP</Link>
            <div className='flex flex-row gap-2 mr-20 items-center lg:hidden  md:visible text-xl rounded-md'>

                <FaSearch className='mr-1 '  />
                <FaRegHeart className=' ml-5 mr-5'/>
                <FaShoppingCart />

            </div>

            </div>
            <div className='flex flex-row justify-center w-full hidden md:ml-80 sm:hidden lg:flex'>

                <div className=' flex gap-10  mx-auto z-10 mr-40 md:flex md:ml-20 flex-nowrap' >
                    <Link href='/' className='transition transform hover:translate-y-1 duration-300'>Home</Link>
                    <Link href='/contact' className='transition transform hover:translate-y-1 duration-300'>Contact</Link>
                    <Link href='/about' className='transition transform hover:translate-y-1 duration-300'>About</Link>
                    <Link href='login' className='transition transform hover:translate-y-1 duration-300'>Login</Link>
                </div>
                <div className='flex  items-center mr-0 lg:mr-80 xl:mr-0 lg:flex'>
                    <form className='flex items-center md:bg-transparent xl:bg-gray-100'>
                        <input type="text" placeholder='search' className='bg-inherit focus:outline-none p-2 md:hidden xl:flex'/>
                        <FaSearch className='mr-3'/>
                    </form>
                    <div className=' flex'>
                    <Link href={'/wishlist'} className='relative'><FaRegHeart className='text-xl ml-5 '/>
                    {wishlistCount > 0 && (
                                    <span className="absolute top-0 -mt-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                                        {wishlistCount}
                                    </span>
                                )}
                                    </Link>
                    <Link href={'/cart'} className='relative w-[50px]   '><FaShoppingCart className='text-xl ml-4'/>{cartCount > 0 && (
                                    <span className="absolute top-0 -mt-2 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                                        {cartCount}
                                    </span>
                                )}</Link>
                    <Link href={'account'}><LuUser2 className='text-xl'/></Link>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar
