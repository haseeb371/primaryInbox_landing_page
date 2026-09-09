'use client';

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PrimaryHeading from "@/components/PrimaryHeading";
import { Fireaboutus, Groupmembers, TargetFill } from "@/assets/images";
import { useMotionValue, useSpring, useInView, animate } from "framer-motion";

const numbers = [
  {
    title: "20000+",
    des: "Clients Worldwide",
    icon: Groupmembers,
  },
  {
    title: "10M+",
    des: "Emails Delivered Daily",
    icon: TargetFill,
  },
  {
    title: "150K+",
    des: "Accounts in Warm-Up Pool",
    icon: Fireaboutus,
  },
];

// Parse string like "10M+" or "150K+" to a number (e.g. 10,000,000 or 150,000)
const parseValue = (str) => {
  if (!str) return 0;
  let cleaned = str.replace("+", "").toUpperCase();

  if (cleaned.endsWith("M")) {
    return parseFloat(cleaned) * 1_000_000;
  }
  if (cleaned.endsWith("K")) {
    return parseFloat(cleaned) * 1_000;
  }
  return parseFloat(cleaned);
};

// Format number back to string with K or M suffix + "+"
const formatValue = (num, original) => {
  if (!original) return Math.round(num).toString();

  if (original.includes("M")) {
    return (num / 1_000_000).toFixed(1) + "M+";
  }
  if (original.includes("K")) {
    return Math.round(num / 1_000) + "K+";
  }
  return Math.round(num) + "+";
};

const AnimatedNumber = ({ target, original }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, target, {
        duration: 2,
        ease: [0.42, 0, 0.58, 1], // ease-in-out
      });
      return controls.stop;
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (v) => {
      setDisplayValue(v);
    });
    return () => unsubscribe();
  }, [springValue]);

  return (
    <p ref={ref} className="text-[40px] font-medium">
      {formatValue(displayValue, original)}
    </p>
  );
};

const CompanyValue = () => {
  return (
    <div className="py-10 px-5 md:px-0 md:py-20 flex flex-col gap-5 md:gap-20 overflow-hidden">
      <PrimaryHeading
        dotText="Trusted Solutions"
        leftText="Our Company Values"
        rightText="Join thousands boosting their email campaigns daily. Elevate your cold emailing with our intuitive platform, personalized workflows, and support to ensure your messages hit the mark."
      />

      <div className="flex flex-col gap-8">
        <div className="bg-white rounded-3xl p-3 md:p-6 flex flex-col gap-3">
          <p  data-aos="slide-right" data-aos-easing='ease-out'  className="text-xl font-medium">Why Choose Us</p>
          <div className="flex flex-col md:flex-row gap-10">
            <div data-aos="fade-up" className="relative overflow-hidden rounded-3xl bg-gradient-to-r text-white from-[#EC008C]/95 to-[#FC6767]/95 flex flex-col gap-3 md:gap-6 p-3 md:p-6">
              <p data-aos="slide-right"  data-aos-easing='ease-out' data-aos-duration='2000' className="text-base leading-7 ">
                Reliable Cold Emailing, Made Simple
              </p>
              <p data-aos="slide-right"  data-aos-easing='ease-out' data-aos-duration='2000' className="text-[32px] leading-10 font-semibold ">
                Trusted By Thousands <br /> For Results
              </p>
              <p data-aos="slide-right" data-aos-offset="0"  data-aos-easing='ease-out' data-aos-duration='2000' className="text-base leading-[22px] font-medium ">
                Automate your campaigns with confidence and deliver personalized
                emails that get real responses.
              </p>
              <div
                data-aos="fade-up-left"
                // data-aos-delay='3000'
                className="absolute bg-white/20 p-[50px] rounded-full -bottom-20 -right-24"
              >
                <div
                  data-aos="fade-up-left"
                  className="p-[50px] rounded-full bg-white/30"
                >
                  <div
                    data-aos="fade-up-left"
                    className="p-[50px] bg-white/40 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden gap-5 md-gap-0 justify-between max-w-[500px]">
              <p  data-aos="slide-left" data-aos-easing='ease-out'  className="text-base leading-7">
                To simplify and enhance customer relationship management, <br />{" "}
                delivering value-driven solutions that inspire success at every
                touchpoint.
              </p>
              <p  data-aos="slide-left"   data-aos-offset="0" data-aos-easing='ease-out' className="text-base leading-7 ">
                Want to learn more? Let us help you redefine how you manage and
                grow your customer from their relationships.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-between">
          {numbers.map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] py-6 px-3 flex justify-between items-center w-full"
            >
              <div>
                {/* Animated Number here */}
                <AnimatedNumber target={parseValue(v.title)} original={v.title} />
                <p className="text-[16px] font-medium flex items-center gap-1">
                  <span className="w-2 h-2 bg-black rounded-full " />
                  {v.des}
                </p>
              </div>
              <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-gradient-to-r from-[#EE0979]/10 to-[#FF6A00]/10">
                <Image src={v.icon} alt={`${v.des} icon`} className="w-7 h-7" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyValue;


// import { Fireaboutus, Groupmembers, TargetFill } from "@/assets/images";
// import PrimaryHeading from "@/components/PrimaryHeading";
// import Image from "next/image";
// import React from "react";

// const numbers = [
//   {
//     title: "20000+",
//     des: "Clients Worldwide",
//     icon: Groupmembers,
//   },
//   {
//     title: "10M+",
//     des: "Emails Delivered Daily",
//     icon: TargetFill,
//   },
//   {
//     title: "150K+",
//     des: "Accounts in Warm-Up Pool",
//     icon: Fireaboutus,
//   },
// ];
// const CompanyValue = () => {
//   return (
//     <div className="py-20 flex flex-col gap-20">
//       <PrimaryHeading
//         dotText="Trusted Solutions"
//         leftText="Our Company Values"
//         rightText="Join thousands boosting their email campaigns daily. Elevate your cold emailing with our intuitive platform, personalized workflows, and support to ensure your messages hit the mark."
//       />

//       <div className="flex flex-col gap-8">
//         <div className="bg-white rounded-3xl p-6 flex flex-col gap-3">
//           <p className="text-xl font-medium">Why Choose Us</p>
//           <div className="flex  gap-10">
//             <div className=" relative overflow-hidden rounded-3xl bg-gradient-to-r  text-white from-[#EC008C]/95 to-[#FC6767]/95 flex flex-col gap-6 p-6">
//               <p className="text-base leading-7 ">
//                 Reliable Cold Emailing, Made Simple
//               </p>
//               <p className="text-[32px]  leading-10 font-semibold ">
//                 Trusted By Thousands <br /> For Results
//               </p>
//               <p className="text-base  leading-[22px] font-medium ">
//                 Automate your campaigns with confidence and deliver personalized
//                 emails that get real responses.
//               </p>
//               <div data-aos="fade-up-left" className=" absolute bg-white/20 p-[50px] rounded-full -bottom-20 -right-24">
//                 <div data-aos="fade-up-left" className="p-[50px] rounded-full bg-white/30">
//                   <div data-aos="fade-up-left" className="p-[50px] bg-white/40 rounded-full"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col justify-between max-w-[500px]  ">
//               <p className="text-base leading-7">
//                 To simplify and enhance customer relationship management, <br />{" "}
//                 delivering value-driven solutions that inspire success at every
//                 touchpoint.
//               </p>
//               <p className="text-base leading-7 ">
//                 Want to learn more? Let us help you redefine howyou manage and
//                 grow your customer from therelationships.
//               </p>
//             </div>
//           </div>
//         </div>

//         <div className="flex gap-8 w-full justify-between">
//           {numbers.map((v, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-[20px] py-6 px-3 flex justify-between items-center w-full"
//             >
//               <div>
//                 <p className="text-[40px] font-medium">{v.title}</p>
//                 <p className="text-[16px] font-medium flex items-center gap-1">
//                   <span className="w-2 h-2 bg-black rounded-full " />
//                   {v.des}
//                 </p>
//               </div>
//               <div className="w-[45px] h-[45px] flex justify-center items-center rounded-full bg-gradient-to-r from-[#EE0979]/10 to-[#FF6A00]/10">
//                 <Image src={v.icon} alt="group icon" className="w-7 h-7" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyValue;
