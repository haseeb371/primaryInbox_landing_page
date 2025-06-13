import { BetaStars } from '@/assets/icons'
import React from 'react'

const BetaVersion = () => {
  return (
    <div className="p-1 rounded-full flex gap-1 text-[12px] w-fit text-white h-fit  pr-3 items-center leading-6 font-semibold bg-linear-to-r from-[#EC008C] to-[#FC6767]">
               <p className="px-[9px] uppercase rounded-full border-[1px] border-white/20 bg-white/5 ">beta</p>
   
               <p>Beta Version Release</p>
   
               <BetaStars />
             </div>
  )
}

export default BetaVersion