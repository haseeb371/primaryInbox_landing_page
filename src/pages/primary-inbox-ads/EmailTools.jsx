import { BastaIcon } from "@/assets/icons";
import React from "react";
import AdHeader from "./AdHeader";
import FeatureShowdown from "../home/FeatureShowdown";
import EmailToolChart from "./EmailToolChart";

const EmailTools = () => {
  return (
    <div className="w-full h-auto px-4 pt-[60px] overflow-hidden">
      <div className="w-full h-auto">
        <div className="container mx-auto h-auto flex flex-col gap-10">
          <AdHeader
            icon={<BastaIcon />}
            text={`Email Tools`}
            simpleTitle={`Email Tool `}
            coloredTitle={`Showdown`}
            description={`Find the best email platform by comparing features and support.`}
            btnText={`Book Free 30-min Meeting`}
          />

          <div data-aos="zoom-out-up" className="w-full h-auto">
            <EmailToolChart />
          </div>

        </div>
      </div>
    </div>
  );
};

export default EmailTools;
