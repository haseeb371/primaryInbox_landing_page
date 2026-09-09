'use client'
import { ArrowRight } from "@/assets/icons";
import { BgPattern } from "@/assets/images";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Link } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const DragableWarmUps = () => {
  const [selectedKey, setSelectedKey] = useState(null);

  const items = [
    {
      key: "tyler-durden",
      className: "absolute top-32 left-[5%] md:left-[30%] rotate-[-5deg]",
      bgcolor: "from-[#f6f7fd] to-[#eff7fe]",
      title: (
        <p className="text-base font-medium">
          Warm-Up Tier-0 (<span className="text-[#FC5A3F]">T0</span>)
        </p>
      ),
      des: "For new email accounts, allowing minimal sending to safely build sender reputation. Great for testing setup and inbox placement.",
    },
    {
      key: "the-narrator",
      className: "absolute top-44 left-[3%] md:left-[25%] rotate-[-7deg]",
      bgcolor: "from-[#F09819]/30 to-[#EDDE5D]/30",
      title: (
        <p className="text-base font-medium">
          Warm-Up Tier-1 (<span className="text-[#FC5A3F]">T1</span>)
        </p>
      ),
      des: "Slightly increased sending with basic warm-up features. Suitable for accounts a few days old, starting light audience engagement.",
    },
    {
      key: "iceland",
      className: "absolute top-20 left-[6%] md:left-[36%] rotate-[8deg]",
      bgcolor: "from-[#43C6AC]/30 to-[#F8FFAE]/30",
      title: (
        <p className="text-base font-medium">
          Warm-Up Tier-2 (<span className="text-[#FC5A3F]">T2</span>)
        </p>
      ),
      des: "Moderate sending volume with tracking enabled. Ideal for steady outreach and gaining early performance insights.",
    },
    {
      key: "japan",
      className: "absolute top-40 left-[8%] md:left-[44%] rotate-[10deg]",
      bgcolor: "from-[#1FA2FF]/30 via-[#12D8FA]/30 to-[#A6FFCB]/20",
      title: (
        <p className="text-base font-medium">
          Warm-Up Tier-3 (<span className="text-[#FC5A3F]">T3</span>)
        </p>
      ),
      des: "High-volume sending with full features like tracking and automation tools. Best for matured accounts ready to scale operations.",
    },
  ];

  return (
    <DraggableCardContainer className="relative flex h-full w-full items-center justify-center overflow-clip">
       <p className="absolute bottom-0 mx-auto max-w-sm -translate-y-3/4 text-center text-base font-medium   ">
        Drag to Explore
      </p>
      {[...items].reverse().map((item, i) => (
        <DraggableCardBody
          key={item.key}
          className={`${item.className} `}
          
          onMouseDown={() => setSelectedKey(item.key)}
          /* ← this now survives because DraggableCardBody merges it */
          style={{ zIndex: selectedKey === item.key ? 9999 : i }}
        >
          <div
          
          className="flex flex-col gap-2 rounded-[12px] text-black overflow-hidden">
            <div className={`bg-gradient-to-r ${item.bgcolor}`}>
              <Image
                src={BgPattern}
                alt={item.key}
                className="pointer-events-none rounded-[12px] overflow-hidden object-cover"
              />
              <div className="absolute top-0 left-0 p-3 z-10 flex flex-col gap-1">
                {item.title}
                <p className="text-sm">{item.des}</p>
              </div>
            </div>

            <div className="flex px-2 justify-between items-center">
              <p className="text-base font-medium">Start Warm-Up</p>
              <a href="/pricing#warmupPlan">
              <button  className="rounded-full w-7 h-7 bg-primary flex items-center cursor-pointer justify-center">
                <ArrowRight color="white" width="12" height="10" />
              </button>
            </a>
            </div>
          </div>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
};

export default DragableWarmUps;



// import { ArrowRight } from "@/assets/icons";
// import { BgPattern } from "@/assets/images";
// import {
//   DraggableCardBody,
//   DraggableCardContainer,
// } from "@/components/ui/draggable-card";
// import Image from "next/image";
// import React from "react";

// const DragableWarmUps = () => {
    
//   const items = [
//     {
//       title: "Tyler Durden",
//       className: "absolute top-32 left-[5%] md:left-[30%] rotate-[-5deg]",
//       key: "tyler-durden",
//       bgcolor:'from-[#f6f7fd] to-[#eff7fe]'
//       ,title:<p className="text-base font-medium ">Warm-Up Tier-0(<span className="text-[#FC5A3F]">T0</span>)</p>,
//       des:'For new email accounts, allowing minimal sending to safely build sender reputation. Great for testing setup and inbox placement.'
//     },
//     {
//       title: "The Narrator",
//       className: "absolute top-44 left-[3%] md:left-[25%] rotate-[-7deg]",
//       key: "the-narrator",
//       bgcolor:'from-[#F09819]/20 to-[#EDDE5D]/20'
//     ,title:<p className="text-base font-medium ">Warm-Up Tier-1(<span className="text-[#FC5A3F]">T1</span>)</p>,
//       des:'Slightly increased sending with basic warm-up features. Suitable for accounts a few days old, starting light audience engagement.'
//     },
//     {
//       title: "Iceland",
//       className: "absolute top-20 left-[6%] md:left-[36%] rotate-[8deg]",
//       key: "iceland",
//       bgcolor:'from-[#43C6AC]/20 to-[#F8FFAE]/20'
//    ,title:<p className="text-base font-medium ">Warm-Up Tier-2(<span className="text-[#FC5A3F]">T2</span>)</p>,
//       des:'Moderate sending volume with tracking enabled. Ideal for steady outreach and gaining early performance insights.'
//     },
//     {
//       title: "Japan",
//       className: "absolute top-40 left-[8%] md:left-[44%] rotate-[10deg]",
//       key: "japan",
//       bgcolor:'from-[#1FA2FF]/20 via-[#12D8FA]/20 to-[#A6FFCB]/20'
//    ,title:<p className="text-base font-medium ">Warm-Up Tier-3(<span className="text-[#FC5A3F]">T3</span>)</p>,
//       des:'High-volume sending with full features like tracking and automation tools. Best for matured accounts ready to scale operations.'
//     },
   
//   ];
//   return (
//     <DraggableCardContainer className="relative flex h-full  w-full items-center justify-center overflow-clip">
//       {/* <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
//         If its your first day at Fight Club, you have to fight.
//       </p> */}
//       {[...items].reverse().map((item,i) => (
//         <DraggableCardBody
//           key={item.key}
//           className={`${item.className}`}
//         >
//           <div className={`flex flex-col gap-2 top-4 rounded-[12px] overflow-hidden ${ i===3 && '!z-9999'} `}>
//             <div className={` bg-gradient-to-r  ${item.bgcolor } `}>
//                 <div className="">

//               <Image
//                 src={BgPattern}
//                 alt={item.title}
//                 className="pointer-events-none rounded-[12px] overflow-hidden relative z-0  object-cover"
//                 />
//                 </div>
//                 <div className="absolute top-0 left-0 p-3 z-10 flex flex-col gap-1">
//                     {item.title}
//                     <p className="text-sm font-normal">
//                         {item.des}
//                     </p>
//                 </div>
//             </div>
//             <div className="flex px-2 justify-between items-center">
//               <p className=" text-center text-base font-medium ">
//                 Start Warm-Up
//               </p>

//               <button className="rounded-full cursor-pointer w-7 h-7 bg-primary flex justify-center items-center">
//                 <ArrowRight color={"white"} width="10" height="8" />
//               </button>
//             </div>
//           </div>
//         </DraggableCardBody>
//       ))}
//     </DraggableCardContainer>
//   );
// };

// export default DragableWarmUps;
