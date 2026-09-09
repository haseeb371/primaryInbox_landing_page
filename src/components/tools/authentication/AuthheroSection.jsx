'use client'
import { BgLines } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideSection from "./RightSideSection";

const AuthheroSection = () => {
    const [componentName,setcomponentName] = useState({Name:"MX Lookup",des:'Quickly verify the mail exchange servers for any domain to ensure reliable email delivery.'})
  return (
    <div className="w-full  h-screen p-3">
      <div className=" relative  w-full h-full border-[3px] overflow-hidden border-white rounded-[36px] ">
        <div className="absolute h-full rounded-[36px] border-[#FFFFFF] inset-0 z-0">
          <div className="absolute inset-0 w-full h-full z-0">
            <Image
              src={BgLines}
              alt="background line"
              className="h-full opacity-35 object-cover"
            />
          </div>
          <div className="absolute inset-0 w-full h-full -z-20">
            <video
              src="/videos/BgVedio.mp4"
              className="w-full h-full opacity-30 object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            ></video>
          </div>
        </div>

        <div className="container relative z-10 flex gap-8 mx-auto h-full pt-[108px] pb-8">
          <LeftSideBar componentName={componentName} setcomponentName={setcomponentName}/>

          <div className="w-full  ">


          <RightSideSection componentName={componentName}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthheroSection;
