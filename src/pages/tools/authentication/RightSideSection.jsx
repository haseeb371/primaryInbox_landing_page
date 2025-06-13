import React from "react";
import BlacklistCheck from "./BlacklistCheck";
import EmailHealth from "./EmailHealth";
import DMARCGenerator from "./DMARCGenerator";
import DMARCLookUp from "./DMARCLookUp";
import NSLookUp from "./NSLookUp";
import CNAMELookup from "./CNAMELookup";
import ALookUp from "./ALookUp";
import TXTLookUp from "./TXTLookUp";
import MXLookup from "./MXLookup";
import Image from "next/image";
import { MainBG } from "@/assets/images";

const renderComponent = (Name) => {
  switch (Name) {
    case "Blacklist Check":
      return <BlacklistCheck />;
    case "Email Health":
      return <EmailHealth />;
    case "DMARC Generator":
      return <DMARCGenerator />;
    case "DMARC Lookup":
      return <DMARCLookUp />;
    case "NS Lookup":
      return <NSLookUp />;
    case "CNAME Lookup":
      return <CNAMELookup />;
    case "A Lookup":
      return <ALookUp />;
    case "TXT Lookup":
      return <TXTLookUp />;
    default:
      return <MXLookup />;
  }
};

const RightSideSection = ({ componentName }) => {
  return (
    <div className="border-[3px] relative  border-white rounded-3xl  w-full h-full overflow-hidden   flex flex-col  ">
      <div className="absolute  h-full    overflow-hidden inset-0 -z-10">
        <div>
          <Image
            src={MainBG}
            alt="background Image"
            layout="fill"
            objectFit="fill"
            priority={true}
          />
        </div>
      </div>
      <div className="border-b-[3px]  border-white py-3 px-5 flex flex-col ">
        <p data-aos="fade-up" className=" text-base font-semibold">
          {componentName.Name}
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-sm font-normal "
        >
          {componentName.des}
        </p>
      </div>

      <div className="h-full">{renderComponent(componentName.Name)}</div>
    </div>
  );
};

export default RightSideSection;
