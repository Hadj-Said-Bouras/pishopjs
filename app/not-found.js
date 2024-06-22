import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className='flex justify-center flex-col'>
        <h1 className='text-center text-7xl  font-semibold mt-20 mb-10'>404 Not Found</h1>
        <p className='text-center '>Your visited page not found. You may go home page.</p>
        <button className='mx-auto  mt-10 p-3 bg-red-500 text-white mb-20 px-10'><Link href="/">Back to home page</Link></button>
    </div>
  )
}

export default NotFound