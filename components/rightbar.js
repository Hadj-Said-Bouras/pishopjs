import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


function RightBar() {
  return (
    <div className='hidden lg:flex lg:mr-2'>
      <div className="h-[390px] border-l-2 border-r-2 absolute ml-40 lg:ml-60 top-30 sm:top-40 lg:top-[150px]  xl:top-[160px]"></div>
    <div className='flex flex-col ml-10 gap-3'>
      <Link href={'/categorie/woman-fashion'} className='flex flex-row items-center gap-6'>Woman&apos;s Fashion<span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/menfasion'} className='flex flex-row items-center gap-12'>Men&apos;s Fashion <span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/elecronics'}>Electronics</Link>
      <Link href={'/categorie/home-and-lifestyle'}>Home & Lifestyle</Link>
      <Link href={'/categorie/medicine'}>Medicine</Link>
      <Link href={'/categorie/sports-and-outdoor'}>Sports & Outdoor</Link>
      <Link href={'/categorie/baby-and-toys'}>Baby&apos;s & Toys</Link>
      <Link href={'/categorie/groceries-and-pets'}>Groceries & Pets</Link>
      <Link href={'/categorie/health-and-beauty'}>Health & Beauty</Link>

    </div>
    </div>

  )
}

export default RightBar