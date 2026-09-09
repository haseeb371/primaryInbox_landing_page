import { Warmupimage } from "@/assets/images";
import PrimaryHeading from "@/components/PrimaryHeading";
import Image from "next/image";
import React from "react";

const Warmup = () => {
  return (
    <div className="w-full px-3">
      <div className="w-full  border-[3px] border-white rounded-[36px] overflow-hidden bg-linear-to-r from-[#EE0979]/10 to-[#FF6A00]/10 pt-20 flex flex-col gap-2">
        <div className="px-3 md:px-0">
          <PrimaryHeading
            dotText="Accounts Warm-Up"
            leftText="Warm-Up Tiers"
            rightText="Monitor your email accounts’ warm-up progress at a glance. Track reputation and activity for each tier in real time.Optimize sending to improve deliverability and engagement."
          />
        </div>
        <div data-aos='zoom-in' data-aos-duration="2000" className="container mx-auto">
          <Image src={Warmupimage} alt="warm up image" />
        </div>
      </div>
    </div>
  );
};

export default Warmup;
