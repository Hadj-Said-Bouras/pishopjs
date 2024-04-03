import Image from 'next/image'
import React from 'react'


function LoginForm() {
  return (
    <div>
        <div className='flex flex-row justify-between items-center my-20'>
        <Image src={'/2.png'} width={700} height={500} alt='dflaskj' className='hidden md:flex'/>
            <div className='flex flex-col gap-3 w-full md:w-1/3 text-center md:text-left'>
                <h1 className='font-semibold text-4xl'>Log in to WOS</h1>
                <p>Enter your details below</p>
                <form className='flex flex-col mt-10 '>
                    <div className='flex gap-8 flex-col mx-auto md:mx-0 w-5/6'>

                    <input  className='border-b border-gray-500 ' type="email/number" placeholder='Email or Phone Number' required />
                    <input  className='border-b border-gray-500 ' type="password" name="password" id="" placeholder='********' required />
                    <div className='flex flex-row justify-between  items-center'>

                    <button className='bg-red-600 text-white text-lg px-7 py-2 rounded'>Log In</button>
                    <p className='text-red-500 underline cursor-pointer'>Forget Password?</p>
                    </div>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default LoginForm


