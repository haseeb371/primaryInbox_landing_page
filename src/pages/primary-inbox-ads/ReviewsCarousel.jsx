"use client"; // Add this if using Next.js App Router

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MainBG, Qotes, Testimonialimage } from "@/assets/images";
import { ArrowRight, VideoPauseIcon, VideoPlayIcon } from "@/assets/icons";

const testimonials = [
  {
    id: 1,
    name: "CHRISTIANEICHO",
    position: "Marketing Director",
    videoSource: "/videos/christianeicho.mp4",
  },
  {
    id: 2,
    name: "DANIEL",
    position: "Growth Strategist",
    videoSource: "/videos/Daniel_Tegnender.mp4",
  },
  {
    id: 3,
    name: "FELIPE",
    position: "VP of Sales",
    videoSource: "/videos/Filipe_Testimonial.mp4",
  },
  {
    id: 1,
    name: "KAREEM",
    position: "Customer Success Manager",
    videoSource: "/videos/Kareem_Testimonial.mp4",
  },
  {
    id: 2,
    name: "ROY",
    position: "Operations Lead",
    videoSource: "/videos/roytesti.mp4",
  },
  {
    id: 3,
    name: "TIFFANY",
    position: "Product Designer",
    videoSource: "/videos/Tiffany_Potter_(3).mp4",
  },
  {
    id: 1,
    name: "TYLER",
    position: "Engineering Lead",
    videoSource: "/videos/tyler_mudrock_testimonial.mp4",
  },
  {
    id: 2,
    name: "FELIPE",
    position: "Innovation Manager",
    videoSource: "/videos/Filipe_Testimonial.mp4",
  },
  {
    id: 3,
    name: "ROY",
    position: "Content Strategist",
    videoSource: "/videos/roytesti.mp4",
  },
];

const ReviewsCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const videoRefs = useRef([]); // Ref array for all videos
  const [playingIndex, setPlayingIndex] = useState(null); // Which video is playing

  const [swiperRef, setSwiperRef] = useState(null);

  const handlePlayClick = (index) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause();
      }
    });

    const selectedVideo = videoRefs.current[index];
    if (selectedVideo) {
      if (playingIndex === index) {
        selectedVideo.pause();
        setPlayingIndex(null);
      } else {
        selectedVideo.play();
        setPlayingIndex(index);
      }
    }
  };

  return (
    <div className="w-full  ">
      <div
        onMouseEnter={() => swiperRef?.autoplay?.stop()}
        onMouseLeave={() => swiperRef?.autoplay?.start()}
        className="container  w-screen  mx-auto  "
      >
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          pagination={{
            el: ".custom-swiper-pagination",
            clickable: true,
          }}
          onSwiper={(swiper) => setSwiperRef(swiper)}
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
              slidesPerView: 3,
              spaceBetween: 12,
            },
            1180: {
              slidesPerView: 4,
              spaceBetween: 12,
            }
          }}
          className="testimonial-swiper  "
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div
                data-aos={i % 2 === 0 ? "fade-up":"fade-down"}
                // data-aos-delay={300 * i}
                className="relative rounded-[36px] overflow-hidden py-8 px-6 border-[3px] border-solid border-white h-[528px] flex jusitfy-start items-end group"
              >
                <div className="w-full h-full absolute top-0 left-0 -z-30">
                  <video
                    src={testimonial.videoSource}
                    // autoPlay={toggleVideo}
                    ref={(el) => (videoRefs.current[i] = el)}
                    loop
                    muted
                    className="w-full h-full object-cover"
                  ></video>
                </div>
                <div
                  className={`w-full h-full bg-[#00000059] ${
                    playingIndex === i ? "opacity-0" : "opacity-100"
                  } transition-all duration-200 absolute top-0 left-0 -z-20`}
                />
                <div
                  onClick={() => handlePlayClick(i)}
                  className={`size-[60px] ${
                    playingIndex === i ? "opacity-0" : "opacity-100"
                  } rounded-full flex justify-center items-center bg-[#000000B2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <VideoPlayIcon />
                </div>
                <div
                  onClick={() => handlePlayClick(i)}
                  className={`size-[60px] ${
                    playingIndex === i
                      ? "opacity-0 group-hover:opacity-100"
                      : "opacity-0"
                  } transition-all duration-200 rounded-full flex justify-center items-center bg-[#000000B2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
                >
                  <VideoPauseIcon />
                </div>

                <div data-aos='fade-right' data-aos-delay="300" className="w-full h-auto flex flex-col gap-4">
                  <p className="font-medium text-2xl leading-[17px] text-white">
                    {testimonial.name}
                  </p>
                  {/* <p className="font-normal text-base text-white">
                    {testimonial.position}
                  </p> */}
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

export default ReviewsCarousel;
