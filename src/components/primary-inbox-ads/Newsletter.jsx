import React from 'react'

const Newsletter = () => {
  return (
    <div className="p-3 h-auto pt-[60px] overflow-hidden">
      <div className="relative w-full h-auto rounded-[36px] flex flex-col gap-8 lg:gap-11 items-center overflow-hidden bg-[linear-gradient(90deg,rgba(151,150,240,0.2)_0%,rgba(251,199,212,0.2)_100%)] py-8 px-2 md:px-[64px] border-[3px] border-solid border-white">
        <div className='w-[96%] md:w-[618px] h-auto flex flex-col items-center gap-[20px] lg:gap-[30px]'>
            <div className='w-full h-auto flex flex-col gap-4 lg:gap-6 items-center'>
                <h3 className='font-semibold text-xl md:text-[26px] text-[#040406] text-center'>Step into the world of Sylphic ,where elegance meets purpose.</h3>
                <p className='font-normal text-lg text-[#242536] text-center'>Find inspiration. Build connections. Be part of something real.</p>
            </div>
            <div className='w-full md:w-fit h-auto flex justify-center items-center gap-[9px]'>
                <input type="text" placeholder='Enter your email' className='px-[15px] w-[400px] h-11 rounded-full border-[2px] border-solid border-white bg-[#FFFFFF99] font-medium text-xs leading-[17px] text-[#242536] placeholder:text-[#242536]' name="" id="" />
                <button className='w-[150px] md:w-[110px] h-11 cursor-pointer rounded-full bg-[#684FFF] flex justify-center items-center font-semibold text-sm leading-4 text-white'>Join us</button>
            </div>
        </div>
        <p className='font-medium text-base text-[#242536] text-center'>All rights reserved @ voltic Inc. 2025</p>
      </div>
    </div>
  )
}

export default Newsletter
