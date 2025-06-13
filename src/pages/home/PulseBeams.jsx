"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChatGPTSVG, PrimayInboxSVG } from "@/assets/icons";
import { IconAi, IconChatgpt, IconDeepSeek, IconGrok, IconHubspot, IconSlack } from "@/assets/images";

const grad1 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["0%", "0%", "200%"],
    x2: ["0%", "0%", "180%"],
    y1: ["80%", "0%", "0%"],
    y2: ["100%", "20%", "20%"],
  },
};

const grad2 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad3 = {
  initial: {
    x1: "0%",
    x2: "0%",
    y1: "80%",
    y2: "100%",
  },
  animate: {
    x1: ["20%", "100%", "100%"],
    x2: ["0%", "90%", "90%"],
    y1: ["80%", "80%", "-20%"],
    y2: ["100%", "100%", "0%"],
  },
};
const grad4 = {
  initial: {
    x1: "40%",
    x2: "50%",
    y1: "160%",
    y2: "180%",
  },
  animate: {
    x1: "0%",
    x2: "10%",
    y1: "-40%",
    y2: "-20%",
  },
};
const grad5 = {
  initial: {
    x1: "-40%",
    x2: "-10%",
    y1: "0%",
    y2: "20%",
  },
  animate: {
    x1: ["40%", "0%", "0%"],
    x2: ["10%", "0%", "0%"],
    y1: ["0%", "0%", "180%"],
    y2: ["20%", "20%", "200%"],
  },
};

const Icons = [
  {
    source:IconSlack,
    bgColor:"bg-gradient-to-r from-[rgba(247,255,0,0.1)] to-[rgba(219,54,164,0.1)]",
    positionValues:"top-20 left-[29%]",
  },
  {
    source:IconHubspot,
    bgColor:"bg-gradient-to-r from-[rgba(255,153,102,0.1)] to-[rgba(255,94,98,0.1)]",
    positionValues:"top-20 right-[28.7%]",
  },
  {
    source:IconAi,
    bgColor:"bg-gradient-to-r from-[rgba(201,214,255,0.15)] to-[rgba(226,226,226,0.15)]",
    positionValues:"bottom-32 left-[20.8%]",
  },
  {
    source:IconDeepSeek,
    bgColor:"bg-gradient-to-r from-[rgba(86,204,242,0.1)] to-[rgba(47,128,237,0.1)]",
    positionValues:"bottom-32 right-[21.3%]",
  },
  {
    source:IconChatgpt,
    bgColor:"bg-gradient-to-r from-[rgba(0,176,155,0.1)] to-[rgba(150,201,61,0.1)]",
    positionValues:"bottom-15 left-[29.6%]",
  },
  {
    source:IconGrok,
    bgColor:"bg-gradient-to-r from-[rgba(211,204,227,0.2)] to-[rgba(233,228,240,0.2)]",
    positionValues:"bottom-15 right-[29.8%]",
  },
]

const PulseBeams = () => {
  return (
    <div className="flex h-[40rem] relative items-center justify-center antialiased  overflow-hidden">
      <span className="z-50">
        <PrimayInboxSVG />
      </span>
      {Icons.map((v,i)=>{
        return(
      <span key={i} className={`absolute z-50 bg-white ${v.positionValues} size-[52px] rounded-full border-2 border-solid border-white ${v.bgColor} flex justify-center items-center`}>
        <Image src={v.source} width={36} height={36} alt="Icons" className="size-9" />
      </span>
        )
      })}

      {/* Core SVGs component */}
      <div className="absolute inset-0 flex items-center justify-center">
        <SVGs />
      </div>
    </div>
  );
};

export const SVGs = () => {
  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0"
    >
      {/* LEFT MIDDLE LINE WHITE */}
      <path
        // d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        d="M399 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="white"
      />
      <path
        // d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        d="M399 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
      />

      {/* RIGHT MIDDLE LINE WHITE */}
            <path
            transform="scale(-1,1) translate(-850,0)"
        // d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        d="M399 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="white"
      />
      <path
      transform="scale(-1,1) translate(-850,0)"
        // d="M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        d="M399 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5"
        stroke="url(#grad1)"
      />

      {/* LEFT BOTTOM LINE WHITE */}

      <path
        // d="M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
                transform="scale(1,1) translate(3,0)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="white"
      />
      <path
      transform="scale(1,1) translate(3,0)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />

      {/* RIGHT BOTTOM LINE WHITE */}
      <path
        transform="scale(-1,1) translate(-855,0)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="white"
      />
      <path
        transform="scale(-1,1) translate(-855,0)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />

      {/* TOP LEFT LINE WHITE */}

      <path
              transform="scale(1,-1) translate(-10,-436)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="white"
      />
      <path
              transform="scale(1,-1) translate(-10,-436)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />
      {/* TOP RIGHT LINE WHITE */}

      <path
      transform="scale(-1,-1) translate(-870,-436)" 
              // transform="scale(-1,1) translate(-435,0)"
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="white"
      />
      <path
             transform="scale(-1,-1) translate(-870,-436)" 
        d="M425.5 234V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5"
        stroke="url(#grad3)"
      />


      <defs>
        <motion.linearGradient
          variants={grad5}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad5"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad1}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad1"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad2}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad2"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad3}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad3"
        >
          <GradientColors />
        </motion.linearGradient>
        <motion.linearGradient
          variants={grad4}
          animate="animate"
          initial="initial"
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            repeatDelay: 2,
            delay: Math.random() * 2,
          }}
          id="grad4"
        >
          <GradientColors />
        </motion.linearGradient>
      </defs>
      <circle
        cx="851"
        cy="34"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="770"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="142"
        cy="427"
        r="6.5"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      <circle
        cx="6.5"
        cy="398.5"
        r="6"
        fill="var(--slate-700)"
        stroke="var(--slate-600)"
      />
      {/* <circle cx="420.5" cy="6.5" r="6" fill="white" stroke="white" /> */}

      {/* <ChatGPTSVG></ChatGPTSVG> */}
    </svg>
  );
};

const GradientColors = () => {
  return (
    <>
      <stop stopColor="#18CCFC" stopOpacity="0"></stop>
      <stop stopColor="#18CCFC"></stop>
      <stop offset="0.325" stopColor="#6344F5"></stop>
      <stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
    </>
  );
};


export default PulseBeams