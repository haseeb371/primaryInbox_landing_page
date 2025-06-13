import { ArrowRight } from '@/assets/icons'
import Link from 'next/link'
import React from 'react'

const PrimaryButton = ({Iconbg='bg-white',buttonBg ='bg-primary text-white pl-3',fill='', text='Get Started',link='',texthidden}) => {
  return (

    <Link href={link}
     className={`p-1  whitespace-nowrap backface-visibility-hidden transform-gpu transition-transform duration-300 w-fit h-11 text-sm cursor-pointer font-medium flex items-center gap-2 rounded-full ${buttonBg}`}
     >
      <p className={`${texthidden}`}>

        {text}
      </p>
        <div className={`w-16 h-9 rounded-full flex justify-center items-center ${Iconbg}`}>
            <ArrowRight color={fill} />
        </div>
    </Link>
  
  )
}

export default PrimaryButton