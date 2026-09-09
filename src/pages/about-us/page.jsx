import SecondaryHeroSection from "@/components/SecondaryHeroSection";
import React from "react";
import CompanyValue from "@/components/about-us/CompanyValue";

const AboutUs = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="About Us"
        des="These terms outline the rules for using Primary Inbox, a service by 521 Products. By using it, you agree to the legal agreement. Acceptance is required to use the service."
      />

      <div className="w-full">

        <div className="container mx-auto ">

          <CompanyValue/>


        </div>

      </div>
    </div>
  );
};

export default AboutUs;
