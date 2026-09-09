'use client'
import {
  Email,
  GLE,
  Gmail,
  Look,
  MainBG,
  PrimaryBgImage,
  topbar,
} from "@/assets/images";
import PrimaryHeading from "@/components/PrimaryHeading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactParallaxTilt from "react-parallax-tilt";

const EmailSetup = () => {
  return (
    <div className=" relative grid   gap-20 py-20 px-8">
      <div className="absolute  mx-3 h-full rounded-[36px] border-[3px] overflow-hidden border-[#FFFFFF] inset-0 z-0">
        <div className=" ">
          <Image
            src={MainBG}
            alt="background Image"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      </div>
      <div className="z-10 ">
        <PrimaryHeading
          dotText="Email Setup"
          leftText="Connect Any Provider"
          rightText="Effortlessly set up and integrate Gmail, Outlook, or any IMAP/SMTP provider. Manage all your emails in one unified platform, simplifying your workflow and boosting productivity."
        />
      </div>
      <div className="w-full z-10">
        <div className="container mx-auto ">
          <div className="bg-white rounded-4xl ">
            <div
              className=" relative    lg:flex  rounded-4xl   justify-between border-[3px] p-2 md:p-10 border-[#FFFFFF] bg-gradient-to-r "
              style={{
                backgroundImage: `linear-gradient(to right, rgba(254, 172, 94, 0.1), rgba(199, 121, 208, 0.1), rgba(75, 192, 200, 0.1))`,
              }}
            >
              <div className="lg:w-[260px]  items-center justify-center flex lg:flex-col gap-[31px]">
                <ReactParallaxTilt>

                <div data-aos="fade-right">
                  <Image src={Gmail} alt="Google " />
                </div>
                </ReactParallaxTilt>
                <ReactParallaxTilt>

                <div data-aos="fade-right">
                  <Image src={Look} alt="outLook" />
                </div>
                </ReactParallaxTilt>
              </div>

              <div className="lg:max-w-[458px] flex flex-col gap-5 text-center my-auto ">
                <div className="mx-auto">
                  <Image
                    src={GLE}
                    width={204}
                    alt="Google ,outLook, Email Provider"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <ReactParallaxTilt>

                  <p className="rounded-[11px] bg-gradient-to-r -rotate-2 from-[#EC008C] text-[34px] font-semibold to-[#FC6767] px-[10px] py text-white ">
                    “EASILY CONNECT,
                  </p>
                  </ReactParallaxTilt>
                  <p className="text-[31px] font-semibold">
                    GMAIL, OUTLOOK OR ANY
                  </p>
                  <div className="flex gap-2">
                    <p className="text-[32px] font-bold bg-gradient-to-r from-[#EC008C] to-[#FC6767] bg-clip-text text-transparent">
                      PROVIDER
                    </p>
                  <ReactParallaxTilt>


                    <p className="rounded-[11px] bg-gradient-to-r w-fit from-[#8E2DE2] text-[32px] font-semibold to-[#4A00E0] px-[10px] py text-white ">
                      In One Place
                    </p>
                  </ReactParallaxTilt>
                  </div>
                  <p className="text-base font-medium">
                    Quickly connect and manage your emails
                  </p>
                </div>
                <Link
                  href=""
                  className="min-w-[140px]  p-1 pr-4 mx-auto  rounded-[60px] max-h-[44px] text-sm font-medium text-white bg-[#05BD73] flex items-center justify-center gap-2"
                >
                  <span className="bg-white text-[#05BD73] w-16 text-3xl rounded-full">
                    +
                  </span>
                  Connect Now
                </Link>
              </div>
                    

              <div
                data-aos="fade-left"
                className=" lg:w-[260px] flex flex-col justify-center items-center mx-auto lg:mx-0  my-auto"
                >
                  <ReactParallaxTilt>
                <Image
                  src={Email}
                  className="max-w-[300px]"
                  alt="Email Provider"
                  />
                  </ReactParallaxTilt>
              </div>
              <div className="max-w-[45px]  top-10 absolute right-20 ">
                <Image src={topbar} alt="Google ,outLook, Email Provider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSetup;
