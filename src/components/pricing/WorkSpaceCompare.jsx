"use client";
import Image from "next/image";
import { ArrowRight } from "@/assets/icons";
import { Greentick, MainBG, Primarycolorstar } from "@/assets/images";
import React, { useEffect, useState } from "react";

const featuresData = [
  {
    feature: "ESP Email Warm Up",
    starter: "Unlimited",
    premium: "Fixed",
    enterprises: "Fixed",
  },
  {
    feature: "Unlimited Basic Warm Up",
    starter: true,
    premium: true,
    enterprises: true,
  },
  {
    feature: "Active Leads",
    starter: "5,000",
    premium: "50,000",
    enterprises: "Unlimited",
  },
  {
    feature: "Emails per month",
    starter: "25,000",
    premium: "2,250,000",
    enterprises: "Unlimited",
  },
  {
    feature: "Centralized Master Inbox",
    starter: true,
    premium: true,
    enterprises: true,
  },
  {
    feature: "Detailed Analytics",
    starter: true,
    premium: true,
    enterprises: true,
  },
  {
    feature: "Dynamic Sequences",
    starter: true,
    premium: true,
    enterprises: true,
  },
  {
    feature: "Global BlockList",
    starter: true,
    premium: true,
    enterprises: true,
  },
  {
    feature: "Cold Email Infrastructure",
    starter: true,
    premium: true,
    enterprises: true,
  },
  {
    feature: "Active Support Levels",
    starter: "Normal",
    premium: "Standard",
    enterprises: "Premium",
  },
];

const WorkSpaceCompare = () => {
  const [collapse, setcollapse] = useState(true);

  useEffect(() => {
    console.log("this is collapse value", collapse);
  }, [collapse]);

  return (
    <div className="relative rounded-3xl border-[3px] border-white w-full overflow-hidden">
      {/* background */}
      <Image
        src={MainBG}
        alt="background"
        fill
        className="object-cover -z-10"
        priority
      />

      {/* header */}
      <div
        onClick={() => setcollapse(!collapse)}
        className="flex cursor-pointer justify-between items-center p-2 md:p-8 md:gap-6"
      >
        <div className="flex items-center md:gap-4">
          {/* star badge */}
          <div className=" min-w-[52px] min-h-[52px]   rounded-full overflow-hidden  flex justify-center items-center">
            <div
              className={`z-10  rounded-full shadow-[inset_0_4px_5px_0_rgba(0,0,0,0.1)] w-full h-full flex justify-center transition-all duration-300 items-center `}
            >
              <div
                className={
                  collapse
                    ? "transition-all duration-500 rotate-360"
                    : "transition-all duration-500 rotate-0"
                }
              >
                <Image
                  src={Primarycolorstar}
                  alt="oringe color star"
                  className="w-[52px] h-[52px]"
                />
              </div>
            </div>
          </div>

          {/* title */}
          <div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Compare Features By Workspace Plans
            </p>
            <p className="text-sm  font-medium leading-tight">
              Easily compare features across all available plans
            </p>
          </div>
        </div>

        {/* arrow */}
        <button
          className={`flex items-center justify-center min-w-11 min-h-11 bg-primary rounded-full  ${
            collapse
              ? "transition-all duration-500 rotate-90"
              : "transition-all duration-500  "
          } cursor-pointer`}
        >
          <ArrowRight color="#FFFFFF" />
        </button>
      </div>

      {/* table */}
      <div
        className={`overflow-x-auto px-5 transition-all duration-500  ${
          collapse ? "collapse-animation" : "collapse-animation-reverse"
        } scrollbar-hide`}
      >
        <table className="min-w-[600px] w-full text-sm font-medium">
          <thead>
            <tr className=" text-base font-semibold backdrop-blur-sm text-left">
              <th className="py-4 px-4 ">Features</th>
              <th className="py-4 px-4  text-center">Starter</th>
              <th className="py-4 px-4 text-center">Premium</th>
              <th className="py-4 px-4  text-center">Enterprises</th>
            </tr>
          </thead>
          <tbody>
            {featuresData.map((row, idx) => (
              <tr
              data-aos="zoom-out-left"
            data-aos-delay={`${idx * 300}`}
                key={row.feature}
                className={
                  idx % 2 === 0 ? "bg-white/50 rounded-[8px]" : "bg-white/0"
                }
              >
                <td className="py-4 px-4 whitespace-nowrap  rounded-l-[8px]">
                  {row.feature}
                </td>
                {["starter", "premium", "enterprises"].map((tier, i, arr) => (
                  <td

                    key={tier}
                    className={`py-4 px-4 text-center ${
                      i === arr.length - 1 ? "rounded-r-[8px]" : ""
                    }`}
                  >
                    {typeof row[tier] === "boolean" ? (
                      row[tier] ? (
                        <Image
                          src={Greentick}
                          alt="Available"
                          width={20}
                          height={20}
                          className="mx-auto"
                        />
                      ) : (
                        ""
                      )
                    ) : (
                      row[tier]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkSpaceCompare;
