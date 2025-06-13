"use client";
import { LockShield } from "@/assets/images";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const DomainInputField = ({ showTable,setshowTable}) => {
  const [domain, setDomain] = useState("");

  useEffect(()=>{
    console.log(domain)
  },[domain])

 const handleOnSubmit = (e) => {
  e.preventDefault(); 
  console.log('on submit data', domain);
  setshowTable(true); 
};
  return (
    <div className="flex flex-col gap-5 w-full h-full items-center">
      <div>
        <Image
          src={LockShield}
          alt="lock sheild image"
          className="w-[140px] h-[158px]"
        />
      </div>

     <form onSubmit={handleOnSubmit} className={` flex ${showTable ?'  flex-row ':' flex-col'}  justify-center items-center gap-5  `}>
      <div className="relative md:w-[401px]">
        <input
          type="text"
          id="domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder=" " 
          required
          className="peer w-full rounded-full border-2 border-white bg-white/60 px-[15px] py-[8px] text-sm  focus:outline-none"
        />
        <label
          htmlFor="domain"
          className="absolute left-[15px] top-1/2 -translate-y-1/2 text-[#6B7280] text-[12px] font-medium transition-all duration-200 ease-in-out 
            peer-placeholder-shown:top-1/2
            peer-placeholder-shown:text-[12px]
            peer-placeholder-shown:-translate-y-1/2
            peer-focus:top-0
            peer-focus:text-[12px]
            peer-focus:-translate-y-1/2
            peer-valid:top-0
            peer-valid:text-[12px]
            peer-valid:-translate-y-1/2
            px-1 rounded-sm  "
        >
          Enter the Domain Name
        </label>
      </div>

      <button type="submit" className="bg-primary rounded-full w-[144px] py-[11px] px-4 text-white text-[12px] font-medium">

        {showTable === true ?'Reload Results':'Check Domain'}
        
      </button>
    </form>
     
    </div>
  );
};

export default DomainInputField;