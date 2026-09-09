import React from 'react'
import HeroSection from '@/components/primary-inbox-ads/HeroSection'
import Why from '@/components/primary-inbox-ads/Why'
import EmailTools from '@/components/primary-inbox-ads/EmailTools'
import Reviews from '@/components/primary-inbox-ads/Reviews'
import Faq from '@/components/primary-inbox-ads/Faq'
import Newsletter from '@/components/primary-inbox-ads/Newsletter'
import CalendlyWidget from '@/components/primary-inbox-ads/Calendly'

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
