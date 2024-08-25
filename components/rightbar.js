import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


function RightBar() {
  return (
    <div className='hidden lg:flex lg:mr-2'>
      <div className="h-[390px] border-l-2 border-r-2 absolute ml-40 lg:ml-60 top-30 sm:top-40 lg:top-[150px]  xl:top-[160px]"></div>
    <div className='flex flex-col ml-10 gap-3 mt-3'>
      <Link href={'/categorie/woman-fashion'} className='flex flex-row items-center gap-1'>Computer Accessories<span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/menfasion'} className='flex flex-row items-center gap-1'>Computers<span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/menfasion'} className='flex flex-row items-center gap-1'>Computers<span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/elecronics'}>Smartphones</Link>
      <Link href={'/categorie/menfasion'} className='flex flex-row items-center gap-1'>Computers<span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/home-and-lifestyle'}>Gaming Accessories</Link>
      <Link href={'/categorie/menfasion'} className='flex flex-row items-center gap-1'>Computers<span><MdOutlineArrowForwardIos /></span></Link>
      <Link href={'/categorie/elecronics'}>Smartphones</Link>
      <Link href={'/categorie/elecronics'}>Smartphones</Link>
      <Link href={'/categorie/home-and-lifestyle'}>Gaming Accessories</Link>
      <Link href={'/categorie/home-and-lifestyle'}>Gaming Accessories</Link>

    </div>
    </div>

  )
}

export default RightBar