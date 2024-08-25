"use client"
import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/config';

function ResetPassowrd() {
  const [email, setEmail] = useState('')



    const restPass = (e) => {
      e.preventDefault()  
      
      sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("sent")
        setEmail('')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    }
    

  return (
    <div className='flex w-full h-[500px] items-center justify-center '>
        <div>
          <form onSubmit={(e) =>  restPass(e)}>
            <div className='flex flex-col h-full m-2'>
            <div className='text-center'>

            <h1 className='text-xl font-semibold'>Forgot Your Password?</h1>
            <p className='text-gray-500'>Enter your email to reset your password!<br />
            You will recieve a link via email with instructions <br /> to help you reset your password
            </p>
            </div>
            
            <input type="email" placeholder='Email'  name="email" value={email} className='w-30 h-10 border-2 p-2 rounded-lg mt-3' onChange={(e) => setEmail(e.target.value)}/>
            <input type="submit" name="submit" id="submit" className='bg-red-500 text-white p-3 w-full mx-auto mt-2 cursor-pointer' />
            </div>
          </form>
        </div>
    </div>
  )
}

export default ResetPassowrd