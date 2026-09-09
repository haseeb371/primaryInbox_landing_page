import React from "react";
import LinearWithValueLabel from "./ProgressBar";
import { PlayIcon } from "@/assets/icons";
import HeroNumbers from "./HeroNumbers";
import LinearChartComponent from "./LinearChartComponent";
import Image from "next/image";
import { MainBG } from "@/assets/images";
import {
  ClickedIcon,
  OpenedIcon,
  OutcomesIcon,
  RepliedIcon,
  SentIcon,
} from "@/assets/icons";

const TopBar = ["Analytics", "Leads", "Sequences", "Subsequences"];

const data = [
  {
    date: "19 Apr",
    totalSent: 15,
    totalOpened: 12,
    totalClicked: 8,
    totalReplied: 3,
    positiveReplies: 2,
  },
  {
    date: "20 Apr",
    totalSent: 22,
    totalOpened: 18,
    totalClicked: 11,
    totalReplied: 5,
    positiveReplies: 3,
  },
  {
    date: "21 Apr",
    totalSent: 18,
    totalOpened: 14,
    totalClicked: 9,
    totalReplied: 4,
    positiveReplies: 2,
  },
  {
    date: "22 Apr",
    totalSent: 25,
    totalOpened: 20,
    totalClicked: 13,
    totalReplied: 6,
    positiveReplies: 4,
  },
  {
    date: "23 Apr",
    totalSent: 19,
    totalOpened: 15,
    totalClicked: 10,
    totalReplied: 3,
    positiveReplies: 1,
  },
  {
    date: "24 Apr",
    totalSent: 28,
    totalOpened: 22,
    totalClicked: 15,
    totalReplied: 7,
    positiveReplies: 5,
  },
  {
    date: "25 Apr",
    totalSent: 16,
    totalOpened: 13,
    totalClicked: 7,
    totalReplied: 2,
    positiveReplies: 1,
  },
  {
    date: "26 Apr",
    totalSent: 21,
    totalOpened: 17,
    totalClicked: 12,
    totalReplied: 5,
    positiveReplies: 3,
  },
  {
    date: "27 Apr",
    totalSent: 24,
    totalOpened: 19,
    totalClicked: 14,
    totalReplied: 6,
    positiveReplies: 4,
  },
  {
    date: "28 Apr",
    totalSent: 20,
    totalOpened: 16,
    totalClicked: 9,
    totalReplied: 4,
    positiveReplies: 2,
  },
];

const Numbers = [
  {
    status: "Sent",
    number: "13,675",
    value: 13675,
    icon: <SentIcon />,
    bg: "bg-[#2F0AFF]",
  },
  {
    status: "Opened",
    number: "9000",
    value: 9000,
    icon: <OpenedIcon />,
    bg: "bg-[#660BD4]",
  },
  {
    status: "clicked",
    number: "7500",
    value: 7500,
    icon: <ClickedIcon />,
    bg: "bg-[#F4BB00]",
  },
  {
    status: "Replied",
    number: "8590",
    value: 8590,
    icon: <RepliedIcon />,
    bg: "bg-[#009FBD]",
  },
  {
    status: "Outcomes",
    number: "$5600",
    value: 5600,
    icon: <OutcomesIcon />,
    bg: "bg-[#942AFE]",
  },
];

const RightSideHeroDashboard = () => {
  return (
    <div className=" relative py-5 md:py-3 px-5 h-full w-full flex flex-col gap-3">
      <div className="flex items-center justify-center md:hidden">

          <div className="p-[3px] w-fit flex border-[1px] border-white  rounded-full bg-white/40">
            {TopBar.map((v, i) => (
              <div
             data-aos='zoom-in'
              data-aos-delay={i * 200}
              key={i}
              className={` px-2 py-1 sm:px-5 sm:py-[5px] rounded-full text-[9px] sm:text-[12px] font-medium   ${
                i === 0 ? "bg-primary text-white" : ""
              }`}
              >
                {v}
              </div>
            ))}
          </div>
            </div>
      <div className="flex relative z-10 justify-between items-center w-full">
        <div>
          <p className="text-base font-semibold">Outreach Engine Campaign</p>
          <LinearWithValueLabel />
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-green-500 flex justify-center items-center">
          <PlayIcon />
        </div>
      </div>

      <div className="flex relative z-10 flex-col gap-2 lg:gap-5">
        <div className="w-full hidden  md:flex  justify-center items-center">
          <div className="p-[3px] flex border-[1px] border-white  rounded-full bg-white/40">
            {TopBar.map((v, i) => (
              <div
              data-aos='zoom-in'
              data-aos-delay={i * 200}
                key={i}
                className={`px-5 py-[5px] rounded-full text-[12px] font-medium   ${
                  i === 0 ? "bg-primary text-white" : ""
                }`}
              >
                {v}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <HeroNumbers Numbers={Numbers} />
        </div>

        <div className="rounded-2xl hidden md:block bg-[#FFFFFF45] border border-solid border-white shadow-[4px_20px_40px_0px_#00000008] pb-3 pt-1 lg:pt-3">
          <div className="w-full hidden  px-5  sm:flex gap-5 justify-end items-center">
            {Numbers.map((v, i) => (
              <div key={i} className="flex gap-1 items-center">
                <span
                  className={`w-[9px] h-[9px] rounded-full ${v.bg}`}
                ></span>
                <p className="text-[10px] font-medium ">{v.status}</p>
              </div>
            ))}
          </div>

          <LinearChartComponent data={data} selectedMetric="all" height={250} />
        </div>
      </div>
    </div>
  );
};

export default RightSideHeroDashboard;
