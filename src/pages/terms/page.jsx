import SecondaryHeroSection from '@/components/SecondaryHeroSection';
import React from 'react'
import TermsSection from './TermsSection';

const TermsCondition = () => {
    return (
    <div>
      <SecondaryHeroSection
        title="Terms & Conditions"
        des="These terms outline the rules for using Primary Inbox, a service by 521 Products. By using it, you agree to the legal agreement. Acceptance is required to use the service."
      />

      <div className="w-full  py-10 md:py-20">
        <div className="container mx-auto grid gap-8 ">
        
          

            <TermsSection/>

        </div>
          
      </div>
    </div>
  );
}

export default TermsCondition