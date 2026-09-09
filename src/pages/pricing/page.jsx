import Faqs from '@/components/Faqs'
import OutReach from '@/components/OutReach'
import SecondaryHeroSection from '@/components/SecondaryHeroSection'
import React from 'react'
import Plan from '@/components/pricing/Plan'

const Pricing = () => {
  return (
    <div className='overflow-hidden'>

      <SecondaryHeroSection  title='Pricing' des='Explore pricing plans tailored to fit your business needs. Choose between monthly or yearly billing to get started.' />


<Plan/>

        {/* <Faqs/>
        <OutReach/> */}
    </div>
  )
}

export default Pricing