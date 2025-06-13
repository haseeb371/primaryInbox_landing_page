"use client";
import DomainInputField from "@/components/DomainInputField";
import BasicTable from "@/components/table/table";
import React, { useState } from "react";




 const  headingName=['Prefrence','Domain','Records','Time to Live (TTL)']
const rows = [
  ['0','voltic','	"google-site-verification=VaQp8VZf0Fc"','10 minutes'],
  ['0','voltic','	"google-site-verification=VaQp8VZf0Fc"','10 minutes'],
  ['0','voltic','	"google-site-verification=VaQp8VZf0Fc"','10 minutes'],
];
 
const MXLookup = () => {
  const [showTable, setshowTable] = useState(true);
  return (
    <div className={`py-5 flex   h-full flex-col  items-center ${showTable?'justify-start':'justify-center'}  gap-8`}>
      <div>
        <DomainInputField showTable={showTable} setshowTable={setshowTable} />
      </div>
      
      {showTable && (
        <div className="w-full flex justify-center overflow-auto px-6 ">
          <BasicTable rows={rows} headingName={headingName} />
          <div className="w-8 rounded-tr-[20px] rounded-br-[20px] bg-green-500 flex justify-center items-center text-white">

            <p className="capitalize rotate-90 text-xs whitespace-nowrap font-medium">
              DNS Record found
            </p>

          </div>
        </div>
      )}
      {/* {showTable && (
        <div className="w-full flex justify-center overflow-auto px-6">
          
          <BasicTable rows={rows} headingName={headingName} />
          <div className="w-8 rounded-tr-[20px] rounded-br-[20px] bg-green-500 flex justify-center items-center text-white">

            <p className="capitalize rotate-90 text-xs whitespace-nowrap font-medium">
              DNS Record found
            </p>

          </div>
        </div>
      )} */}
    </div>
  );
};

export default MXLookup;
