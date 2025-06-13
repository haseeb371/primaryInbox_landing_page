"use client";
import { BgLines, MainBG, PLogo, PrimaryBgImage } from "@/assets/images";
import Image from "next/image";
import React from "react";
import PrimaryButton from "./buttons/PrimaryButtom";
import {
  Cicon,
  FbIcon,
  InstaIcon,
  LinkdinIcon,
  PhoneIcon,
  SupportIcon,
  LocationIcon,
  ArrowRight,
} from "@/assets/icons";
import Link from "next/link";

const socialMedia = [
  {
    Icon: <FbIcon />,
    link: "https://www.facebook.com/people/PrimaryInbox/61573166584227/",
  },
  {
    Icon: <InstaIcon />,
    link: "https://www.instagram.com/",
  },
  {
    Icon: <LinkdinIcon />,
    link: "https://www.linkedin.com/company/primaryinbox-ai/",
  },
];

const resourceLinks = [
  {
    title: "Pricing",
    link: "/pricing",
  },
  {
    title: "About us",
    link: "/about-us",
  },
];

const legalLinks = [
  {
    title: "Terms of Use",
    link: "/terms",
  },
  {
    title: "Privace Policy",
    link: "/privacy-policy",
  },
  {
    title: "Legal Notice",
    link: "/legal-notice",
  },
  {
    title: "Feedback",
    link: "/feedback",
  },
  {
    title: "FAQs",
    link: "#faqs",
  },
  {
    title: "Features",
    link: "/#features",
  },
];

const contactInfo = [
  {
    Icon: <PhoneIcon />,
    text: "042-124511-110",
  },
  {
    Icon: <SupportIcon />,
    text: "Support@primaryinbox.ai",
  },
  {
    Icon: <LocationIcon />,
    text: "Sheridan, WY 82801 USA",
  },
];

const Footer = () => {
  const scrollToTop = () => {
    // Scroll the window to the top (0,0) with smooth behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className="p-3">
      <div className="w-full relative rounded-4xl overflow-hidden  border-[3px] py-[60px] px-5 lg:px-0 border-white">
        <button
          onClick={scrollToTop}
          className=" w-[60px] animate-bounce cursor-pointer top-[30px] right-[10px] h-[60px] border-[2px] flex gap-1 absolute rounded-full flex-col justify-center items-center z-10 border-white bg-[#F2F0FF]"
        >
          <div className=" -rotate-90">
            <ArrowRight />
          </div>

          <div className="w-[6px] h-[6px] rounded-full bg-primary"></div>
        </button>
        <div className="absolute   h-full rounded-[36px]   border-[#FFFFFF] inset-0 z-0">
                 {/* <div className=" opacity-75 object-cover -z-10 ">
                   <Image
                     src={MainBG}
                     alt="background Image"
                     objectFit="cover h-full"
                     fill
                     priority={true}
                   />
                 </div> */}
       
                 <div className="absolute  inset-0 w-full h-full z-0">
                  <Image
                  src={BgLines}
                  alt="back ground line"
                  className="h-full opacity-35 object-cover"
       
                  />
                 </div>
                 <div className="absolute  inset-0 w-full h-full -z-20">
                   <video
                     src="/videos/BgVedio.mp4"
                     className="w-full h-full opacity-30 object-cover"
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload="auto"
                   ></video>
                 </div>
               </div>

        <div className="container mx-auto z-10 relative">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            {/* First column with logo, subscribe, and social links */}
            <div className="">
              <div className="grid gap-8 max-w-[420px]">
                <Image src={PLogo} alt="Brand Logo" priority />

                <div className="bg-white p-1 pl-[14px] rounded-full flex w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="placeholder:text-[#242536] placeholder:text-sm placeholder:font-medium outline-none w-full"
                  />

                  <PrimaryButton text="Subscribe Now" texthidden='hidden sm:block' buttonBg="bg-primary text-white pl-1 sm:pl-3" />
                </div>

                <p className="text-base font-medium leading-[22px]">
                  Stay updated with the latest news and offers.Subscribe to our newsletter for exclusive insights.
                </p>

                <div className="flex gap-5">
                  {socialMedia.map((v, i) => (
                    <Link
                      href={v.link}
                      key={i}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-primary flex justify-center items-center duration-150 hover:scale-105"
                    >
                      {v.Icon}
                    </Link>
                  ))}
                </div>

                <p className="text-base font-medium leading-[22px] flex gap-2 items-center">
                  <Cicon />
                  2025, All Rights Reserved
                </p>
              </div>
            </div>

            {/* Spacer column */}

            {/* Resources column */}
            <div className=" grid gap-7 h-fit">
              <h3 className="text-[21px] font-semibold ">Resources</h3>
              <div className="grid gap-6">
                {resourceLinks.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-base font-medium  duration-300 hover:text-primary hover:scale-105"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className=" grid gap-7 h-fit">
              <h3 className="text-[21px] font-semibold">Legal</h3>
              <div className="grid gap-6">
                {legalLinks.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                    className="text-base transition-all duration-300  hover:text-primary font-medium hover:scale-105"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className=" grid gap-7 h-fit">
              <h3 className="text-[21px] font-semibold">Contact us</h3>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex justify-center items-center">
                      {item.Icon}
                    </div>
                    <span className="text-base font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import { PLogo, PrimaryBgImage } from "@/assets/images";
// import Image from "next/image";
// import React from "react";
// import PrimaryButton from "./buttons/PrimaryButtom";
// import { Cicon, FbIcon, InstaIcon, LinkdinIcon ,PhoneIcon ,SupportIcon, LocationIcon } from "@/assets/icons";
// import Link from "next/link";

// const socialMedia = [
//   {
//     Icon: <FbIcon />,
//     link: "https://www.facebook.com/people/PrimaryInbox/61573166584227/",
//   },
//   {
//     Icon: <InstaIcon />,
//     link: "https://www.instagram.com/",
//   },
//   {
//     Icon: <LinkdinIcon />,
//     link: "https://www.linkedin.com/company/primaryinbox-ai/",
//   },
// ];

// const resourceLinks = [
//   {
//     title: "Pricing",
//     link: "/pricing",
//   },
//   {
//     title: "About us",
//     link: "/about",
//   },
//   {
//     title: "Feedback",
//     link: "/feedback",
//   },
//   {
//     title: "FAQs",
//     link: "/faqs",
//   },
//   {
//     title: "Features",
//     link: "/features",
//   },
// ];

// const legalLinks = [
//   {
//     title: "Terms of Use",
//     link: "/terms",
//   },
//   {
//     title: "Privace Policy",
//     link: "/privacy",
//   },
//   {
//     title: "Legal Notice",
//     link: "/legal-notice",
//   },
// ];

// const contactInfo = [
//   {
//     Icon: <PhoneIcon />,
//     text: "042-124511-110",
//   },
//   {
//     Icon: <SupportIcon />,
//     text: "Support@primaryinbox.ai",
//   },
//   {
//     Icon: <LocationIcon />,
//     text: "Sheridan, WY 82801 USA",
//   },
// ];

// const Footer = () => {
//   return (
//     <div className="w-full rounded-4xl border-[3px] py-[60px] border-white mx-3">
//       <div className="absolute mx-3 h-full rounded-[36px] border-[3px] overflow-hidden border-[#FFFFFF] inset-0 z-0">
//         <div className=" ">
//           <Image
//             src={PrimaryBgImage}
//             alt="background Image"
//             layout="fill"
//             objectFit="cover"
//             priority={true}
//           />
//         </div>
//       </div>

//       <div className="container mx-auto z-10">
//         <div>
//           <div className="grid gap-8">
//             <Image src={PLogo} alt="Brand Logo" priority />

//             <div className="bg-white p-1 pl-[14px] rounded-full  flex w-fit ">
//               <input
//                 type="email"
//                 placeholder="Enter Your Email"
//                 className="placeholder:text-[#242536]"
//               />

//               <PrimaryButton text="Subscribe Now" />
//             </div>

//             <p className="text-base font-medium leading-[22px]">
//               We use multi-mic and echo cancellation technology so that everyone
//               can use device.
//             </p>

//             <div className="flex gap-5">
//               {socialMedia.map((v, i) => (
//                 <Link
//                   href={v.link}
//                   key={i}
//                   className="w-10 h-10 rounded-full bg-primary flex justify-center items-center"
//                 >
//                   {v.Icon}
//                 </Link>
//               ))}
//             </div>

//             <p  className="text-base font-medium leading-[22px] flex gap-2">
//               <Cicon/>
//               2025, All Rights Reserved
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
