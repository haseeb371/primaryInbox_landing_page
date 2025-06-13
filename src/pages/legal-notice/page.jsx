import SecondaryHeroSection from '@/components/SecondaryHeroSection';
import React from 'react'
import LegalnoticeSection2 from './LegalnoticeSection2';


const LegalNotice = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="legal notice"
        des="This legal notice sets the terms for using our website and services. We encourage you to read it carefully."

      />

      <div className="w-full py-10 md:py-20">
        <div className="container mx-auto grid gap-8 ">
        
           

           <LegalnoticeSection2/>

        </div>
          
      </div>
    </div>
  );
}

export default LegalNotice