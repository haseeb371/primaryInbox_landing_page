import { FalseSymbol, TrueSymbol } from "@/assets/icons";
import {
  Greentick,
  Instentlyicon,
  Primaryinboxicon,
  Redcrossicon,
  Smartleadsicon,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const EmailToolChart = () => {
  const Compititors = [
    {
      title: "Primary Inbox",
      source: Primaryinboxicon,
      color: "text-[#684FFF]",
    },
    {
      title: "Smartlead",
      source: Smartleadsicon,
      color: "text-[#000469]",
    },
    {
      title: "Instantly",
      source: Instentlyicon,
      color: "text-[#0081FF]",
    },
  ];

  const ChartDetails = [
    {
      title: "Winning Edge",
      color: "bg-[#05BD73]",
      row1: [
        "Guaranteed 99%+ Inbox Deliverability",
        "Yes — Industry Leading",
        "Reliable (~98%)",
        "Good",
      ],
      row2: ["Human-Verfied Follow-ups", "Personalized", false, false],
      row3: [
        "Unified Inbox Dashboard",
        "All-in-One Dashboard",
        "Partial",
        false,
      ],
    },
    {
      title: "Growth Areas",
      color: "bg-[#F4BB00]",
      row1: ["AI-Driven Personalization", "Advanced", "Limited", "Limited"],
      row2: ["CRM Integrations", "Deep Integrations", "Limited", "Limited"],
      row3: ["Mobile App", "Planned", true, true],
    },
    {
      title: "Future Ready",
      color: "bg-[#660BD4]",
      row1: [
        "Scalable Enterprise Support",
        "Enterprise Ready",
        "Limited",
        false,
      ],
      row2: [
        "Multi-Channel Outreach",
        "Forms, Whatsapp, Calendly",
        false,
        false,
      ],
      row3: [
        "Custom Reporting & Analytics",
        "Advanced Reporting",
        "Basic",
        "Basic",
      ],
    },
    {
      title: "Challenges",
      color: "bg-[#EE7214]",
      row1: [
        "Automated Warm-up & Reputation",
        "Robust Automation",
        "Automated",
        "Automated",
      ],
      row2: [
        "Dedicated Customer Support",
        "Award-Winning",
        "Standard",
        "Standard",
      ],
      row3: [
        "Decicated Onboarding & Training",
        "Personalized Onboarding",
        false,
        false,
      ],
    },
  ];

  return (
    <div className="w-full h-auto flex justify-start xl:justify-center overflow-auto">
      <div className="min-w-[1104px] 2xl:w-full min-h-[716px] rounded-3xl bg-[linear-gradient(90deg,_rgba(151,150,240,0.2)_0%,_rgba(251,199,212,0.2)_100%)] bg-white p-5 flex flex-col gap-6">
        {/* Chart Header */}
        <div className="w-full h-auto px-2 flex justify-between items-start gap-3">
          <div className="w-[302px] 2xl:hidden h-auto flex flex-col gap-1">
            <h3 className="font-semibold text-base leading-[18px] text-[#242536]">
              Email Marketing Comparison
            </h3>
            <p className="font-medium text-sm text-[#242536]">
              Compare features and support to find the best email marketing
              platform.
            </p>
          </div>
          <div className="flex-1 h-auto flex justify-between items-start gap-3">
            <div className="w-full hidden 2xl:flex h-auto flex-col gap-1 pr-10">
            <h3 className="font-semibold text-base leading-[18px] text-[#242536]">
              Email Marketing Comparison
            </h3>
            <p className="font-medium text-sm text-[#242536]">
              Compare features and support to find the best email marketing
              platform.
            </p>
          </div>
            {Compititors.map((v, i) => {
              return (
                <div className="w-full h-auto flex flex-col items-center gap-2">
                  <Image src={v.source} alt={v.title} className="size-[45]" />
                  <p
                    className={`font-semibold text-base leading-[18px] ${v.color}`}
                  >
                    {v.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Chart Content */}
        {ChartDetails.map((v, i) => {
          return (
            <div
              key={i}
              className={`w-full h-auto flex justify-start items-center gap-3`}
            >
              <div
                className={`w-6 h-[124px] rounded-[5px] px-0.5 ${v.color} flex justify-center items-center overflow-hidden`}
              >
                <p
                  className={`font-medium text-sm leading-5 text-white rotate-[270deg] whitespace-nowrap`}
                >
                  {v.title}
                </p>
              </div>
              {/* Rows */}
              <div className="flex-1 min-h-[108px]">
                {/* Row 1 */}
                <div
                  className={`w-full min-h-[36px] flex justify-between items-center bg-[#FFFFFF66] py-2 px-1 rounded-[8px]`}
                >
                  {v.row1.map((vone, ione) => {
                    return (
                      <div
                        key={ione}
                        className={`w-full h-full flex ${
                          ione === 0 ? "justify-start" : "justify-center"
                        } items-center`}
                      >
                        {vone === true ? (
                          <TrueSymbol />
                        ) : vone === false ? (
                          <FalseSymbol />
                        ) : (
                          <>
                            <p
                              className={`font-medium text-sm leading-5 whitespace-nowrap`}
                            >
                              {vone}
                            </p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Row 2 */}
                <div
                  className={`w-full min-h-[36px] flex justify-between items-center py-2 px-1 rounded-[8px]`}
                >
                  {v.row2.map((vone, ione) => {
                    return (
                      <div
                        key={ione}
                        className={`w-full h-full flex ${
                          ione === 0 ? "justify-start" : "justify-center"
                        } items-center`}
                      >
                        {vone === true ? (
                          <TrueSymbol />
                        ) : vone === false ? (
                          <FalseSymbol />
                        ) : (
                          <>
                            <p
                              className={`font-medium text-sm leading-5 whitespace-nowrap`}
                            >
                              {vone}
                            </p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* Row 3 */}
                <div
                  className={`w-full min-h-[36px] flex justify-between items-center bg-[#FFFFFF66] py-2 px-1 rounded-[8px]`}
                >
                  {v.row3.map((vone, ione) => {
                    return (
                      <div
                        key={ione}
                        className={`w-full h-full flex ${
                          ione === 0 ? "justify-start" : "justify-center"
                        } items-center`}
                      >
                        {vone === true ? (
                          <TrueSymbol />
                        ) : vone === false ? (
                          <FalseSymbol />
                        ) : (
                          <>
                            <p
                              className={`font-medium text-sm leading-5 whitespace-nowrap`}
                            >
                              {vone}
                            </p>
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailToolChart;
