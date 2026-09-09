"use client";

import React, { useState } from "react";
import WorkSpacePlan from "./WorkSpacePlan";
import WorkSpaceCompare from "./WorkSpaceCompare";
import  WarmupTierPlan  from "./WarmupTierPlan";
import WarmupTierCompare from "./WarmupTierCompare";
const Plan = () => {
  const [monthly, setmonthly] = useState(true);
  const [monthly2, setmonthly2] = useState(true);

  const handleToggle = () => {
    setmonthly((prev) => !prev);
  };
  const handleToggle2 = () => {
    setmonthly2((prev) => !prev);
  };
  return (
    <div className="w-full py-8">
      <div className="container px-5 lg:px-0 mx-auto flex flex-col justify-center items-center gap-8">
        <div
          data-aos="zoom-in"
          className=" relative bg-white rounded-full py-2 px-4 flex w-fit items-center gap-[13px]"
        >
          <p className="text-sm font-semibold">Monthly</p>

          <label className="switch">
            <input type="checkbox" checked={!monthly} onChange={handleToggle} />
            <span className="slider"></span>
          </label>
          <p className="text-sm font-semibold">Yearly</p>
          <div className=" absolute  top-3 md:top-0 -right-5 md:-right-14 rotate-[70deg] md:rotate-45 scale-x-[-1] ">
            <img src="/Arrow-2.gif" alt="arrow gif" className="w-20 h-20  " />
          </div>
        </div>
        <WorkSpacePlan monthly={monthly} setmonthly={setmonthly} />
        <WorkSpaceCompare />
        <div
          data-aos="zoom-in"
          className=" relative bg-white rounded-full py-2 px-4 flex w-fit items-center gap-[13px]"
        >
          <p className="text-sm font-semibold">Monthly</p>

          <label className="switch">
            <input
              type="checkbox"
              checked={!monthly2}
              onChange={handleToggle2}
            />
            <span className="slider"></span>
          </label>
          <p className="text-sm font-semibold">Yearly</p>
          <div className=" absolute  top-3 md:top-0 -right-5 md:-right-14 rotate-[70deg] md:rotate-45 scale-x-[-1] ">
            <img src="/Arrow-2.gif" alt="arrow gif" className="w-20 h-20  " />
          </div>
        </div>
        <WarmupTierPlan monthly={monthly2} setmonthly={setmonthly2} />
        <WarmupTierCompare />
      </div>
    </div>
  );
};

export default Plan;
