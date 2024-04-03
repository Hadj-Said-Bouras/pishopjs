"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Banner() {
    const images = [
        '/cph.jpg',
        '/ntb.jpg',
        '/techno.jpg',
    ]
    const delay = 2500;

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => setIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ), delay);

        return () => clearInterval(intervalId);
    }, [index, delay]);

    return (
        <div className=' flex mx-auto w-full sm:w-[892px] sm:h-[344px]'>
            <div className='my-0 mx-auto w-full mx-auto overflow-hidden '>
                
                <div className='whitespace-nowrap'>
                    <div className='h-[400px] w-full inline-block transition-transform ease-in-out' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                        {images.map((image, imageIndex) => (
                            <div key={imageIndex} className={`h-full w-full rounded inline-block`}>
                                <Image src={`${image}`} width={892} height={344} alt='00d' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='absolute flex justify-center  w-full left-0 lg:left-[180px] xl:left-0  hidden lg:flex sm:bottom-60 gap-10 '>
                    {images.map((_, indicatorIndex) => (
                        <div key={indicatorIndex} className={`h-[20px] w-[20px] border-white border-4 rounded-full pointer mt-[15px] mr-[7px] mb-0 ${index === indicatorIndex ? 'bg-red-400' : 'bg-white '}`}></div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Banner;