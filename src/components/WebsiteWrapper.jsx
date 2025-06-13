"use client";
import React from "react";
import Faqs from "./Faqs";
import OutReach from "./OutReach";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const WebsiteWrapper = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {children}
      {pathname === "/primary-inbox-ads" ? (
        <></>
      ) : (
        <>
          <Faqs />
          <OutReach />
          <Footer />
        </>
      )}
    </>
  );
};

export default WebsiteWrapper;
