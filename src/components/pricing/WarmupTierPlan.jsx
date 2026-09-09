'use client';

import { ArrowRight } from "@/assets/icons";
import { FulFireicon } from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

// for t1 price
const T1MonthlyPrice = process.env.NEXT_PUBLIC_T1_MONTHLY_PRICE
const T1YearlyPrice = process.env.NEXT_PUBLIC_T1_YEARLY_PRICE
// for t2 price
const T2MonthlyPrice = process.env.NEXT_PUBLIC_T2_MONTHLY_PRICE
const T2YearlyPrice = process.env.NEXT_PUBLIC_T2_YEARLY_PRICE
// for t1 price
const T3MonthlyPrice = process.env.NEXT_PUBLIC_T3_MONTHLY_PRICE
const T3YearlyPrice = process.env.NEXT_PUBLIC_T3_YEARLY_PRICE

//  Animated price component

const plans = [
  {
    title: "Warm-Up Tier-0",
    des: "Basic sending to start new accounts.",
    monthlyPrice: "0",
    yearlyPrice: "0",
  },
  {
    title: "Warm-Up Tier-1",
    des: "Basic warm-up with limited features",
    monthlyPrice: T1MonthlyPrice,
    yearlyPrice: T1YearlyPrice,
  },
  {
    title: "Warm-Up Tier-2",
    des: "Moderate warm-up with enhanced reputation tracking",
    monthlyPrice: T2MonthlyPrice,
    yearlyPrice: T2YearlyPrice,
  },
  {
    title: "Warm-Up Tier-3",
    des: "Advanced warm-up for high volume senders",
    monthlyPrice: T3MonthlyPrice,
    yearlyPrice: T3YearlyPrice,
  },
];
const AnimatedPrice = ({ value }) => {
  const motionValue = useMotionValue(Number(value));
  const springValue = useSpring(motionValue, { damping: 20, stiffness: 100 });
  const rounded = useTransform(springValue, (v) => Math.round(v));
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    motionValue.set(Number(value));
  }, [value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplayValue(v);
    });
    return () => unsubscribe();
  }, [rounded]);

  return (
    <span className="text-[40px] font-medium text-end">${displayValue}</span>
  );
};

const WarmupTierPlan = ({ monthly, setmonthly }) => {
  return (
    <div id="warmupPlan" className="flex flex-col lg:flex-row gap-8 w-full">
      {plans.map((plan, index) => {
        const price = monthly ? plan.monthlyPrice : plan.yearlyPrice;

        return (
          <div
            data-aos="zoom-out-left"
            data-aos-offset='200'
            data-aos-delay={`${index * 300}`}
            key={index}
            className="w-full border-[3px] border-white bg-gradient-to-r from-[#EE0979]/5 to-[#FF6A00]/5 rounded-4xl grid gap-6 p-5 relative"
          >
            <div className="relative z-10 grid gap-6">
              <div className="w-[52px] h-[52px] rounded-full overflow-hidden flex justify-center items-center">
                <Image src={FulFireicon} alt="fire Icon" />
              </div>

              <div>
                <p className="text-2xl font-medium leading-8">
                  {plan.title}{" "}
                  <span className="text-[#FC5A3F]">(T{index})</span>
                </p>
                <p className="text-sm font-normal leading-5">{plan.des}</p>
              </div>

              <div className="flex items-center gap-2">
                <AnimatedPrice value={price} />
                <p className="text-sm font-normal">
                  / {monthly ? "month" : "year"}
                </p>
              </div>

              <div>
                <button className="rounded-full cursor-pointer hover:scale-105 duration-200 w-full flex items-center justify-center bg-primary py-[14px] gap-2">
                  <p className="text-sm font-normal leading-5 text-white">
                    Start Your Free Trial
                  </p>
                  <ArrowRight height="18" width="18" color={"white"} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WarmupTierPlan;