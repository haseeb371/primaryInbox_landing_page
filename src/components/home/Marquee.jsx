import { Brand1, Brand2, Brand3 } from "@/assets/images";
import { Marquee } from "@/components/magicui/marquee";
import PrimaryHeading from "@/components/PrimaryHeading";
import Image from "next/image";
import React from "react";

const messages = [
  Brand1,
  Brand2,
  Brand3,
  Brand1,
  Brand2,
  Brand3,
  Brand1,
  Brand2,
  Brand3,
  Brand1,
  Brand2,
  Brand3,
  Brand1,
  Brand2,
  Brand3,
  Brand1,
  Brand2,
  Brand3,
];
const HomeMarquee = () => {
  return (
    <div className="flex flex-col  gap-5 md:gap-20 py-10 md:py-20">
      <div className="px-5 md:px-0">
        <PrimaryHeading />
      </div>

      <div className="overflow-hidden whitespace-nowrap ">
        <div
          className="animate-marquee  py-0 lg:py-2 xl:py-5 flex gap-10"
          style={{
            display: "flex",
            gap: "40px",
          }}
        >
          <Marquee
            data-aos="fade-left"
            pauseOnHover={true}
            repeat={7}
            className="![--duration:20s] w-full"
          >
            {messages.map((msg, index) => (
              <span
                key={index}
                className="rounded-[20px] h-[93px] text-base font-semibold  min-w-[200px]  bg-white flex justify-center items-center "
              >
                {/* {msg.CompanyName} */}
                <Image src={msg} alt={`Brand${index + 1} logo`} width={150} />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HomeMarquee;
