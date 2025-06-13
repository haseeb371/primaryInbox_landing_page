import React from "react";

import Image from "next/image";
import {  OutReachBoxes  } from "@/assets/images";
import { ArrowRight } from "@/assets/icons";

const OutReach = () => {
  return (
    <div className="w-full h-auto overflow-hidden">
    <div className="py-20 m-3 relative gap-6 bg-linear-to-r flex flex-col items-center justify-center rounded-4xl from-[#8E2DE2] to-[#4A00E0]">
      <div className="absolute">
        <Image
          src={OutReachBoxes}
          alt="background boxes images "
          className="object-cover"
        />
      </div>
      <div className="flex  flex-col md:flex-row gap-6 items-center justify-center ">
        <p
          data-aos="zoom-out-up"
          className=" uppercase  text-3xl text-center lg:text-6xl font-semibold text-white"
        >
          Transform Your outreach
        </p>
       
      </div>
      <div data-aos="zoom-out-up"   className="max-w-[765px]">
        <p className="text-white text-sm lg:text-lg   leading-8 text-center ">
          Streamline workflows, optimize delivery, and supercharge
          engagement—all from a single, AI-powered dashboard. Make every email
          count, starting now.
        </p>
      </div>

      <div  className="relative">
        <button data-aos="zoom-out-up"   className=" cursor-pointer hover:scale-105 transition-all duration-300 flex whitespace-nowrap bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] items-center gap-1 border-[2px] border-white rounded-full py-[10px] px-10 text-white">
          Start Outreach Now
          <ArrowRight color={"white"} width="18" height="18" />
        </button>
     
        <div  className="absolute md:-left-20 top-2">
          <img data-aos="fade-right" data-aos-duration="3000"   src="/Arrow-White.gif" className="w-32 h-32 -rotate-[70deg] " />
        </div>
      </div>
    </div>
    </div>
  );
};

export default OutReach;
