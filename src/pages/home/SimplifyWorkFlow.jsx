import { MainBG, Workflowimage } from "@/assets/images";
import PrimaryHeading from "@/components/PrimaryHeading";
import Image from "next/image";
import React from "react";
import  PulseBeams  from "./PulseBeams";
import  AnimatedBeamDemo  from "./PulseBeams2";

const SimplifyWorkFlow = () => {
  return (
    <div className="w-full py-10 md:py-20 px-5 md:px-0 flex flex-col gap-5 md:gap-20 ">
      <PrimaryHeading
        dotText="Integrate Seamlessly"
        leftText="Simplify Workflow"
        rightText="Bring all your information together to streamline operations and enhance productivity. Automate workflows and ensure seamless communication across your team every day."
      />

      <div className=" relative container mx-auto py-10 rounded-4xl border-[3px] border-white overflow-hidden ">
          <div className="absolute   h-full  inset-0 z-0">
            <div className="  object-cover ">
              <Image
                src={MainBG}
                alt="background Image"
                objectFit="cover h-full"
                fill
                priority={true}
              />
            </div>
          </div>

          <div className=" relative z-10">
            <AnimatedBeamDemo />
          </div>
      </div>
    </div>
  );
};

export default SimplifyWorkFlow;
