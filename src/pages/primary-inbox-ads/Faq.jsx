"use client";
import React, { useState } from "react";
import AdHeader from "./AdHeader";
import { FAQIconAd } from "@/assets/icons";
import Image from "next/image";
import { FaqSectionImage } from "@/assets/images";

const faqs = [
  {
    question: "What is PrimaryInbox?",
    answer:
      "Primary Inbox is an advanced cold email platform that maximizes delivery rates via sophisticated authentication processes and smart sending algorithms. Our infrastructure makes sure your outreach always lands in primary inboxes while staying in compliance with global email laws.",
  },
  {
    question: "How does PrimaryInbox ensure email deliverability?",
    answer:
      "Our own proprietary delivery optimization engine applies real-time authentication, reputation management, and sending pattern analysis. The system dynamically optimizes delivery parameters from recipient engagement metrics and ESP responses, keeping inbox placement rates as high as possible across all leading email providers.",
  },
  {
    question: `What does Primaryinbox's email warmup process entail?`,
    answer:
      "The platform runs a systematic warmup procedure with AI-powered engagement simulation on various email providers. Our cold emailing procedure ramps up sending volume gradually while keeping optimal engagement rates, usually reaching full warmup in 30 days.",
  },
  {
    question: "What DNS requirements does Primaryinbox have?",
    answer:
      "Primaryinbox needs typical email authentication records such as SPF, DKIM (2048-bit), and DMARC. Our cold email automation tool includes automated DNS record creation and live validation to verify proper setup. Custom tracking domains are available for increased deliverability.",
  },
  //   {
  //     question: "How does PrimaryInbox implement DMARC?",
  //     answer:
  //       "Our DMARC implementation follows industry best practices with graduated enforcement levels. The system provides automated policy management, comprehensive reporting analytics, and intelligent policy adjustment recommendations based on authentication patterns, ensuring secure and compliant cold email outreach tool functionality.",
  //   },
  {
    question: "What security measures are in place?",
    answer:
      "Primary Inbox employs enterprise-grade security protocols including end-to-end encryption, MFA, role-based access control, and real-time threat detection. These safeguards protect your email infrastructure, ensuring a reliable and secure cold email sender experience.",
  },
  {
    question: "What are the automatic deliverability optimizations?",
    answer:
      "Primaryinbox optimizes deliverability continuously with authentication monitoring, reputation management, smart throttling, engagement-based sending, and automatic warm up adjustments. These ensure your cold email marketing tool gets the maximum inbox placement.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openFAQs, setOpenFAQs] = useState([]);

  const toggleFAQ = (index) => {
    if (openFAQs.includes(index)) {
      setOpenFAQs(openFAQs.filter((i) => i !== index));
    } else {
      setOpenFAQs([...openFAQs, index]);
    }
  };

  return (
    <div className="w-full h-auto px-4 pt-[60px] overflow-hidden">
      <div className="w-full h-auto">
        <div className="container mx-auto h-auto flex flex-col gap-10">
          <AdHeader
            icon={<FAQIconAd />}
            text={`FAQ's`}
            simpleTitle={`Frequently Asked `}
            coloredTitle={`Questions`}
            description={`Learn everything you need to know about the Primary Inbox in our FAQs.`}
            btnText={`Book Free 30-min Meeting`}
          />

          <div className="w-full h-auto flex justify-between items-center gap-[27px]">
            <div
              data-aos="fade-down"
              className="w-full h-auto hidden lg:flex justify-center items-center"
            >
              <Image
                width={2000}
                height={2000}
                alt="Faqs"
                src={FaqSectionImage}
                className="w-[468.43px] h-[390.12px] object-cover"
              />
            </div>
            <div data-aos-delay="300" data-aos="fade-up" className="w-full h-auto grid grid-cols-1 gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-[18px] grid h-fit transition-all duration-500 ease-in-out `}
                >
                  <div
                    onClick={() => toggleFAQ(index)}
                    className={` rounded-[18px] bg-white py-[25px] px-[19px] cursor-pointer h-fit shadow-custom-soft transition-all duration-300`}
                  >
                    <div
                      className={`flex justify-between items-center cursor-pointer`}
                    >
                      <div className="flex gap-2 items-center ">
                        <h3 className=" text-sm md:text-base font-semibold">
                          {faq.question}
                        </h3>
                      </div>
                      <span
                        className={`size-9 border border-solid border-[#EBEBEB] rounded-full flex items-center justify-center transition-transform duration-500`}
                      >
                        <div
                          className={` origin-center ${
                            openFAQs.includes(index)
                              ? "transition-all duration-500 rotate-180  "
                              : "transition-all duration-500 rotate-0"
                          }`}
                        >
                          <p className="text-black text-2xl">
                            {openFAQs.includes(index) ? "-" : "+"}
                          </p>
                        </div>
                      </span>
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden   transition-all duration-500 ease-in-out ${
                      openFAQs.includes(index)
                        ? "faq-animation"
                        : "faq-closed faq-animation-reverse"
                    }`}
                  >
                    <p className="px-[25px] font-medium text-[11px] md:text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
