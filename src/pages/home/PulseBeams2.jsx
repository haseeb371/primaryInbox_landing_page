"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  IconAi,
  IconChatgpt,
  IconDeepSeek,
  IconGrok,
  IconHubspot,
  IconSlack,
} from "@/assets/images";
import Image from "next/image";
import { PrimayInboxSVG } from "@/assets/icons";
import ReactParallaxTilt from "react-parallax-tilt";

const Circle = forwardRef((props, ref) => {
  const { className, children } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

function AnimatedBeamDemo() {
  const containerRef = useRef(null);
  const div1Ref = useRef(null);
  const div2Ref = useRef(null);
  const div3Ref = useRef(null);
  const div4Ref = useRef(null);
  const div5Ref = useRef(null);
  const div6Ref = useRef(null);
  const div7Ref = useRef(null);

  const content1Details = [
    {
      icon: IconSlack,
      title: "Slack",
      description:
        "Streamlines team communication and helps boost overall productivity. ",
    },
    {
      icon: IconAi,
      title: "Anthropic",
      description:
        "Leverages Anthropic AI to enhance messaging and deliver smarter content.",
    },
    {
      icon: IconChatgpt,
      title: "Chatgpt",
      description:
        "Automates workflows and enhances productivity using powerful AI tools.",
    },
  ];
  const content2Details = [
    {
      icon: IconHubspot,
      title: "Hubspot",
      description:
        "Boosts customer engagement and streamlines workflows with CRM tools.",
    },
    {
      icon: IconDeepSeek,
      title: "Deepseek",
      description:
        "Analyzes enterprise data and generates insights with intelligent automation.",
    },
    {
      icon: IconGrok,
      title: "Grok",
      description:
        "Integrates Grok to enhance emails with advanced AI-driven insights.",
    },
  ];

  return (
    <div
      className="relative flex h-auto w-full items-center justify-center overflow-hidden p-10 lg:py-20"
      ref={containerRef}
    >
      <div className="w-[320px] h-auto absolute top-1/2 -translate-y-1/2 left-6 hidden xl:flex flex-col gap-8">
        {content1Details.map((v, i) => {
          return (
            <ReactParallaxTilt key={i}>
              <div
                data-aos="fade-left"
                data-aos-delay={i * 150}
                key={i}
                className={`cursor-none w-full ${
                  i === 0 ? "rotate-[6deg]" : i === 1 ? "" : "rotate-[-6deg]"
                } h-auto rounded-[16px] bg-[#FFFFFF66] shadow-[1px_5px_20px_0px_#0000000F] py-3 px-3 flex justify-start items-center gap-2`}
              >
                <Image
                  width={52}
                  height={52}
                  src={v.icon}
                  alt="Icon"
                  className="size-[52px]"
                />
                <div className="w-full h-auto flex flex-col gap-0.5">
                  <p className="font-semibold text-base leading-[18px] text-[#242536]">
                    {v.title}
                  </p>
                  <p className="font-medium text-xs leading-[17px] text-[#242536]">
                    {v.description}
                  </p>
                </div>
              </div>
            </ReactParallaxTilt>
          );
        })}
      </div>
      <div className="w-[320px] h-auto absolute top-1/2 -translate-y-1/2 right-6 hidden xl:flex flex-col gap-8">
        {content2Details.map((v, i) => {
          return (
            <ReactParallaxTilt key={i}>
              <div
                data-aos="fade-right"
                data-aos-delay={i * 150}
                key={i}
                className={`cursor-none w-full ${
                  i === 0 ? "rotate-[-6deg]" : i === 1 ? "" : "rotate-[6deg]"
                } h-auto rounded-[16px] bg-[#FFFFFF66] shadow-[1px_5px_20px_0px_#0000000F] py-3 px-3 flex justify-start items-center gap-2 flex-row-reverse`}
              >
                <Image
                  width={52}
                  height={52}
                  src={v.icon}
                  alt="Icon"
                  className="size-[52px]"
                />
                <div className="w-full h-auto flex flex-col gap-0.5">
                  <p className="font-semibold text-base leading-[18px] text-[#242536]">
                    {v.title}
                  </p>
                  <p className="font-medium text-xs leading-[17px] text-[#242536]">
                    {v.description}
                  </p>
                </div>
              </div>
            </ReactParallaxTilt>
          );
        })}
      </div>
      <div className="flex size-full h-auto max-w-[530px] 2xl:max-w-3xl flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <span
            ref={div1Ref}
            className={`bg-white size-[52px] z-10 rounded-full border-2 border-solid border-white flex justify-center items-center bg-gradient-to-r from-[rgba(247,255,0,0.1)] to-[rgba(219,54,164,0.1)]`}
          >
            <Image
              src={IconSlack}
              width={36}
              height={36}
              alt="Icons"
              className="size-9"
            />
          </span>
          <span
            ref={div5Ref}
            className={`bg-white size-[52px] z-10 rounded-full border-2 border-solid border-white flex justify-center items-center bg-gradient-to-r from-[rgba(255,153,102,0.1)] to-[rgba(255,94,98,0.1)]`}
          >
            <Image
              src={IconHubspot}
              width={36}
              height={36}
              alt="Icons"
              className="size-9"
            />
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span
            ref={div2Ref}
            className={`bg-white size-[52px] z-10 rounded-full border-2 border-solid border-white flex justify-center items-center bg-gradient-to-r from-[rgba(201,214,255,0.15)] to-[rgba(226,226,226,0.15)]`}
          >
            <Image
              src={IconAi}
              width={36}
              height={36}
              alt="Icons"
              className="size-9"
            />
          </span>
          <Circle ref={div4Ref} className="size-16 scale-95">
            {/* <Icons.openai /> */}
            <span className="scale-110 border border-solid border-white rounded-full">
              <PrimayInboxSVG />
            </span>
          </Circle>
          <span
            ref={div6Ref}
            className={`bg-white size-[52px] z-10 rounded-full border-2 border-solid border-white flex justify-center items-center bg-gradient-to-r from-[rgba(86,204,242,0.1)] to-[rgba(47,128,237,0.1)]`}
          >
            <Image
              src={IconDeepSeek}
              width={36}
              height={36}
              alt="Icons"
              className="size-9"
            />
          </span>
        </div>
        <div className="flex flex-row items-center justify-between">
          <span
            ref={div3Ref}
            className={`bg-white size-[52px] z-10 rounded-full border-2 border-solid border-white flex justify-center items-center bg-gradient-to-r from-[rgba(0,176,155,0.1)] to-[rgba(150,201,61,0.1)]`}
          >
            <Image
              src={IconChatgpt}
              width={36}
              height={36}
              alt="Icons"
              className="size-9"
            />
          </span>
          <span
            ref={div7Ref}
            className={`bg-white size-[52px] z-10 rounded-full border-2 border-solid border-white flex justify-center items-center bg-gradient-to-r from-[rgba(211,204,227,0.2)] to-[rgba(233,228,240,0.2)]`}
          >
            <Image
              src={IconGrok}
              width={36}
              height={36}
              alt="Icons"
              className="size-9"
            />
          </span>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}



export default AnimatedBeamDemo