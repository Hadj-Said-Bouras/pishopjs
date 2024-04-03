import Image from 'next/image'
import React from 'react'

function Featured() {
  return (
    <div className='h-full'>
        <div className='flex flex-row items-center ml-2 sm:ml-10 mt-20 gap-2'>
                    <div className='w-[20px] h-[60px] bg-red-500  rounded'></div>
                    <p className='text-red-400 font-bold'>This month:</p>
                    <h2 className='font-bold text-2xl ml-10 sm:mt-40 sm:ml-0 sm:absolute'>New Arrival</h2>
        </div> 
        <div className='flex flex-row justify-center mt-10 sm:mt-20'>
            <div className=' w-[300px] h-[420px] bg-black overflow-hidden relative hidden lg:flex'>
                <Image src={'/p1.jpg'} fill alt='p1' style={{filter: 'brightness(0.8)'}} className=''/>
                <div className='w-full h-full absolute top-60 text-white ml-2'>

                <p className='font-bold text-xl mb-4'>Camera Cannnon</p>
                <p>2030 camera just release <br /> with 8 mpx</p>
                <button className='underline mt-5 font-bold'>Shop Now <span className='visible'> {'>>'}</span></button>
                </div>
            </div>
            <div className='flex flex-col gap-5 sm:ml-10'>
                <div className='mx-auto w-full sm:w-[520px] h-[160px] sm:h-[200px] bg-black relative dark'>
                <Image src={'/p3.jpg'} fill alt='p1' style={{filter: 'brightness(0.8)'}} objectFit='cover'/>
                <div className='w-full h-full absolute top-[80px] text-white ml-2'>

                    <p className='font-bold text-xl mb-1'>Watch x8</p>
                    <p className='hidden sm:flex'>2030 camera just release <br /> with 8 mpx</p>
                    <button className='underline mt-1 font-bold'>Shop Now <span className='visible'> {'>>'}</span></button>
                </div>
                </div>
                <div className='flex flex-col sm:flex-row gap-5'>
                    <div className='w-[250px] h-[200px] bg-black relative'>
                    <Image src={'/p2.jpg'} fill alt='p1' style={{filter: 'brightness(0.8)'}}/>
                    <div className='w-full h-full absolute top-[80px] text-white ml-2'>

                        <p className='font-bold text-xl mb-1'>Camera Cannnon</p>
                        <p className='hidden sm:flex'>2030 camera just release <br /> with 8 mpx</p>
                        <button className='underline mt-1 font-bold'>Shop Now <span className='visible'> {'>>'}</span></button>
                    </div>
                    </div>
                    <div className='w-[250px] h-[200px] bg-black  relative'>
                    <Image src={'/p4.jpg'} fill alt='p1' style={{filter: 'brightness(0.8)'}}/>
                    <div className='w-full h-full absolute top-[80px] text-white ml-2'>

                        <p className='font-bold text-xl mb-1'>Manbaa</p>
                        <p className='hidden sm:flex'>2030 camera just release <br /> with 8 mpx</p>
                        <button className='underline mt-1 font-bold'>Shop Now <span className='visible'> {'>>'}</span></button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center mt-20 mb-20 '>
            <Image src={'/secure.webp'} width={600} height={400} alt='dd' />
        </div>
    </div>
  )
}

export default Featured