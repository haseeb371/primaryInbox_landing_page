"use client";
import { FaqsIcon, FaqsStarIcon } from "@/assets/icons";
import PrimaryHeading from "@/components/PrimaryHeading";
import React, { useState } from "react";

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
  {
    question: "How does PrimaryInbox implement DMARC?",
    answer:
      "Our DMARC implementation follows industry best practices with graduated enforcement levels. The system provides automated policy management, comprehensive reporting analytics, and intelligent policy adjustment recommendations based on authentication patterns, ensuring secure and compliant cold email outreach tool functionality.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "Primary Inbox employs enterprise-grade security protocols including end-to-end encryption, MFA, role-based access control, and real-time threat detection. These safeguards protect your email infrastructure, ensuring a reliable and secure cold email sender experience.",
  },
  {
    question: "How does PrimaryInbox handle bounce processing?",
    answer:
      "Our system performs intelligent bounce management with automated classification and response actions. Hard bounces cause direct suppression, whereas soft bounces go into an intelligent retry queue. This makes the email list clean for cold email lead generation and enhances the overall campaign efficiency.",
  },
  {
    question: "What monitoring capabilities are available?",
    answer:
      "This Plateform provides comprehensive monitoring through our analytics dashboard, including real-time delivery tracking, domain reputation metrics, engagement analytics, automated alert systems, and performance trend analysis. These insights help optimize every aspect of your cold email marketing tool strategy.",
  },
  {
    question: "How does the personalization engine work?",
    answer:
      "Our sophisticated templating framework allows dynamic content personalization with fallback support and conditional logic. The solution has AI-driven optimization and A/B testing for achieving maximum engagement rates and is a robust cold email lead gen agency tool.",
  },
  {
    question: "What API functionality is supported?",
    answer:
      "Primaryinbox provides a full feature REST API for all fundamental platform functionalities such as campaign management, analytics, and webhook integrations. This enables smooth integration with your cold email outreach platform, boosting automation and efficiency.",
  },
  {
    question: "How does PrimaryInbox optimize sending patterns?",
    answer:
      "The platform uses machine learning algorithms to decide on optimal sending patterns according to recipient engagement history and ESP responses. This cold email automation tool provides successful delivery consistency with intelligent rate limiting and distribution strategies.",
  },
  {
    question: "What campaign metrics are available",
    answer:
      "Primaryinbox offers in-depth campaign analysis like delivery rate by domain, engagement rates, A/B test results, return on investment tracking, and conversion analysis. This data is crucial when optimizing and scaling your cold email outreach tool strategy.",
  },
  {
    question: "How is list management done?",
    answer:
      "Our platform offers automated list hygiene features such as bounce handling, engagement scoring, suppression management, duplicate detection, and contact enrichment. These capabilities make PrimaryInbox a trusted cold email sender for high deliverability rates.",
  },
  {
    question: "How does Primaryinbox guarantee regulatory compliance?",
    answer:
      "The platform ensures compliance with principal email laws (CAN-SPAM, GDPR, CASL) automatically via required unsubscribe processing, physical address mandates, consent monitoring, and data privacy standards. These native controls enable businesses to perform cold email lead generation ethically and lawfully.",
  },
  {
    question: "What are the automatic deliverability optimizations?",
    answer:
      "Primaryinbox optimizes deliverability continuously with authentication monitoring, reputation management, smart throttling, engagement-based sending, and automatic warm up adjustments. These ensure your cold email marketing tool gets the maximum inbox placement.",
  },
];






const Faqs = () => {
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
    <div id="faqs" className=" py-10 md:py-20 grid gap-5 md:gap-20 px-5 md:px-0 overflow-hidden">
      <PrimaryHeading
        dotText="FAQs"
        leftText="Frequently Asked"
        rightText="Explore detailed answers to the questions we get asked most often.Our goal is to provide clear, helpful information to make your experience easier."
      />

      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-10">
          {faqs.map((faq, index) => (
            <div   data-aos="fade-left"   key={index} className={`bg-white po rounded-2xl grid  h-fit transition-all duration-500 ease-in-out `}>
            <div
             onClick={() => toggleFAQ(index)}
              className={` rounded-2xl py-6 px-3 cursor-pointer h-fit shadow-custom-soft transition-all duration-300 ${
                    openFAQs.includes(index)
                      ? "bg-primary text-white transition-all duration-300 ": "bg-white transition-all duration-300"
                      
                  }`}
            >
              
              <div
                
                className={`flex justify-between items-center cursor-pointer `}
              >
                <div className="flex gap-2 items-center">

                 <span
                  className={` min-h-6 min-w-6 md:w-8 md:h-8  ${
                    openFAQs.includes(index)
                    ? "bg-white transition-all duration-500"
                    : "bg-[#F9FAFB] transition-all duration-500 "
                  } rounded-full flex items-center justify-center transition-transform duration-500`}
                  >
                  <div
                    className={`${
                      openFAQs.includes(index)
                        ? "transition-all duration-500 rotate-180 rotate-bounce"
                        : "transition-all duration-500 rotate-0 rotate-bounceback"
                      }`}
                      >
                    <FaqsStarIcon
                      color={openFAQs.includes(index) ? "#684FFF" : "black"}
                      />
                  </div>
                </span>
                <h3 className=" text-sm md:text-base font-semibold">{faq.question}</h3>
                </div>
                <span
                  className={` min-h-6 min-w-6 md:w-8 md:h-8 ${
                    openFAQs.includes(index)
                      ? "bg-white transition-all duration-500"
                      : "  transition-all duration-500 "
                  } rounded-full flex items-center justify-center transition-transform duration-500`}
                >
                  <div
                    className={` origin-center ${
                      openFAQs.includes(index)
                        ? "transition-all duration-500 rotate-180  "
                        : "transition-all duration-500 rotate-0"
                    }`}
                  >
                    <FaqsIcon
                      color={openFAQs.includes(index) ? "#684FFF" : "black"}
                    />
                  </div>
                </span>
              </div>

            </div>
              <div 
                className={`overflow-hidden   transition-all duration-500 ease-in-out ${openFAQs.includes(index) ? "faq-animation" : "faq-closed faq-animation-reverse"}`}
              >
                <p className="py-3 px-3 font-normal text-[11px] md:text-sm">{faq.answer}</p>
              </div>

             </div> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
