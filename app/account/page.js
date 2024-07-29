"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'

function Account() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    useEffect(() => {
        const userSession = typeof window !== 'undefined' ? sessionStorage.getItem('user') : null;

        if (!user && !userSession) {
            router.push('/');
        }
    }, [user, router]);

  return (
    <div>
        <div className='flex flex-row justify-between flex-wrap lg:flex-nowrap'>
            <div className='w-full lg:w-1/6 ml-20 mt-10'>
                <div className='flex flex-col gap-5'>

                    <h1 className='font-bold'>Manage My Account</h1>
                    <p className='text-red-500 ml-10'>My Profile</p>
                    <p className=' ml-10 text-gray-500'>Address Book</p>
                    <p className=' ml-10 text-gray-500'>My Payment Options</p>
                </div>
                <div className='flex flex-col gap-5 mt-5'>

                    <h1 className='font-bold'>Manage My Account</h1>
                    <p className='text-red-500 ml-10'>My Profile</p>
                    <p className=' ml-10 text-gray-500'>Address Book</p>
                    <p className=' ml-10 text-gray-500'>My Payment Options</p>
                </div>
            </div>
            <div className='flex flex-col gap-5 mt-20 w-full lg:w-4/6 m-10 lg:m-5'>
                <h1 className='text-left text-xl text-red-500'>Edit Profile</h1>
                <form className=''>
                    <div className=''>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

                        <label htmlFor="firstName">First Name</label>
                        <label htmlFor="lastName" className='hidden lg:block'>Last Name</label>
                        <input className='p-3 bg-gray-100 w-full lg:w-[450px]' type="text" placeholder='Rimel'/>
                        <label htmlFor="lastName" className='lg:hidden'>Last Name</label>
                        <input className='p-3 bg-gray-100 w-full lg:w-[450px]' type="text" placeholder='Md'/>
                     

                        <label htmlFor="email">Email</label>
                        <label htmlFor="Address" className='hidden lg:block'>Address</label>
                        <input className='p-3 bg-gray-100 w-full lg:w-[450px]' type="Email" placeholder='hadjsaidbouras@hotmail.com'/>
                        <label htmlFor="Address" className='lg:hidden'>Address</label>
                        <input className='p-3 bg-gray-100 w-full lg:w-[450px]' type="Email" placeholder='Guerrara, Ghardaia, Algeria'/>

                        </div>

                    </div>
                    <div className='grid grid-cols-1 mt-5 gap-5 mb-10'>
                        <h1>Password Change</h1>
                        <input className='p-3 bg-gray-100 w-full lg:w-[970px]' type="password" name="" id="" placeholder='******' />
                        <input className='p-3 bg-gray-100 w-full lg:w-[970px]' type="password" name="" id="" placeholder='******' />
                        <input className='p-3 bg-gray-100 w-full lg:w-[970px]' type="password" name="" id="" placeholder='******' />
                    </div>
                    <div className='flex items-center flex-row-reverse mr-10 gap-5'>
                    <button className='p-3 px-3 text-lg text-white bg-red-600 rounded mb-5'>Save Changes</button>
                    <button className='w-fit p-3 mb-5'>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Account