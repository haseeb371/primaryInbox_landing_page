import {

  DashboardImage,
  MainBG,
  
} from "@/assets/images";
import PrimaryHeading from "@/components/PrimaryHeading";
import Image from "next/image";
import React from "react";
import DragableWarmUps from "./DragableWarmUps";

const WhatWeOffer = () => {
  return (
    <div className="w-full py-10  md:py-20 grid  gap-5 md:gap-20">
      <div className="px-5 md:px-0">
        <PrimaryHeading
          dotText="What We Offer"
          leftText="Revenue Growth"
          rightText="Track key metrics and optimize your campaigns with powerful analytics. Manage all your customer chats in one place to close deals faster and boost your team’s productivity."
        />
      </div>

      <div className="container px-4 md:px-0 mx-auto grid lg:grid-cols-2 justify-between gap-10">
        <div className="  relative border-[3px] rounded-3xl  border-white flex flex-col gap-[10px]">
          <div className="absolute  h-full rounded-4xl opacity-50  overflow-hidden inset-0 -z-10">
            <div>
              <Image
                src={MainBG}
                alt="background Image"
                layout="fill"
                objectFit="fill"
                priority={true}
              />
            </div>
          </div>
          <div className="  w-full flex flex-col gap-5 h-full">
            
          
          <div className=" grid gap-4 px-1 pt-1 md:pt-6 md:px-6 md:gap-1">
            <p className="text-2xl flex flex-col md:flex-row md:items-center  gap-1  font-semibold">
            Warm-Up Sending
              <span className=" text-xl w-fit flex items-center px-3 rounded-full bg-linear-to-r from-[#EC008C] to-[#FC6767] text-white">
               Build Reputation
              </span>
            </p>
            <p className="text-base font-medium leading-[22px]">
            Boost your sender reputation with high-volume warm-up, tracking, and automation tools. Perfect for mature accounts ready to scale and enhance email deliverability.
            </p>
          </div>
          <div className=" w-full min-h-[495px] md:h-full  ">
            <DragableWarmUps />
          </div>

          </div>
        </div>
        <div className="border-[3px] rounded-3xl four-color-gradient border-white flex flex-col overflow-hidden  gap-[10px]">
          <div className="m-6 grid gap-4 md:gap-1">
            <p className="text-2xl flex flex-col md:flex-row md:items-center  gap-1  font-semibold">
              Close Deals Fast with
              <span className=" text-xl w-fit flex items-center px-3 rounded-full bg-linear-to-r from-[#EC008C] to-[#FC6767] text-white">
                Master Inbox
              </span>
            </p>
            <p className="text-base font-medium leading-[22px] ">
              Handle all chats in one place with Master Inbox. AI Reply Labels
              sort messages for you, so you can focus on turning interest into
              closed deals.
            </p>
          </div>
          <div className="ml-6    overflow-hidden">
            <Image
              src={DashboardImage}
              alt="dashboard image"
              className="  h-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;
