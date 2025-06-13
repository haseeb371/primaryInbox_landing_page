import PrimaryHeading from "@/components/PrimaryHeading";
import React from "react";
import TestimonialCarousel from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div
      id="feedback"
      className="grid gap-10  md:gap-20  py-10 md:py-20"
    >
      <div className="px-5 md:px-0">

      <PrimaryHeading
        dotText="What Clients Say"
        leftText="Testimonial"
        rightText="Our clients praise the seamless experience and great results working with us. Their success shows our commitment to delivering tailored solutions that drive real growth."
        />
        </div>

      <div className="">
        <TestimonialCarousel />
      </div>
    </div>
  );
};

export default Testimonials;
