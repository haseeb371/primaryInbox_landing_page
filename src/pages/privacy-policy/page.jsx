import { MainBG } from "@/assets/images";
import SecondaryHeroSection from "@/components/SecondaryHeroSection";
import Image from "next/image";
import React from "react";
import Faqs from "@/components/Faqs";
import OutReach from "@/components/OutReach";
import NewPolicySection from "./NewPolicySection";

const PrivacyPolicy = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="Privacy Policy"
        des="Your privacy is important for us as untitled. We respect your privacy regarding any information we may collect from you across our website"
      />

      <div className="w-full py-10 md:py-20">
        <div className="container mx-auto grid gap-8 ">
        
           

            <NewPolicySection/>

        </div>
          
      </div>
    </div>
  );
};

export default PrivacyPolicy;
