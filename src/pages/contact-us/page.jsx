import Faqs from "@/components/Faqs";
import OutReach from "@/components/OutReach";
import SecondaryHeroSection from "@/components/SecondaryHeroSection";
import React from "react";
import ContactSection from "./ContactSection";

const ContactUs = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="Contact Us"
        des="Your privacy is important for us as untitled. We respect your privacy regarding any information we may collect from you across our website"
      />
      <div className="w-full  py-10 md:py-20">

        <div className="container mx-auto ">

          <ContactSection/>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
