"use client";

import {
  BgLines,
  IconAi,
  IconChatgpt,
  IconDeepSeek,
  IconGrok,
  IconHubspot,
  IconSlack,
  Structure1,
  Structure1Logos,
} from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TextAnimate } from "@/components/magicui/text-animate";
import ReactParallaxTilt from "react-parallax-tilt";

const Icons = [
  {
    source: IconHubspot,
    bgColor:
      "bg-gradient-to-r from-[rgba(255,153,102,0.1)] to-[rgba(255,94,98,0.1)]",
    positionValues: "top-[34%] left-[12.5%]",
  },
  {
    source: IconAi,
    bgColor:
      "bg-gradient-to-r from-[rgba(201,214,255,0.15)] to-[rgba(226,226,226,0.15)]",
    positionValues: "bottom-[30%] left-[19.6%]",
  },
  {
    source: IconDeepSeek,
    bgColor:
      "bg-gradient-to-r from-[rgba(86,204,242,0.1)] to-[rgba(47,128,237,0.1)]",
    positionValues: "bottom-[30%] right-[19.4%]",
  },
  {
    source: IconChatgpt,
    bgColor:
      "bg-gradient-to-r from-[rgba(0,176,155,0.1)] to-[rgba(150,201,61,0.1)]",
    positionValues: "top-[34%] right-[12.4%]",
  },
  {
    source: IconGrok,
    bgColor:
      "bg-gradient-to-r from-[rgba(211,204,227,0.2)] to-[rgba(233,228,240,0.2)]",
    positionValues: "bottom-[5.3%] right-1/2 translate-x-1/2",
  },
];

const HeroSection = () => {
  const [offsets, setOffsets] = useState(() =>
    Icons.map(() => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const updateOffsets = () => {
      setOffsets((prev) =>
        prev.map(() => {
          const maxOffset = 8;
          const minOffset = 5;

          const x =
            (Math.random() * (maxOffset - minOffset) + minOffset) *
            (Math.random() < 0.5 ? -1 : 1);
          const y =
            (Math.random() * (maxOffset - minOffset) + minOffset) *
            (Math.random() < 0.5 ? -1 : 1);
          return { x, y };
        })
      );
    };

    updateOffsets(); // initialize immediately

    const interval = setInterval(updateOffsets, 1000); // smoother timing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 h-screen max-h-[1100px]">
      <div className="relative w-full h-full rounded-4xl flex justify-center items-center overflow-hidden bg-[linear-gradient(90deg,rgba(151,150,240,0.2)_0%,rgba(251,199,212,0.2)_100%)] py-8">
        <div className="w-full h-full absolute top-0 left-0">
          <Image
            width={2000}
            height={2000}
            alt="Structure"
            src={Structure1}
            className="w-full h-full"
          />
        </div>
        {Icons.map((v, i) => {
          const offset = offsets[i] || { x: 0, y: 0 };
          return (
            <span
              key={i}
              className={`absolute z-50 bg-white ${v.positionValues} size-[52px] rounded-full border-2 border-solid border-white ${v.bgColor} flex justify-center items-center`}
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 1s ease-in-out", // longer + easing = smoother
              }}
            >
              <ReactParallaxTilt>

              <Image
                src={v.source}
                width={36}
                height={36}
                alt="Icons"
                className="size-9"
                />
                </ReactParallaxTilt>
            </span>
          );
        })}
        <div className="w-fit h-auto flex flex-col items-center gap-3 lg:gap-6 z-[100]">
          <div className="w-fit h-auto flex flex-col items-center">
            <h1 className="font-semibold text-3xl md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[134px] leading-9 md:leading-[60px] lg:leading-[80px] xl:leading-[120px] text-[#0D0D0D]">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                duration={0.8}
              >
                Ensure Emails
              </TextAnimate>
            </h1>
            <h1 className="font-semibold text-3xl md:text-[60px] lg:text-[80px] xl:text-[100px] 2xl:text-[134px] leading-9 md:leading-[60px] lg:leading-[80px] xl:leading-[120px] flex gap-2 md:gap-8 text-[#0D0D0D]">
              <TextAnimate
                animation="blurInUp"
                by="character"
                once
                duration={0.8}
              >
                Land In The
              </TextAnimate>
              <span className="text-[#684FFF]">
                <TextAnimate
                  animation="blurInUp"
                  by="character"
                  once
                  duration={0.8}
                  delay={0.8}
                >
                  Inbox
                </TextAnimate>
              </span>
            </h1>
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1200"
            className="font-normal text-lg px-4 md:text-xl lg:text-2xl leading-8 text-[#0D0D0D] max-w-[635px] text-center"
          >
            Reach your audience consistently with tactics that keep your emails
            out of spam
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="1600"
            className="w-[179px] lg:mt-4 h-auto rounded-full py-3 flex justify-center items-center bg-[#684FFF] shadow-[1px_2px_6px_0px_#684FFF1A] font-medium text-sm leading-5 text-white"
          >
            <TextAnimate animation="blurIn" as="h1" delay={1.9} duration={0.77}>
              Book a Free Demo
            </TextAnimate>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
