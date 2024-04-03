import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BiSend } from "react-icons/bi";
import { FaCopyright, FaFacebook, FaTwitter, FaInstagram, FaLinkedin    } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-full lg:h-[300px] w-full bg-black'>
      <div className=' justify-around hidden lg:flex'>
        <div className='flex flex-col text-white mt-9'>
          <h3 className='font-bold text-xl mb-3'>Exclusive</h3>
          <p className='mt-2'>Subscribe</p>
          <p className='mt-2'>Get 10% off your first order</p>
          <form action="" className='flex items-center mt-2 outline focus:outline-none border-x-1'>
            <input type="email" placeholder='Your Email' className='bg-transparent p-1 focus:outline-none '/>
            <button type='submit'>
            <BiSend className='mr-2 text-xl '/>  
            </button>
          </form>
        </div>
        <div className='flex flex-col text-white mt-9'>
          <h3 className=' text-xl mb-3'>Support</h3>
          <p className='mt-2 text-sm'>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
          <Link href='mailto:someone@example.com' className='mt-2 text-sm'>exclusive@gmail.com</Link>
          <p className='mt-2 text-sm'>+88015-88888-9999</p>
        </div>
        <div className='flex flex-col text-white mt-9'>
          <h3 className=' text-xl mb-3'>Account</h3>
          <Link href='/account' className='mt-2 text-sm'>My Account </Link>
          <Link href='/login' className='mt-2 text-sm'>Login / Register </Link>
          <Link href='/cart' className='mt-2 text-sm'>Cart </Link>
          <Link href='wishlist' className='mt-2 text-sm'>Wishlist </Link>
          <Link href='/products' className='mt-2 text-sm'>Shop </Link>
        </div>
        <div className='flex flex-col text-white mt-9'>
          <h3 className=' text-xl mb-3'>Quick Link</h3>
          <Link href='/privacy-policy' className='mt-2 text-sm'>Privacy Policy </Link>
          <Link href='/terms-of-use' className='mt-2 text-sm'>Terms Of Use </Link>
          <Link href='/faq' className='mt-2 text-sm'>FAQ </Link>
          <Link href='/contact' className='mt-2 text-sm'>Contact </Link>
        </div>
        <div className='flex flex-col text-white mt-9'>
          <h3 className=' text-xl mb-3'>Download App</h3>
          <p className='mt-2'>Save $3 with App New User Only</p>
          <div className='flex flex-row'>
          <Image src={'/qrcode.jfif'} width={70} height={70} className='mt-2' alt='image'/>
          <div className='flex flex-col mt-3 ml-2'>
            <Link href={'https://play.google.com/store'}><Image src={'/playstore.jfif'} width={70} height={70} alt='image'/></Link>
            <Link href={'https://www.apple.com/app-store/'}><Image src={'/appstore.jfif'} width={70} height={70} className='mt-4' alt='image'/></Link>
          </div>
          </div>
          <div className='flex flex-row mt-2 gap-3'>
          <Link href={'https://facebook.com'}><FaFacebook /></Link>
          <Link href={'https://twitter.com'}><FaTwitter /></Link>
          <Link href={'https://instagram.com'}><FaInstagram /></Link>
          <Link href={'https://linkedin.com'}><FaLinkedin /></Link>
          </div>
        </div>
      </div>
        <div className='lg:hidden h-full bg-black'>
          <div className='mx-auto flex flex-col text-center text-white' >

            <h3 className=' text-xl mb-3 mt-10 font-bold'>Account</h3>
            <Link href='/account' className='mt-2 text-sm'>My Account </Link>
            <Link href='/login' className='mt-2 text-sm'>Login / Register </Link>
            <Link href='/cart' className='mt-2 text-sm'>Cart </Link>
            <Link href='wishlist' className='mt-2 text-sm'>Wishlist </Link>
            <Link href='/products' className='mt-2 text-sm'>Shop </Link>
          </div>
          <div className='mx-auto flex flex-col text-center text-white' >

            <h3 className=' text-xl mb-3 mt-3 font-bold'>Support</h3>
            <p className='mt-2 text-sm'>111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p>
            <Link href='mailto:someone@example.com' className='mt-2 text-sm'>exclusive@gmail.com</Link>
            <p className='mt-2 text-sm'>+88015-88888-9999</p>
          <div className='flex flex-col text-white mt-9 '>

          <h3 className=' text-xl mb-3'>Download App</h3>
          <p className='mt-2'>Save $3 with App New User Only</p>
          <div className='flex flex-row mx-auto'>
          <Image src={'/qrcode.jfif'} width={70} height={70} className='mt-2' alt='image'/>
          <div className='flex flex-col mt-3 ml-2'>
            <Link href={'https://play.google.com/store'}><Image src={'/playstore.jfif'} width={70} height={70} alt='image'/></Link>
            <Link href={'https://www.apple.com/app-store/'}><Image src={'/appstore.jfif'} width={70} height={70} className='mt-4' alt='image'/></Link>
          </div>
          </div>
          <div className='flex flex-row mt-2 gap-3 mx-auto'>
          <Link href={'https://facebook.com'}><FaFacebook /></Link>
          <Link href={'https://twitter.com'}><FaTwitter /></Link>
          <Link href={'https://instagram.com'}><FaInstagram /></Link>
          <Link href={'https://linkedin.com'}><FaLinkedin /></Link>
          </div>
          </div>
          <div className='flex flex-col text-white mt-9'>
          <p className='mt-2'>Subscribe</p>
          <p className='mt-2'>Get 10% off your first order</p>
          <form action="" className='flex items-center mt-2 outline focus:outline-none border-x-1 w-[250px] mx-auto'>
            <input type="email" placeholder='Your Email' className='bg-transparent p-1 focus:outline-none '/>
            <button type='submit'>
            <BiSend className='mr-2 text-xl '/>  
            </button>
          </form>
        </div>
        </div>
        </div>
        <div className='mt-10 mb-3 bg-black'>
            <hr />
            <div className='flex justify-center flex-row'>
            <p className='text-sm text-gray-300 text-center mt-2 flex items-center'>  <span className='mr-2 text-lg'><FaCopyright /></span>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer