'use client'
import React, { useEffect, useState } from "react";
import BetaVersion from "./BetaVersion";
import PrimaryButton from "./buttons/PrimaryButtom";
import Image from "next/image";
import { BgLines } from "@/assets/images";

const SecondaryHeroSection = ({
  title = "Privacy Policy",
  des = "Your privacy is important for us as untitled. We respect your privacy regarding any information we may collect from you across our website",
  link = "/",
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full p-3">
      <div className="magic-carpet-container">
        <div className={`magic-carpet ${animate ? "animate-roll-up" : ""}`}>
          <div className="relative border-[3px] border-white rounded-[36px] overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden rounded-[36px]">
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={BgLines}
                  alt="background lines"
                  className="h-full opacity-30 object-cover"
                />
              </div>
              <div className="absolute opacity-30 inset-0 w-full h-full -z-20">
                <video
                  src="/videos/BgVedio.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
            </div>

            <div className="container relative z-10 py-8  mx-auto flex flex-col items-center mt-[76px] gap-8">
              <div data-aos="zoom-out-up" data-aos-duration="1500">
                <BetaVersion />
              </div>

              <div className="text-center">
                <h1
                  data-aos="zoom-out-up"
                  data-aos-duration="2000"
                  className="uppercase text-4xl md:text-[66px] font-semibold"
                >
                  {title}
                </h1>
                <p
                  data-aos="zoom-out-up"
                  data-aos-duration="2500"
                  className="max-w-[765px] text-sm md:text-lg font-normal text-center"
                >
                  {des}
                </p>
              </div>

              <div data-aos="zoom-out-up" data-aos-duration="3000">
                <PrimaryButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;

// import React from "react";
// import BetaVersion from "./BetaVersion";
// import PrimaryButton from "./buttons/PrimaryButtom";
// import Image from "next/image";
// import { BgLines, MainBG, PrimaryBgImage } from "@/assets/images";

// const SecondaryHeroSection = ({
//   title = " Privacy Policy",
//   des = " Your privacy is important for us as untitled. We respect your privacy regarding any information we may collect from you across our website",
//   link = "/",
// }) => {
//   return (
//     <div className="w-full p-5  div-animate ">
//       <div className="relative  border-[3px] border-white rounded-[36px]">
//         <div className="absolute   h-full rounded-[36px]   border-[#FFFFFF] inset-0 z-0 overflow-hidden">
//           {/* <div className=" opacity-75 object-cover -z-10 ">
//                    <Image
//                      src={MainBG}
//                      alt="background Image"
//                      objectFit="cover h-full"
//                      fill
//                      priority={true}
//                    />
//                  </div> */}

//           <div className="absolute  inset-0 w-full h-full z-0">
//             <Image
//               src={BgLines}
//               alt="back ground line"
//               className="h-full opacity-30 object-cover"
//             />
//           </div>
//           <div className="absolute opacity-30  inset-0 w-full h-full -z-20">
//             <video
//               src="/videos/BgVedio.mp4"
//               className="w-full h-full object-cover"
//               autoPlay
//               muted
//               loop
//               playsInline
//               preload="auto"
//             ></video>
//           </div>
//         </div>

//         <div className="container relative z-10  py-8 mx-auto flex flex-col items-center mt-[76px] gap-8">
//           <div data-aos="zoom-out-up" data-aos-duration="1500">
//             <BetaVersion />
//           </div>

//           <div className="text-center">
//             <h1
//               data-aos="zoom-out-up"
//               data-aos-duration="2000"
//               className="uppercase text-4xl md:text-[66px] font-semibold "
//             >
//               {title}
//             </h1>

//             <p
//               data-aos="zoom-out-up"
//               data-aos-duration="2500"
//               className="max-w-[765px] text-sm md:text-lg font-normal text-center"
//             >
//               {des}
//             </p>
//           </div>
//           <div data-aos="zoom-out-up" data-aos-duration="3000">
//             <PrimaryButton />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SecondaryHeroSection;
