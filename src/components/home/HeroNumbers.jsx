
import React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";



const AnimatedNumber = ({ value, prefix = "", suffix = "" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayValue = useTransform(rounded, (latest) => 
    `${prefix}${latest.toLocaleString()}${suffix}`
  );

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 3,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, value]);

  return <motion.span>{displayValue}</motion.span>;
};

const HeroNumbers = ({Numbers}) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 justify-between gap-3">
        {Numbers?.map((v,i)=>(
            <motion.div 
              key={i} 
              className={`py-2 lg:py-[17px] px-3 border-[1px] border-white flex justify-between items-center rounded-2xl bg-white/25 ${
                Numbers.length % 2 !== 0 && i === Numbers.length - 1 
                  ? 'sm:col-span-2 lg:col-span-1' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div>
                <p className="text-[12px] font-medium">{v.status}</p>
                <p className="text-base font-semibold">
                  <AnimatedNumber 
                    value={v.value} 
                    prefix={v.status === "Outcomes" ? "$" : ""} 
                  />
                </p>
              </div>
              <div
                className={` flex items-center justify-center  ${v.bg} rounded-[10px] py-[7px] px-4`}
                >
                {v.icon}
              </div>
            </motion.div>
        ))}
    </div>
  );
};

export default HeroNumbers;
// import { ClickedIcon, OpenedIcon, OutcomesIcon, RepliedIcon, SentIcon } from "@/assets/icons";
// import React from "react";

// const Numbers = [
//   {
//     status: "Sent",
//     number: "13,675",
//     icon: <SentIcon />,
//     bg: "bg-[#2F0AFF]",
//   },
//   {
//     status: "Opened",
//     number: "9000",
//     icon: <OpenedIcon />,
//     bg: "bg-[#660BD4]",
//   },
//   {
//     status: "clicked",
//     number: "7500",
//     icon: <ClickedIcon/>,
//     bg: "bg-[#F4BB00]",
//   },
//   {
//     status: "Replied",
//     number: "8590",
//     icon: <RepliedIcon />,
//     bg: "bg-[#009FBD]",
//   },
//   {
//     status: "Outcomes",
//     number: "$5600",
//     icon: <OutcomesIcon/>,
//     bg: "bg-[#942AFE]",
//   },
// ];

// const HeroNumbers = () => {
//   return (
//     <div className="w-full flex justify-between gap-3">
//         {Numbers.map((v,i)=>(

//             <div key={i} className="py-[17px] px-3 border-[1px] border-white flex justify-between w-full items-center rounded-2xl bg-white/25">
//         <div>
//           <p className="text-[12px] font-medium">{v.status}</p>
//           <p className="text-base font-semibold">{v.number}</p>
//         </div>
//         <div
//           className={` flex items-center justify-center  ${v.bg} rounded-[10px] py-[7px] px-4`}
//           >
//           {v.icon}
//         </div>
//       </div>
//         ))}
//     </div>
//   );
// };

// export default HeroNumbers;
