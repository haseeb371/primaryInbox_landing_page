import React from 'react'
import HeroSection from './HeroSection'
import Why from './Why'
import EmailTools from './EmailTools'
import Reviews from './Reviews'
import Faq from './Faq'
import Newsletter from './Newsletter'
import CalendlyWidget from './Calendly'

const PrimaryInboxAdsComponent = () => {
  return (
    <>
    <HeroSection />
    <CalendlyWidget />
    <Why />
    <EmailTools />
    <Reviews />
    <Faq />
    <Newsletter />
    </>
  )
}

export default PrimaryInboxAdsComponent
