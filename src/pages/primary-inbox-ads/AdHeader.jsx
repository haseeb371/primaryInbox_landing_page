import PrimaryButton from "@/components/buttons/PrimaryButtom";
import { TextAnimate } from "@/components/magicui/text-animate";
import React from "react";

const AdHeader = ({
  icon,
  text,
  simpleTitle,
  coloredTitle,
  description,
  btnText,
}) => {
  return (
    <div className="w-full h-auto flex flex-col gap-4 lg:gap-6 items-center overflow-hidden">
      <div
        data-aos="fade-up"
        className="w-fit h-auto rounded-full bg-[#F2F0FF] py-2 px-5 flex justify-center items-center gap-2.5"
      >
        {icon}
        <p className="font-medium text-sm text-[#684FFF]">{text}</p>
      </div>
      <p className="font-semibold text-xl sm:text-2xl md:text-[40px] lg:text-[61px] leading-[29px] text-[#040406] flex ">
        <TextAnimate animation="slideLeft" by="character" duration={0.45}>
          {simpleTitle}
        </TextAnimate>
        <span className="text-[#684FFF]">
          <TextAnimate animation="slideLeft" by="character" delay={0.45} duration={0.77}>
            {coloredTitle}
          </TextAnimate>
        </span>
      </p>
      <p data-aos="fade-up" data-aos-duration="1400" data-aos-delay="100" className="font-medium text-center text-sm lg:text-lg text-[#242536] ">{description}</p>
      <PrimaryButton text={btnText} />
    </div>
  );
};

export default AdHeader;
