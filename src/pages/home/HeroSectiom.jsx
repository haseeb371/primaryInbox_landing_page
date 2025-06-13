"use client";

import { BgLines, GrowthIcon, MainBG } from "@/assets/images";
import BetaVersion from "@/components/BetaVersion";
import PrimaryButton from "@/components/buttons/PrimaryButtom";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HeroDashboard from "./HeroDashboard";

// Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const child = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const line1 = "Boost Your Outreach with".split("");
  const line2 = "AI-Powered".split("");
  const line3 = "Growth".split("");

  return (
    <div className="p-3 lg:h-screen  ">
      <div className="relative w-full h-full border-[3px] border-white rounded-[36px] overflow-hidden ">
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

        <div className="relative container h-full px-4 md:px-0  mx-auto flex flex-col gap-4 md:gap-6 z-50 items-center pt-[100px]">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <BetaVersion />
          </motion.div>

          <div className="text-center text-3xl  md:text-[66px] font-semibold">
            <motion.h1 variants={container} initial="hidden" animate="visible">
              {line1.map((letter, i) => (
                <motion.span key={i} variants={child} className="inline-block ">
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h1
              className="flex items-center justify-center"
              variants={container}
              initial="hidden"
              animate="visible"
              transition={{ delay: 2 }}
            >
              {line2.map((letter, i) => (
                <motion.span
                  key={`line2-${i}`}
                  variants={child}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}

              <motion.div
                variants={child}
                className="h-8 w-8 md:h-[60px] md:w-[60px]"
                aria-label="Growth Icon"
              >
                <Image
                  className="h-8 w-8 md:h-[60px] md:w-[60px]"
                  src={GrowthIcon}
                  alt="Growth Icon"
                />
              </motion.div>

              {line3.map((letter, i) => (
                <motion.span
                  key={`line3-${i}`}
                  variants={child}
                  className="inline-block text-primary "
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Fade-up animated paragraph */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className=" text-sm md:text-lg font-normal md:leading-8 text-center  md:max-w-[765px]"
          >
            Leverage AI to drive meaningful engagement, streamline your sales
            funnel, and consistently grow revenue—every conversation becomes a
            measurable win.
          </motion.p>

          {/* Fade-up animated button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            <PrimaryButton />
          </motion.div>

          <div className="w-full relative overflow-hidden h-full heroDashboardAni border-t-[3px] border-r-[3px] border-l-[3px] border-white rounded-tr-4xl  rounded-tl-4xl">
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
                  <div className="h-full">

            <HeroDashboard />
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// import { BgLines, GrowthIcon } from "@/assets/images";
// import BetaVersion from "@/components/BetaVersion";
// import PrimaryButton from "@/components/buttons/PrimaryButtom";
// import Image from "next/image";
// import React from "react";

// const HeroSectiom = () => {
//   return (
//     <div className="p-3 h-screen">
//       <div className="relative w-full h-full border-[3px] border-white rounded-[36px] overflow-hidden">
//         <div className="absolute   h-full rounded-[36px]   border-[#FFFFFF] inset-0 z-0">
//           <div className="absolute   inset-0 w-full h-full z-0">
//             <Image
//               src={BgLines}
//               alt="back ground line"
//               className="h-full opacity-35
//             object-cover"
//             />
//           </div>
//           <div className="absolute  inset-0 w-full h-full -z-20">
//             <video
//               src="/videos/BgVedio.mp4"
//               className="w-full h-full opacity-30 object-cover"
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="auto"
//             ></video>
//           </div>
//         </div>

//         <div className=" relative container h-full mx-5 md:mx-auto flex flex-col gap-6 z-50 items-center mt-[100px] ">
//           <BetaVersion />

//           <div className="text-center  text-[66px] font-semibold">
//             <h1 className="">Boost Your Outreach with</h1>
//             <h1 className="flex items-center justify-center ">
//               <span>AI-Powered</span>
//               <Image
//                 className="h-[60px] w-[60px]"
//                 src={GrowthIcon}
//                 alt="Growth Icon"
//               />
//               <span className="text-primary">Growth</span>
//             </h1>
//           </div>
//           <p className="text-lg font-normal leading-8 text-center max-w-[765px]">
//             Leverage AI to drive meaningful engagement, streamline your sales
//             funnel, and consistently grow revenue—every conversation becomes a
//             measurable win.
//           </p>

//           <PrimaryButton />

//           <div className="w-full h-full border-[3px] border-white rounded-4xl"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSectiom;
