"use client"
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { FaChevronDown, FaRegHeart, FaShoppingCart, FaSearch, FaRegStar } from "react-icons/fa";
import { LuShoppingBag, LuUser2 } from 'react-icons/lu';
import useCart from '../components/cartcontext';
import useWishlist from '../components/whitelistcontext';
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineCancel } from 'react-icons/md';
import { TbLogout2 } from "react-icons/tb";
import { signOut } from 'firebase/auth';
import { auth } from '@/app/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

function NavBar() {
    const [languageMenu, setLanguageMenu] = useState(false);
    const [userMenu, setUserMenu] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);
    const [userSession] = useAuthState(auth);
    const { cartCount, searchFn } = useCart();
    const { wishlistCount } = useWishlist();

    const languageMenuRef = useRef(null);
    const userMenuRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
            setLanguageMenu(false);
        }
        if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
            setUserMenu(false);
        }
    };

    const toggleLanguageMenu = () => setLanguageMenu(prev => !prev);
    const toggleUserMenu = () => setUserMenu(prev => !prev);

    useEffect(() => {
        setHideMenu(!userSession);
    }, [userSession]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    }, []);

    const handleSearch = (e) => {
        searchFn(e.target.value)
        console.log(e.target.value)
    }

    

    return (
        <div className='pb-10 sm:pb-10 h-full border-b-4 bg-white sticky top-0 z-50'>
            <div className='flex justify-center bg-black text-white pt-2 pb-2 text-center'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="/products" className='underline'><b>ShopNow</b></a></p>
                <div className='relative' ref={languageMenuRef}>
                    <button 
                        className='pl-20 flex items-center hidden sm:hidden lg:flex md:hidden xl:flex' 
                        onClick={toggleLanguageMenu}
                    >
                        English <FaChevronDown className='ml-2 top-1' />
                    </button>
                    {languageMenu && (
                        <div className='absolute top-6 text-white flex flex-col mt-1 p-3 left-10 w-40 rounded-md bg-neutral-800/75 shadow-lg z-10 *:rounded-lg gap-2'>
                            <button className='hover:translate-x-1 transition-all delay-100 ease-in-out'>Arabic</button>
                            <button className='hover:translate-x-1 transition-all delay-100 ease-in-out'>English</button>
                            <button className='hover:translate-x-1 transition-all delay-100 ease-in-out'>French</button>
                        </div>
                    )}
                </div>
            </div>

            <div className='flex mt-10'>
                <div className='flex justify-between w-full lg:w-0'>
                    <Link href="/" className='font-bold sm:ml-10 ml-10 md:ml-10 text-xl'>PISHOP</Link>
                    <div className='flex flex-row gap-2 mr-20 items-center lg:hidden md:flex text-xl rounded-md'>
                        <Link href={'/products'}> <FaSearch className='mr-1' /></Link>
                        <Link href={'/whishlist'}> <FaRegHeart className='ml-5 mr-5' /></Link>
                        <Link href={'/cart'}> <FaShoppingCart /></Link>
                    </div>
                </div>
                <div className='flex flex-row justify-center w-full hidden md:ml-80 sm:hidden lg:flex'>
                    <div className='flex gap-10 mx-auto z-10 mr-40 md:flex md:ml-20 flex-nowrap'>
                        <Link href='/' className='transition transform hover:translate-y-1 duration-300'>Home</Link>
                        <Link href='/contact' className='transition transform hover:translate-y-1 duration-300'>Contact</Link>
                        <Link href='/about' className='transition transform hover:translate-y-1 duration-300'>About</Link>
                        <Link href='login' className={`${hideMenu ? "flex" : "hidden"} transition transform hover:translate-y-1 duration-300`}>Login</Link>
                    </div>
                    <div className='flex items-center mr-0 lg:mr-80 xl:mr-0 lg:flex'>
                        <form className='flex items-center md:bg-transparent xl:bg-gray-100'>
                            <input type="text" placeholder='search' className='bg-inherit focus:outline-none p-2 md:hidden xl:flex' onChange={(e) => {handleSearch(e)}}/>
                            <FaSearch className='mr-3 cursor-pointer' type='submit' onClick={(e) => e.preventDefault()}/>
                        </form>
                        <div className='flex items-center'>
                            <Link href={'/wishlist'} className='relative rounded-full'>
                                <FaRegHeart className='text-xl ml-5' />
                                {wishlistCount > 0 && (
                                    <span className="absolute top-0 -mt-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                                        {wishlistCount}
                                    </span>
                                )}
                            </Link>
                            <Link href={'/cart'} className='relative w-[50px] rounded-full p-1'>
                                <IoCartOutline className='text-2xl ml-3' />
                                {cartCount > 0 && (
                                    <span className="absolute top-0 -mt-1 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center text-xs">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                            <div
                                ref={userMenuRef}
                                onClick={toggleUserMenu}
                                className={`relative ${userMenu ? 'text-white bg-red-500' : 'text-black'} ${hideMenu ? "hidden" : "flex"} p-1 pb-1 rounded-full cursor-pointer`}
                            >
                                <LuUser2 className='text-xl' />
                                {userMenu && (
                                    <div className='absolute top-6 -right-10 text-black flex flex-col mt-2 p-3 w-[220px] bg-white rounded-md shadow-lg z-10 *:p-1 *:text-left *:border *:border-white *:rounded-lg gap-2'>
                                        <Link href={'/account'} className='hover:bg-gray-100 flex items-center gap-2'><FiUser className='text-xl' /> Manage My Account</Link>
                                        <button className='hover:bg-gray-100 flex items-center gap-2'><LuShoppingBag className='text-xl' />My orders</button>
                                        <button className='hover:bg-gray-100 flex items-center gap-2'><MdOutlineCancel className='text-xl' />My Cancellations</button>
                                        <button className='hover:bg-gray-100 flex items-center gap-2'><FaRegStar className='text-xl' />My Reviews</button>
                                        <button className='hover:bg-gray-100 flex items-center gap-2' onClick={() => {
                                            signOut(auth).then(() => {
                                                setHideMenu(true);
                                            }).catch((error) => {
                                                console.error("Sign out error", error);
                                            });
                                        }}><TbLogout2 className='text-xl' />Logout</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;