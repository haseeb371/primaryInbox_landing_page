import { Aboutleftimage, Aboutmiddleimage, Aboutrightimage } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const ImagesSection = () => {
  return (
    <div className='py-20 grid grid-cols-3 gap-6'>

<div className=' h-[520px]  rounded-[20px] overflow-hidden'>
    <Image
    src={Aboutleftimage}
    alt='about us images section right side image'
    className='h-full object-cover'
    
    />
</div>

<div className='grid gap-6'>
    <div className='flex h-[175px]  flex-col justify-between text-white bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-[20px]  p-5 '>
        <p className='text-[28px] font-semibold'>90%</p>
        <p className='text-[28px] font-semibold'>Faster Response Times</p>
    </div>
    <div className=' h-[310px]  rounded-[20px] overflow-hidden'>

    <Image
    src={Aboutmiddleimage}
    alt='about us images section right side image'
    className='h-full object-cover'
    
    />
    </div>
</div>
<div className='grid gap-6'>
    <div className=' rounded-[20px] h-[310px] overflow-hidden'>

    <Image
    src={Aboutrightimage}
    alt='about us images section right side image'
    className='h-full object-cover'
    
    />
    </div>
    <div className='flex flex-col h-[175px]  justify-between text-white bg-gradient-to-r from-[#EC008C] to-[#FC6767] rounded-[20px]   p-5 '>
        <p className='text-[28px] font-semibold'>50%</p>
        <p className='text-[28px] font-semibold'>Faster Response Times</p>
    </div>
</div>


        


    </div>
  )
}

export default ImagesSection