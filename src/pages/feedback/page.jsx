import SecondaryHeroSection from "@/components/SecondaryHeroSection";
import React from "react";

import FeedbackSection from "./FeedbackSection";

const Feedback = () => {
  return (
    <div>
      <SecondaryHeroSection
        title="Feedback"
        des="Your feedback helps us grow and serve you better. Let us know what we’re doing right or how we can improve."
      />

      <div className="w-full  py-10 md:py-20">
        <div className="container mx-auto ">
          <FeedbackSection />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
