'use client'
import React, { useMemo, useState } from 'react'
import SubscriptionPeriod from './SubscriptionPeriod';
import License from './License';
import YourWarranties from './YourWarranties';
import AcceptanceofTerms from './AcceptanceofTerms';
import Image from 'next/image';
import { MainBG, PrivacyLine } from '@/assets/images';


const linksTitle = [
  "Acceptance of Terms",
  "Subscription Period",
  "License",
  "Your Warranties",
];

const LegalnoticeSection2 = () => {
 const [linkname, setLinkname] = useState("Acceptance of Terms");

  const component = useMemo(()=>{

switch(linkname){

    case 'Subscription Period':

   return <SubscriptionPeriod/>

   
    case 'License':

   return <License/>

   
    case 'Your Warranties':

   return <YourWarranties/>

   
    default :

   return <AcceptanceofTerms/>

   




}

  },[linkname])

  return (
    <div className="relative rounded-4xl border-[3px] border-white p-6 grid overflow-hidden gap-10 ">
      <div className="absolute  h-full  inset-0 z-0">
        <Image
          src={MainBG}
          alt="background Image"
          layout="fill"
          objectFit="cover"
          priority={true}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-10 ">
        <div className="flex flex-col md:flex-row   lg:flex-col gap-4 md:gap-20 lg:gap-4 w-full">
          <div className="" >
            <div className="flex gap-[10px]  items-center">

            <p data-aos="fade-up" className="text-3xl md:text-5xl font-semibold">Notice </p>
            <span className="w-[85px]  overflow-hidden">

              <div data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500'>


            <Image src={PrivacyLine}  alt="arrow image" className=" object-contain" />
              </div>
            </span>
            </div>
            <div className='overflow-hidden'>

            <p  data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500' className="text-xl md:text-[38px] font-semibold">Is Important</p>
            </div>
          </div>

          <div className="lg:py-6 flex flex-col gap-4 w-fit  ">
            {linksTitle.map((v, i) => (
              <button
                key={i}
                onClick={() => setLinkname(v)}
                className={` md:text-lg transition-all duration-[230ms] font-medium text-start hover:text-primary ${
                  linkname === v
                    ? "text-primary border-l-4 border-l-primary pl-2"
                    : "hover:scale-105"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="">
            {component}
        </div>
      </div>
    </div>
  );
}

export default LegalnoticeSection2