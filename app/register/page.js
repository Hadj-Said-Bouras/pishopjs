"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import { auth } from '../firebase/config'

import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

function Regsiter() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [
    createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleRegister = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password)
      console.log(res)
      sessionStorage.setItem('user', true)
      setEmail('')
      setPassword('')
    } catch(e) {
      console.error(e)
    }
  }

  return (
<div>
        <div className='flex flex-row justify-between items-center my-20'>
        <Image src={'/2.png'} width={700} height={500} alt='dflaskj' className='hidden md:flex'/>
            <div className='flex flex-col gap-3 w-full md:w-1/3 text-center md:text-left'>
                <h1 className='font-semibold text-4xl'>Create an account</h1>
                <p>Enter your details below</p>
                <form className='flex flex-col mt-10 ' onSubmit={event => event.preventDefault()}>
                    <div className='flex gap-8 flex-col mx-auto md:mx-0 w-5/6'>
                    <input  className='border-b border-gray-500 ' type="text" placeholder='Name' required name='name' id='name'/>
                    <input  className='border-b border-gray-500 ' type="email" placeholder='Your Email' required name='email' id='email' value={email} onChange={(event) => handleEmail(event)}/>
                    <input  className='border-b border-gray-500 ' type="password" name="password" id="password" placeholder='Passsword' value={password} required onChange={(event) => handlePassword(event)}/>
                    <div className='flex flex-col justify-between '>

                    <button className='bg-red-600 text-white text-lg w-full py-2 rounded' onClick={handleRegister}>Register</button>
                    <button className='border border-gray-500  mt-2 items-center flex justify-center gap-2 text-lg w-full py-2 rounded'>
                      <FcGoogle />
                      Sign up with Google
                    </button>
                    <p className='mt-5 text-center'>Already have an account? <Link href={'/login'} className='font-semibold p-2 hover:underline'>Log in</Link></p>
                    </div>
                    </div>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Regsiter