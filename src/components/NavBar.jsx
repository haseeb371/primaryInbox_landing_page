"use client";

import { ArrowRight, FaqsIcon, MinusIcon, PlusIcon } from "@/assets/icons";
import {
  CompanyLogo,
  EnvelopeDownload,
  ShieldCheck,
  StarEnvelope,
  Toolrightimage,
} from "@/assets/images";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import PrimaryButtom from "./buttons/PrimaryButtom";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Tools" }, // Tools doesn't have a path here, as it's a dropdown
  { name: "Pricing", path: "/pricing" },
  { name: "About Us ", path: "/about-us" },
  { name: "Contact Us", path: "/contact-us" },
];

const toolMenu = [
  {
    icon: ShieldCheck,
    title: "Email Authentication Tools",
    des: "Ensure email security and authenticity.",
    link: "/tools/email/authentication",
  },
  // {
  //   icon: EnvelopeDownload,
  //   title: "Email Deliverability Tools",
  //   des: "Maximize inbox delivery and engagement.",
  //   link: "/tools/email/deliverability",
  // },
  // {
  //   icon: StarEnvelope,
  //   title: "Content Tools",
  //   des: "Enhance your email's impact.",
  //   link: "/tools/email/content",
  // },
];

const NavBar = () => {
  const param = usePathname();
  const [toolsMenuOpen, setToolsMenuOpen] = useState(false);
  const [mobileToolsMenuOpen, setMobileToolsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef(null);

  const [menu, setmenu] = useState(null);
  const menuRef = useRef(null);
  const toolsMenuRef = useRef(null);
  const burgerButtonRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setToolsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setToolsMenuOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 0
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add a click outside handler to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close mobile menu if clicking outside
      if (
        menu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerButtonRef.current &&
        !burgerButtonRef.current.contains(event.target)
      ) {
        setmenu(false);
      }

      // Close tools dropdown if clicking outside
      if (
        toolsMenuOpen &&
        toolsMenuRef.current &&
        !toolsMenuRef.current.contains(event.target)
      ) {
        setToolsMenuOpen(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu, toolsMenuOpen]);

  // Toggle Tools submenu specifically for mobile
  const toggleMobileToolsMenu = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileToolsMenuOpen(!mobileToolsMenuOpen);
  };

  return (
    <div
      id="NavBar"
      className={`w-full fixed  z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-sm py-4 "
          : "bg-transparent translate-y-8  py-4"
      }`}
    >
      {/* Overall Div */}
      <div className="relative  w-full container px-5 xl:px-0  mx-auto  flex justify-between items-center gap-[10px]">
        {/* Left Part - Logo */}
        <Link className="overflow-hidden" href="/">
          <div
            data-aos="slide-right"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <Image
              src={CompanyLogo}
              alt="Company logo"
              objectFit="cover"
              priority={true}
            />
          </div>
        </Link>
        {/* Middle Part - Links */}
        <div className={`overflow-visible ${param === "/primary-inbox-ads" ? "hidden":"hidden lg:block"}`}>
          <div
            data-aos="fade-down"
            data-aos-easing="ease-out"
            data-aos-duration="1000"
            className="hidden lg:block"
          >
            <div
              className={`p-1 bg-white rounded-full ${
                scrolled ? "bg-[#f9fafb] " : "bg-white"
              } overflow-visible`}
            >
              <ul className="flex ">
                {navItems.map((item, index) => (
                  <li key={index} className="relative z-10 ">
                    {item.name === "Tools" ? (
                      <div
                        ref={toolsMenuRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="flex items-center h-full relative"
                      >
                        <span
                          className={`px-4 py-2 cursor-pointer text-sm font-medium flex items-center gap-1 rounded-full ${
                            toolsMenuOpen || param.includes("tools")
                              ? "bg-primary text-white"
                              : ""
                          } hover:bg-primary transition-all duration-150 hover:text-white`}
                        >
                          {item.name}
                          <span>
                            {toolsMenuOpen ? (
                              <MinusIcon />
                            ) : (
                              <PlusIcon
                                color={
                                  param.includes("tools") ? "white" : "#242536"
                                }
                              />
                            )}
                          </span>
                        </span>

                        {toolsMenuOpen && (
                          <div className="absolute top-[calc(100%+20px)] max-w-[643px] mt-1 p-4 flex gap-4 bg-white rounded-[12px] shadow-lg z-[999] opacity-100 visible">
                            <div className="flex flex-col gap-3">
                              {toolMenu.map((v, i) => (
                                <Link href={v.link} key={i}>
                                  <div className="rounded-[12px] bg-[#F9FAFB] p-3 flex gap-6 items-center justify-between cursor-pointer hover:scale-[102%] transition-all duration-300 hover:bg-gray-100">
                                    <div className="flex gap-2">
                                      <Image
                                        src={v.icon}
                                        alt={v.title}
                                        className="w-8 h-8"
                                      />
                                      <div className="flex flex-col  gap-1">
                                        <p className="text-sm font-semibold leading-4">
                                          {v.title}
                                        </p>
                                        <p className="text-[12px] whitespace-nowrap font-medium leading-[17px]">
                                          {v.des}
                                        </p>
                                      </div>
                                    </div>
                                    <ArrowRight
                                      width="18"
                                      height="18"
                                      color={"black"}
                                    />
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* hidde image of the tools right side */}
                            {/* <div className="w-[260px] relative rounded-[12px] border-[2px] border-white overflow-hidden">
                              <Image
                                src={Toolrightimage}
                                alt="Tools right side image"
                                fill
                              />
                            </div> */}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.path}>
                        <span
                          className={`px-4 py-2 cursor-pointer text-sm font-medium flex items-center gap-1 rounded-full ${
                            // This is the key part for active link styling
                            param === item.path ? "bg-primary text-white" : ""
                          } hover:bg-primary transition-all duration-150 hover:text-white`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Right Part - Button */}
        <div className="overflow-hidden">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
            className="hidden lg:inline-block"
          >
            <PrimaryButtom text={param === "/primary-inbox-ads"? "Get Started":"Join the waitlist"} />
          </div>
        </div>


        {/* Mobile View */}
        {/* Burger icon */}
        <div className="overflow-hidden lg:hidden ">
          <div
            data-aos="slide-left"
            data-aos-duration="1000"
            data-aos-easing="ease-out"
          >
            <button
              ref={burgerButtonRef}
              onClick={() => {
                setmenu(!menu);
                setMobileToolsMenuOpen(false);
              }}
              className={`
          nav-toggle
          flex flex-col justify-between
          w-8 h-6
          cursor-pointer
          p-0
          border-none
          bg-transparent
          ${menu ? "open" : ""}
        `}
              aria-label="Toggle Navigation"
            >
              <span
                className={`
            bar
            block
            w-full h-1
            bg-primary dark:bg-primary
            rounded-full
            transition-all duration-300 ease-in-out
            origin-center
            ${menu ? "rotate-45 translate-y-2.5" : ""}
          `}
              />
              <span
                className={`
            bar
            block
            w-full h-1
            bg-primary dark:bg-primary
            rounded-full
            transition-all duration-300 ease-in-out
            ${menu ? "opacity-0" : ""}
          `}
              />
              <span
                className={`
            bar
            block
            w-full h-1
            bg-primary dark:bg-primary
            rounded-full
            transition-all duration-300 ease-in-out
            origin-center
            ${menu ? "-rotate-45 -translate-y-2.5" : ""}
          `}
              />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile View Menu */}
      <div
        ref={menuRef}
        className={`absolute    py-5 px-5 w-full ${
          menu
            ? "menu-animation flex flex-col gap-2 justify-center  items-center"
            : menu === false
            ? "menu-closed menu-animation-reverse"
            : "menu-closed"
        }`}
        style={{ top: "80%" }}
      >
        <div className="bg-white rounded-4xl w-full py-5   ">
          <ul className="flex flex-col justify-center items-center w-full">
            {navItems.map((item, index) => (
              <li key={index} className="relative z-10 w-full text-center">
                {item.name === "Tools" ? (
                  <div className="flex flex-col items-center relative">
                    <button
                      onClick={toggleMobileToolsMenu}
                      className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium flex items-center gap-1 ${
                        mobileToolsMenuOpen || param.includes("tools")
                          ? "bg-primary text-white"
                          : ""
                      } transition-all duration-150 w-fit`}
                    >
                      {item.name}
                      <span
                        className={`transition-all duration-300 ${
                          mobileToolsMenuOpen ? "rotate-180" : ""
                        }`}
                      >
                        <FaqsIcon
                          color={
                            mobileToolsMenuOpen || param.includes("tools")
                              ? "white"
                              : "black"
                          }
                        />
                      </span>
                    </button>

                    <ul
                      className={` flex flex-col gap-2 text-center  transition-all duration-1000 w-full  ${
                        mobileToolsMenuOpen
                          ? "toolsmenu-animation flex flex-col gap-2 justify-center items-center"
                          : mobileToolsMenuOpen === false
                          ? "toolsmenu-closed toolsmenu-animation-reverse flex flex-col gap-2 justify-center items-center opacity-0"
                          : "toolsmenu-closed flex flex-col gap-2 justify-center items-center opacity-0"
                      }`}
                    >
                      {toolMenu.map((v, i) => (
                        <li key={i}>
                          <Link href={v.link}>
                            <div
                              onClick={() => setmenu(!menu)}
                              className={`py-2 rounded-full px-4 flex justify-center cursor-pointer ${
                                param === v.link ? "bg-primary text-white" : ""
                              } `}
                            >
                              <p className="text-sm font-medium">{v.title}</p>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {/* )} */}
                  </div>
                ) : (
                  <Link href={item.path} className="block w-full">
                    <span
                      onClick={() => setmenu(!menu)}
                      className={`px-4 py-2 cursor-pointer text-sm font-medium flex justify-center items-center gap-1 rounded-full ${
                        param === item.path ? "bg-primary text-white" : ""
                      } transition-all duration-150 w-fit mx-auto`}
                    >
                      {item.name}
                    </span>
                  </Link>
                )}
              </li>
            ))}
            <li className="py-3">
              <PrimaryButtom text="Join the waitlist" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
