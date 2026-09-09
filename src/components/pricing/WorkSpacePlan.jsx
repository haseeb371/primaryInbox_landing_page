'use client';

import { ArrowRight } from "@/assets/icons";
import {
  Layericon,
  MainBG,
  Settingicon,
  Thundericon,
  Greentick,
} from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// starter plan price
const starterMonthlyPrice = process.env.NEXT_PUBLIC_STARTER_MONTHLY_PRICE
const starterYearlyPrice = process.env.NEXT_PUBLIC_STARTER_YEARLY_PRICE
// premium plan price
const premiumMonthlyPrice = process.env.NEXT_PUBLIC_PREMIUM_MONTHLY_PRICE
const premiumYearlyPrice = process.env.NEXT_PUBLIC_PREMIUM_YEARLY_PRICE

const plans = [
  {
    icon: Layericon,
    title: "Workspace Starter",
    des: "Ideal for Individuals or small teams",
    monthlyPrice: starterMonthlyPrice,
    yearlyPrice: starterYearlyPrice,
    features: [
      "Unlimited ESP Email Warm Up",
      "DNS records test",
      "DNS records test",
    ],
    aos: "fade-up-right",
  },
  {
    icon: Thundericon,
    title: "Workspace Premium",
    des: "Perfect for growing businesses",
    monthlyPrice: premiumMonthlyPrice,
    yearlyPrice: premiumYearlyPrice,
    features: [
      "Unlimited ESP Email Warm Up",
      "DNS records test",
      "DNS records test",
    ],
    aos: "fade-up",
    popularPlan: true,
  },
  {
    icon: Settingicon,
    title: "Workspace Enterprise",
    des: "Designed for unique needs.",
    monthlyPrice: 199,
    yearlyPrice: 1999,
    features: [
      "Unlimited ESP Email Warm Up",
      "DNS records test",
      "DNS records test",
    ],
    aos: "fade-up-left",
  },
];

// ✅ Animated price component
const AnimatedPrice = ({ value }) => {
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 100 });
  const rounded = useTransform(springValue, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    motionValue.set(value);
  }, [value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span className="text-[40px] font-medium text-end">
      ${displayValue}
    </span>
  );
};

// Main pricing component
const WorkSpacePlan = ({monthly,setMonthly}) => {

  return (
    <div className="space-y-8 w-full">
    

      {/* Pricing Cards */}
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        {plans.map((plan, index) => {
          const price = monthly ? plan.monthlyPrice : plan.yearlyPrice;

          return (
            <div
              data-aos={plan.aos}
              key={index}
              className="w-full border-[3px] border-white rounded-4xl grid gap-6 p-5 relative"
            >
              <div className="absolute h-full rounded-4xl overflow-hidden inset-0 z-0">
                <Image
                  src={MainBG}
                  alt="background Image"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>

              <div className="relative z-10 flex flex-col gap-6">
                {plan.popularPlan && (
                  <div className="absolute -top-10 left-[30%] lg:left-[35%] z-20 w-[119px] text-center flex justify-center items-center text-white text-[12px] font-medium leading-[17px] h-[33px] rounded-full bg-gradient-to-r from-[#EC008C] to-[#FC6767]">
                    Most Popular
                  </div>
                )}

                <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden flex justify-center items-center">
                  <div className="absolute h-full inset-0 z-0">
                    <Image
                      src={MainBG}
                      alt="background Image"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                  <div className="z-10 shadow-[inset_0_4px_5px_0_rgba(0,0,0,0.1)] w-full h-full flex justify-center items-center">
                    <Image src={plan.icon} alt="start plan icon" />
                  </div>
                </div>

                <div>
                  <p className="text-2xl font-medium leading-8">{plan.title}</p>
                  <p className="text-sm font-normal leading-5">{plan.des}</p>
                </div>

                <div className="flex items-center h-[60px]  gap-2">
                  {plan.title==='Workspace Enterprise'?<p className="text-[24px]  font-medium text-end"> Contact Us</p>:<>
                  <AnimatedPrice value={price} />
                  <p className="text-sm font-normal">
                    / {monthly ? "month" : "year"}
                  </p>
                  </>
                  }
                </div>

                <div>
                  <button className="rounded-full hover:scale-105 duration-300 cursor-pointer w-full flex items-center justify-center bg-primary py-[14px] gap-2">
                    <p className="text-sm font-normal leading-5 text-white">
                      Start Your Free Trial
                    </p>
                    <ArrowRight height="18" width="18" color={"white"} />
                  </button>
                </div>

                <div>
                  <ul className="grid gap-3">
                    {plan.features.map((v, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-base font-medium leading-[22px]"
                      >
                        <Image src={Greentick} alt="Green tick" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkSpacePlan;

