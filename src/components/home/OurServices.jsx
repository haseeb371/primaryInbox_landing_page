"use client";
import PrimaryHeading from "@/components/PrimaryHeading";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import Link from "next/link";
import React, { useState } from "react";

const cardData = [
  {
    icon: "/gifs/gif-accounts-filled.gif",
    iconHover: "/gifs/gif-accounts.gif",
    color: "#660BD4",
    title: "Email Accounts",
    description: (
      <>
        {" "}
        <PointerHighlight
          rectangleClassName="bg-[#660BD4]/20 dark:bg-[#660BD4]/20 border-[#660BD4]/50 dark:border-neutral-600 leading-loose"
          pointerClassName="text-[#660BD4] h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          Connect multiple email
        </PointerHighlight>{" "}
        accounts for large-scale outreach without worrying about limits or
        deliverability issues, enabling broader and more effective lead
        generation campaigns.
      </>
    ),
  },
  {
    icon: "/gifs/gif-channel-outreach-filled.gif",
    iconHover: "/gifs/gif-channel-outreach.gif",
    title: "Channel Outreach",
    color: "#F4BB00",
    description: (
      <>
        Engage potential customers on several channels, such as email, SMS, and
        social media platforms,{" "}
        <PointerHighlight
          rectangleClassName="bg-[#F4BB00]/20 dark:bg-[#F4BB00]/20 border-[#F4BB00]/50 dark:border-neutral-600 leading-loose"
          pointerClassName="text-[#F4BB00] h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          making it more likely
        </PointerHighlight>{" "}
        to catch attention and create genuine relationships with leads.
      </>
    ),
  },
  {
    icon: "/gifs/gif-warmups-filled.gif",
    iconHover: "/gifs/gif-warmups.gif",
    title: "AI Warmups",
    color: "#EE7214",
    description: (
      <>
        Improve email deliverability by{" "}
        <PointerHighlight
          rectangleClassName="bg-[#EE7214]/20 dark:bg-[#EE7214]/20 border-[#EE7214]/50 dark:border-neutral-600 leading-loose"
          pointerClassName="text-[#EE7214] h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          employing AI-based warmups
        </PointerHighlight>{" "}
        that simulate human-like sending patterns, enhancing sender reputation
        and ensuring your emails reach recipients' primary inboxes.
      </>
    ),
  },
  {
    icon: "/gifs/gif-unified-inbox-filled.gif",
    iconHover: "/gifs/icon-unified-inbox.gif",
    title: "Unified Inbox",
    color: "#2F0AFF",
    description: (
      <>
        Consolidate all communications across various channels into a single
        interface,{" "}
        <PointerHighlight
          rectangleClassName="bg-[#2F0AFF]/20 dark:bg-[#2F0AFF]/20 border-[#2F0AFF]/50 dark:border-neutral-600 leading-loose"
          pointerClassName="text-[#2F0AFF] h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          simplifying conversation
        </PointerHighlight>{" "}
        management and ensuring no message or lead gets missed.
      </>
    ),
  },
  {
    icon: "/gifs/gif-analytics-insights-filled.gif",
    iconHover: "/gifs/gif-analytics-insights.gif",
    title: "Analytics Insights",
    color: "#942AFE",
    description: (
      <>
        Gain actionable insights into campaign performance with detailed metrics
        and{" "}
        <PointerHighlight
          rectangleClassName="bg-[#942AFE]/20 dark:bg-[#942AFE]/20 border-[#942AFE]/50 dark:border-neutral-600 leading-loose"
          pointerClassName="text-[#942AFE] h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          A/B testing
        </PointerHighlight>{" "}
        to optimize email strategies and boost response and conversion rates.
      </>
    ),
  },
  {
    icon: "/gifs/gif-tool-integrations-filled.gif",
    iconHover: "/gifs/gif-tool-integrations.gif",
    title: "Tool Integrations",
    color: "#009FBD",
    description: (
      <>
        Integrate effortlessly with tools like HubSpot, Slack, and Zapier{" "}
        <PointerHighlight
          rectangleClassName="bg-[#009FBD]/20 dark:bg-[#009FBD]/20 border-[#009FBD]/50 dark:border-neutral-600 leading-loose"
          pointerClassName="text-[#009FBD] h-3 w-3"
          containerClassName="inline-block mr-1"
        >
          to streamline workflows
        </PointerHighlight>{" "}
        , automate tasks, and maintain a cohesive outreach strategy across
        platforms.
      </>
    ),
  },
];

const OurServices = () => {
  return (
    <div
      id="features"
      className="grid px-5 md:px-o gap-5 md:gap-20 py-10 md:py-20"
    >
      <PrimaryHeading
        dotText="Our Services"
        leftText="Outreach Solutions"
        rightText="Connect and manage all your outreach channels in one centralized platform. This allows you to focus on growing your business efficiently without juggling multiple tools."
      />

      <div className="w-full">
        <div className="container mx-auto  grid ">
          <div id="features" className="image-after">
            <div className=" text-secondaryClr  container  overflow-x-hidden mx-auto">
              <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                {cardData.map((card, index) => {
                  const [isHovered, setIsHovered] = useState(false);

                  const handleMouseEnter = () => setIsHovered(true);

                  const handleMouseLeave = () => setIsHovered(false);

                  return (
                    <div
                      data-aos="fade-left"
                      data-aos-delay={index * 300}
                      key={index}
                      className="shadow-custom-soft  rounded-secondary p-6 md:p-10  rounded-[28px] group relative overflow-hidden transition-all duration-500 bg-[#FFFFFF]"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`${
                          !isHovered && `bg-[${card.color}]`
                        } rounded-full w-10 md:w-[60px] h-10 md:h-[60px] cursor-pointer flex  items-center justify-center  mb-3 md:mb relative z-10`}
                      >
                        <img
                          src={
                            isHovered && card.iconHover
                              ? card.iconHover
                              : card.icon
                          }
                          alt={`icon ${card.title}`}
                          className={`object-cover rounded-full transition-all  w-10 md:w-[60px] h-10 md:h-[60px]   `}
                        />
                      </div>

                      <div
                        style={{ background: card.color }}
                        className="absolute rounded-full w-10 md:w-[60px] h-10 md:h-[60px] top-6 md:top-10 left-6 md:left-10 group-hover:scale-[40] transition-transform duration-1000"
                      ></div>

                      <h3 className="text-base font-medium  md:text-2xl md:font-semibold mb-1  z-10 relative transition-colors duration-500 group-hover:text-white">
                        {card.title}
                      </h3>
                      <div className="text-xs md:text-sm z-10 relative transition-colors duration-500 group-hover:text-white">
                        {card.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
