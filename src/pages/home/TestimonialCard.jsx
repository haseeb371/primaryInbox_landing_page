"use client"; // Add this if using Next.js App Router

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MainBG, Qotes, Testimonialimage } from "@/assets/images";
import { ArrowRight } from "@/assets/icons";

const testimonials = [
  {
    id: 1,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 2,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 3,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 1,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 2,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 3,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 1,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 2,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
  {
    id: 3,
    name: "Amelia Joseph",
    position: "Chief Manager",
    content:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations. Creativity flowed, and the results were beyond my expectations.",
    image: { Testimonialimage },
  },
];
const TestimonialCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full  ">
      
      <div className="container  w-screen  mx-auto  ">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
            if (swiper.params.pagination) {
              swiper.params.pagination.el = ".custom-swiper-pagination";
            }
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1500: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
          }}
          className="testimonial-swiper  "
        >
          
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div
              data-aos="fade-left"
              data-aos-delay={300*i}
                className="relative border-[3px]  border-[#FFFFFF] rounded-[32px]  overflow-hidden p-5 md:p-8   h-full flex flex-col gap-5 md:gap-7"
                //    style={{
                //   backgroundImage: `linear-gradient(to bottom, rgba(254, 250, 255, 1), rgba(245, 243, 254, 1),rgba(232, 246, 255, 1))`,
                // }}
              >
                <div className="absolute  h-full rounded-4xl opacity-50  overflow-hidden inset-0 -z-10">
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
                <Image
                  src={Qotes}
                  alt="bg image"
                  objectFit="cover"
                  className="absolute top-3 z-0 opacity-75 right-4"
                />
                <p className=" text-lg leading-relaxed z-10  flex-grow">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden  bg-gray-200">
                    {/* Use Next.js Image for better optimization */}
                    <div className="relative w-full h-full">
                      <Image
                        src={Testimonialimage}
                        alt={testimonial.name}
                        fill
                        sizes="48px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-2xl">
                      {testimonial.name}
                    </h4>
                    <p className=" text-sm font-medium">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className=" px-5    w-full flex justify-end md:justify-between items-center mt-8">
            <div className="h-full hidden md:block ">
              <div className="swiper-pagination flex gap-[6px]  items-center custom-swiper-pagination" />
            </div>
            <div className="flex gap-4">
              <button
                ref={prevRef}
                className="w-[52px] cursor-pointer h-[52px] flex rotate-180 justify-center items-center rounded-full bg-white "
              >
                <ArrowRight color={"#684FFF"} width="20" height="17" />
              </button>
              <button
                ref={nextRef}
                className="w-[52px] h-[52px] flex cursor-pointer justify-center items-center rounded-full bg-primary "
              >
                <ArrowRight color={"white"} width="20" height="17" />
              </button>
            </div>
          </div>
        </Swiper>
      </div>

      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
background-color: white; 
border-radius: 9999px;
transition: all 0.3s ease;
          opacity: 1;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #684FFF;
           width: 45px; 
           height: 8px
        }
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev 
          color: #4a5568;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
