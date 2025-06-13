import {
  Growthyellow,
  Handshake,
  MainBG,
  Targetprimary,
  Instentlyicon,
  Primaryinboxicon,
  Smartleadsicon,
  Redcrossicon,
  Greentick,
} from "@/assets/images";
import PrimaryHeading from "@/components/PrimaryHeading";
import Image from "next/image";
import React from "react";

const iconarray = [
  {
    title: "Guaranteed Results",
    dec: "PrimaryInbox delivers measurable improvements in email reach and engagement, so you see real growth fast.",
    icon: Handshake,
  },
  {
    title: "Easy Integration",
    dec: "Get started quickly with PrimaryInbox’s simple onboarding and integrations that fit your existing workflow.",
    icon: Targetprimary,
  },
  {
    title: "Grow Without Limits",
    dec: "Whether you have 100 or 10,000 leads, PrimaryInbox scales effortlessly to meet your needs.",
    icon: Growthyellow,
  },
];

const comparisonData = [
  {
    label: "Guaranteed 99%+ Inbox Deliverability",
    values: ["Yes — Industry Leading", "Reliable (~98%)", "Good"],
  },
  {
    label: "Human-Verified Follow-ups",
    values: ["Personalized", false, false],
  },
  {
    label: "Unified Inbox Dashboard",
    values: ["All-in-One Dashboard", "Partial", false],
  },
  {
    label: "",
    values: ["", "", ""],
  },
  {
    label: "AI-Driven Personalization",
    values: ["Advanced", "Limited", "Limited"],
  },
  {
    label: "CRM Integrations",
    values: ["Deep Integrations", "Limited", "Limited"],
  },
  {
    label: "Mobile App",
    values: ["Planned", true, true],
  },
  {
    label: "",
    values: [],
  },
  {
    label: "Scalable Enterprise Support",
    values: ["Enterprise Ready", "Limited", false],
  },
  {
    label: "Multi-Channel Outreach (Beyond Email)",
    values: ["Forms, WhatsApp, Calendly", false, false],
  },
  {
    label: "Custom Reporting & Analytics",
    values: ["Advanced Reporting", "Basic", "Basic"],
  },
  {
    label: "",
    values: [],
  },
  {
    label: "Automated Warm-up & Reputation",
    values: ["Robust Automation", "Automated", "Automated"],
  },
  {
    label: "Dedicated Customer Support",
    values: ["Award-Winning", "Standard", "Standard"],
  },
  {
    label: "Dedicated Onboarding & Training",
    values: ["Personalized Onboarding", false, false],
  },
];

const FeatureShowdown = () => {
  return (
    <div className="w-full flex flex-col gap-20">

      <div className="relative container mx-auto p-5 flex bg-white flex-col gap-6 rounded-3xl bg-[linear-gradient(90deg,_rgba(151,150,240,0.2)_0%,_rgba(251,199,212,0.2)_100%)] overflow-hidden">
        <div className="relative z-10 overflow-x-auto">
          <div className="w-full text-sm text-left">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-white/10 backdrop-blur-sm border1">
              <div className="p-4">
                <p className="text-base font-semibold">
                  Email Marketing Comparison
                </p>
                <p className="text-sm font-medium max-w-[302px]">
                  Compare features and support to find the best email marketing
                  platform.
                </p>
              </div>
              <div className="p-4 text-center">
                <Image
                  src={Primaryinboxicon}
                  alt="Primary Inbox"
                  className="mx-auto w-[52] h-[52]"
                />
                <p className="font-semibold mt-2 text-base text-primary">Primary Inbox</p>
              </div>
              <div className="p-4 text-center">
                <Image
                  src={Smartleadsicon}
                  alt="Smartlead"
                  className="mx-auto w-[52] h-[52]"
                />
                <p className="font-semibold mt-2 text-base text-[#000469]">Smartlead</p>
              </div>
              <div className="p-4 text-center">
                <Image
                  src={Instentlyicon}
                  alt="Instantly"
                  className="mx-auto w-[52] h-[52]"
                />
                <p className="font-semibold mt-2 text-base text-[#0081FF]">Instantly</p>
              </div>
            </div>

            {/* Table Body */}
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-4  ${
                  idx % 2 === 0 ? "bg-white/50" : ""
                } backdrop-blur-sm rounded-[8px]`}
              >
                <div
                  className={`p-2 rounded-l-lg whitespace-nowrap  font-medium  w-full ${
                    row.label ? "" : "p-6"
                  }`}
                >
                  {row.label}
                </div>
                {row.values.map((val, i) => (
                  <div
                    key={i}
                    className={`p-2 text-center font-medium flex flex-col items-center justify-center ${
                      i === row.values.length - 1 ? "rounded-r-[8px]" : ""
                    }`}
                  >
                    {val === true ? (
                      <Image
                        src={Greentick}
                        alt="tick"
                        className="mx-auto w-4 h-4"
                      />
                    ) : val === false ? (
                      <Image
                        src={Redcrossicon}
                        alt="cross"
                        className="mx-auto w-4 h-4"
                      />
                    ) : (
                      <span>{val}</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {/* 🔼 Comparison Table Ends Here */}
      </div>

    </div>
  );
};

export default FeatureShowdown;
