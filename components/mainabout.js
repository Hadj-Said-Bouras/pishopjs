import Image from 'next/image'
import React from 'react'

function MainAbout() {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
        <div className="flex flex-col w-full lg:w-3/6 p-5 gap-2 items-center lg:items-start">
            <h1 className="font-bold text-6xl text-black text-center lg:text-left">Our Story</h1>
            <Image src={'/about.avif'} width={500} height={500} alt='pw2' className="sm:block lg:hidden" />
            <p className="text-lg text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nesciunt neque aliquid molestiae laudantium similique, suscipit maxime itaque unde quae delectus! Quibusdam ullam voluptate vel dicta, repudiandae autem hic nemo quas blanditiis veritatis quo qui, accusantium ratione, rerum expedita earum assumenda magni sint nesciunt. Laudantium quod enim alias excepturi nostrum?
            </p>
        </div>
        <div className="hidden lg:flex lg:w-[800px] lg:h-[500px] mt-20 mb-20">
        <Image src={'/about.avif'} width={800} height={600} alt='cph' />
        </div>
    </div>
  )
}

export default MainAbout