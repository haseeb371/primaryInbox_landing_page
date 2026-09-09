"use client";
import {
  ArrowRight,
} from "@/assets/icons";
import { Greentick, MainBG, OringeStar } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";

const featuresData = [
  {
    feature: "Basic Email Sending Warm-Up",
    tier0: true,
    tier1: true,
    tier2: true,
    tier3: true,
  },
  {
    feature: "Reputation Monitoring",
    tier0: false,
    tier1: true,
    tier2: true,
    tier3: true,
  },
  {
    feature: "High Volume Sending Support",
    tier0: false,
    tier1: false,
    tier2: false,
    tier3: true,
  },
  {
    feature: "Detailed Analytics & Reporting",
    tier0: false,
    tier1: false,
    tier2: true,
    tier3: true,
  },
];
const WarmupTierCompare = () => {
  const [collapse, setcollapse] = useState(true);
  return (
    <div className="relative rounded-3xl border-[3px] bg-gradient-to-r from-[#EE0979]/5 to-[#FF6A00]/5 border-white w-full ">
      {/* header */}
      <div
        onClick={() => setcollapse(!collapse)}
        className="flex justify-between cursor-pointer items-center p-2 md:p-8 md:gap-6"
      >
        <div className="flex items-center gap-1 md:gap-4">
          {/* star badge */}
          <div className=" min-w-[52px] min-h-[52px]   rounded-full overflow-hidden  flex justify-center items-center">
            <div
              className={`z-10  rounded-full shadow-[inset_0_4px_5px_0_rgba(0,0,0,0.1)] w-full h-full flex justify-center transition-all duration-300 items-center `}
            >
              <div
                className={
                  collapse
                    ? "transition-all duration-500 rotate-360 "
                    : "transition-all duration-500 rotate-0"
                }
              >
                <Image
                  src={OringeStar}
                  alt="oringe color star"
                  className="w-[52px] -h-[52px]"
                />
              </div>
            </div>
          </div>

          {/* title */}
          <div>
            <p className="text-xl md:text-2xl font-medium leading-tight">
              Compare Features By Warm-Up Tiers Plans
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
              : "transition-all duration-500 "
          } cursor-pointer`}
        >
          <ArrowRight color="#FFFFFF" />
        </button>
      </div>

      {/* table */}
      <div
        className={` overflow-auto px-5 transition-all duration-500   ${
          collapse ? "collapse2-animation" : "collapse2-animation-reverse"
        } scrollbar-hide`}
      >
        <table className="w-full  overflow-auto  text-sm font-medium">
          <thead>
            <tr className="text-base font-semibold backdrop-blur-sm text-left">
              <th className="py-4 px-4">Features</th>
              <th className="py-4 px-4 text-center whitespace-nowrap">
                Tier-0 <span className="text-[#FC5A3F]">(T0)</span>
              </th>
              <th className="py-4 px-4 text-center whitespace-nowrap">
                Tier-1 <span className="text-[#FC5A3F]">(T1)</span>
              </th>
              <th className="py-4 px-4 text-center whitespace-nowrap">
                Tier-2 <span className="text-[#FC5A3F]">(T2)</span>
              </th>
              <th className="py-4 px-4 text-center whitespace-nowrap">
                Tier-3 <span className="text-[#FC5A3F]">(T3)</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {featuresData.map((row, idx) => (
              <tr
                key={row.feature}
                className={
                  idx % 2 === 0
                    ? "bg-gradient-to-l from-[#EE0979]/8 to-[#FF6A00]/8 rounded-[8px]  overflow-hidden"
                    : "bg-white/0 overflow-hidden rounded-[8px]"
                }
              >
                <td
                  data-aos="zoom-out-left"
                  data-aos-delay={`${idx * 500}`}
                  className="py-4 px-4 whitespace-nowrap  rounded-l-[8px]"
                >
                  {row.feature}
                </td>
                {["tier0", "tier1", "tier2", "tier3"].map((tier, i, arr) => (
                  <td
                    data-aos="zoom-out-left"
                    
                    data-aos-delay={`${i * 500}`}
                    key={tier}
                    className={`py-4 px-4 text-center ${
                      i === arr.length - 1 ? "rounded-r-2xl" : ""
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
                        "-"
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

export default WarmupTierCompare;
