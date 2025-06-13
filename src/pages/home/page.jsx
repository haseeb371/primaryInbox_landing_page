import PrimaryHeading from '@/components/PrimaryHeading'
import React from 'react'
import HomeMarquee from './Marquee'
import OurServices from './OurServices'
import EmailSetup from './EmailSetup'
import Testimonials from './Testimonials'
import OutReach from '@/components/OutReach'
import Faqs from '../../components/Faqs'
import WhatWeOffer from './WhatWeOffer'
import HeroSectiom from './HeroSectiom'
import SimplifyWorkFlow from './SimplifyWorkFlow'
import Warmup from './Warmup'
import FeatureShowdown from './FeatureShowdown'

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