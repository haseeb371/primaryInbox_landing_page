import PrimaryHeading from '@/components/PrimaryHeading'
import React from 'react'
import HomeMarquee from '@/components/home/Marquee'
import OurServices from '@/components/home/OurServices'
import EmailSetup from '@/components/home/EmailSetup'
import Testimonials from '@/components/home/Testimonials'
import OutReach from '@/components/OutReach'
import Faqs from '../../components/Faqs'
import WhatWeOffer from '@/components/home/WhatWeOffer'
import HeroSectiom from '@/components/home/HeroSectiom'
import SimplifyWorkFlow from '@/components/home/SimplifyWorkFlow'
import Warmup from '@/components/home/Warmup'
import FeatureShowdown from '@/components/home/FeatureShowdown'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <HeroSectiom/>
       <HomeMarquee/>
       <OurServices/>
       <WhatWeOffer/>
       <EmailSetup/>
       <SimplifyWorkFlow/>
       <Warmup/>
       {/* <FeatureShowdown/> */}
       <Testimonials/>
       

    </div>
  )
}

export default HomePage