"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from '../app/firebase/config'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router'


function LoginForm() {

  const [email, setemail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()


  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth)

  const handleEmail = (event) => {
    setemail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleLogIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password)
      console.log(res)
      sessionStorage.setItem('user', true)
      setemail('')
      setPassword('')
      router.push('/')
    } catch(e) {
      console.error(e)
    }
  }


  return (
    <div>
        <div className='flex flex-row justify-between items-center my-20'>
        <Image src={'/2.png'} width={700} height={500} alt='dflaskj' className='hidden md:flex'/>
            <div className='flex flex-col gap-3 w-full md:w-1/3 text-center md:text-left'>
                <h1 className='font-semibold text-4xl'>Log in to WOS</h1>
                <p>Enter your details below</p>
                <form className='flex flex-col mt-10'
                onSubmit={(e) => e.preventDefault()}
                >
                    <div className='flex gap-8 flex-col mx-auto md:mx-0 w-5/6'>

                    <input  className='border-b border-gray-500 ' type="text" placeholder='Enter Your Email Or Phone Number' required onChange={(event) => handleEmail(event)} value={email}/>
                    <input  className='border-b border-gray-500 ' type="password" name="password" id="password" placeholder='Password' required onChange={(event) => handlePassword(event)} value={password}/>
                    <div className='flex flex-row justify-between items-center'>

                    <button className='bg-red-600 text-white text-lg px-7 py-2 rounded' onClick={handleLogIn}>Log In</button>
                    <p className='text-red-500 cursor-pointer'>Forget Password?</p>
                    </div>
                    <p className='text-center'>Don&apos;`t Have an account? <Link href={'/register'} className='text-red-500 underline cursor-pointer '> Register now!</Link></p>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default LoginForm


