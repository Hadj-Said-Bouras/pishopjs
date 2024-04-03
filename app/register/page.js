import Image from 'next/image'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'

function Regsiter() {
  return (
<div>
        <div className='flex flex-row justify-between items-center my-20'>
        <Image src={'/2.png'} width={700} height={500} alt='dflaskj' className='hidden md:flex'/>
            <div className='flex flex-col gap-3 w-full md:w-1/3 text-center md:text-left'>
                <h1 className='font-semibold text-4xl'>Create an account</h1>
                <p>Enter your details below</p>
                <form className='flex flex-col mt-10 '>
                    <div className='flex gap-8 flex-col mx-auto md:mx-0 w-5/6'>
                    <input  className='border-b border-gray-500 ' type="text" placeholder='Email or Phone Number' required />
                    <input  className='border-b border-gray-500 ' type="text" placeholder='Email or Phone Number' required />
                    <input  className='border-b border-gray-500 ' type="password" name="password" id="" placeholder='********' required />
                    <div className='flex flex-col justify-between '>

                    <button className='bg-red-600 text-white text-lg w-full py-2 rounded'>Log In</button>
                    <button className='border border-gray-500  mt-2 items-center flex justify-center gap-2 text-lg w-full py-2 rounded'><FcGoogle />
 Sign up with Google</button>
                    </div>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Regsiter