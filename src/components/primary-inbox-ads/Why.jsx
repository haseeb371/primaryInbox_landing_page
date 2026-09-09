import {
  BulbIcon,
  JahazIcon,
  NashanaIcon,
  WhyChooseIcon,
} from "@/assets/icons";
import PrimaryButton from "@/components/buttons/PrimaryButtom";
import React from "react";
import MarqueeDemo from "./Marquee";
import AdHeader from "./AdHeader";

const Why = () => {
  const points = [
    {
      icon: <JahazIcon />,
      title: "Inbox-First Deliverability",
      description:
        "We optimize every email to land in the primary inbox, not promotions or spam. With AI-powered warm-up systems and sending protocols, your outreach stays clean, compliant, and conversion-ready.",
    },
    {
      icon: <BulbIcon />,
      title: "Smart Outreach Automation",
      description:
        "Our platform scales your outreach with human-like personalization, auto-sequences, and multi-account management, so you can focus on closing, not chasing.",
    },
    {
      icon: <NashanaIcon />,
      title: "Smart Lead Insights",
      description:
        "Access real-time insights into open rates, replies, and lead engagement. Fine-tune your campaigns with precision and never fly blind again.",
    },
  ];

  return (
    <div className="w-full h-auto px-4 overflow-hidden">
      <div className="w-full h-auto">
        <div className="container mx-auto h-auto flex flex-col gap-10">
          <AdHeader
            icon={<WhyChooseIcon />}
            text={`Why choose us`}
            simpleTitle={`Why Choose `}
            coloredTitle={`Primary Inbox`}
            description={`Reach real inboxes, not spam. Our platform delivers smarter outreach with better results.`}
            btnText={`Book Free 30-min Meeting`}
          />
          <div data-aos="zoom-out-up" data-aos-duration="1100" className="w-full h-auto rounded-4xl py-6 bg-[linear-gradient(90deg,rgba(151,150,240,0.2)_0%,rgba(251,199,212,0.2)_100%)] flex flex-col gap-8">
            <div className="w-full h-auto px-6">
              <div data-aos="fade-up" data-aos-delay="700" className="w-full h-auto bg-[#FFFFFF33] rounded-4xl p-8 border-2 border-solid border-white flex justify-betweeen items-start flex-col lg:flex-row gap-5">
                {points.map((v, i) => {
                  return (
                    <div
                      key={i}
                      className="w-full h-auto flex justify-start items-center flex-col lg:flex-row gap-5"
                    >
                      <div className="w-full h-auto flex flex-col gap-[7px]">
                        <div className="bg-[linear-gradient(90deg,rgba(151,150,240,0.15)_0%,rgba(251,199,212,0.15)_100%)] size-[44.76px] rounded-full border-[2.4px] border-solid border-white flex justify-center items-center">
                          {v.icon}
                        </div>
                        <h3 className="font-semibold text-lg leading-[29.94px] text-[#242536]">
                          {v.title}
                        </h3>
                        <p className="font-medium text-xs text-[#242536]">
                          {v.description}
                        </p>
                      </div>
                      {i < 2 && (
                        <>
                        <div className="border-[0.5px] border-solid border-[#FFF8F8] hidden lg:block lg:h-[171px] 2xl:h-[120px]" />
                        <div className="border-[0.5px] border-solid border-[#FFF8F8] block lg:hidden w-full" />
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <MarqueeDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
