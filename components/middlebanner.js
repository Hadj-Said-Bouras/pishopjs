import Image from 'next/image'
import React from 'react'

function MiddleBanner() {
  return (
    <div className='w-[480px] sm:w-[1392px] bg-black h-[444px] bg-black mx-auto mt-20 mb-40 overflow-hidden relative'>
        <div className=''>
            <div className=''>
                <div className='absolute bottom-20 mx-auto'>

                    <p className='mb-10 ml-10 text-green-300'>Categories</p>                
                    <h1 className='ml-10 mb-10 text-xl sm:text-3xl text-white font-bold sm:flex'>Enhance Your <br /> Music Experience</h1>
                    <div className='flex flex-row gap-3 ml-10 text-center leading-4 mb-20  '>

                        <div className='w-[60px] h-[60px] rounded-full bg-white font-semibold flex items-center'>23 Hours</div>
                        <div className='w-[60px] h-[60px] rounded-full bg-white font-semibold flex items-center'>23 Hours</div>
                        <div className='w-[60px] h-[60px] rounded-full bg-white font-semibold flex items-center'>23 Hours</div>
                        <div className='w-[60px] h-[60px] rounded-full bg-white font-semibold flex items-center'>23 Hours</div>
                    </div>
                    <button className='text-white bg-green-500 px-10 py-5 flex absolute top-[290px] left-10'>Buy Now</button>
                </div>
        <div className='absolute flex sm:static sm:absolute top-20 right-[100px] sm:right-20 sm:top-10 w-[150px] h-[150px] sm:w-[500px] sm:h-[400px]  items-center'>
            <Image src={'/JBL.webp'} width={500} height={400} alt='cpg' className='absolute z-10' />
            <div className='w-[150px] h-[150px] sm:w-[400px] sm:h-[200px]  blur-3xl bg-white  rounded-full '></div>
        </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleBanner