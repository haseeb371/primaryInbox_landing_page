import {
  ArrowRight,
  LocationIcon,
  LocationIcon2,
  PhoneIcon,
  PhoneIcon2,
  RedEmail,
} from "@/assets/icons";
import { MainBG, Mapimage, PrivacyLine } from "@/assets/images";
import Image from "next/image";
import ContactForm from "./ContactForm";

const contactlist = [
  {
    title: "Email",
    dec: "hello@gmail.com",
    icon: <RedEmail />,
  },
  {
    title: "Phone",
    dec: "042-124511-110",
    icon: <PhoneIcon2 color="#05BD73" width="18" height="19" />,
  },
  {
    title: "Address",
    dec: "Sheridan, WY 82801 USA",
    icon: <LocationIcon2 color="#F4BB00" width="19" height="16" />,
  },
];

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row px-5 gap-10">
      <div className="flex flex-col gap-5 w-full">
        <div className="">
          <div className="flex gap-[10px]   items-center">
            <p data-aos="fade-up" className="text-5xl font-semibold">Get In </p>
            <span className=" overflow-hidden ">
              <div data-aos="slide-right" data-aos-easing='ease-out'  className="font-medium" >

              <Image
              
              src={PrivacyLine}
              alt="arrow image"
              className=" object-contain w-[113px]"
              />
              </div>
            </span>
          </div>
          <div className="overflow-hidden">

          <p data-aos="slide-right" data-aos-easing='ease-out'  data-aos-delay="1000"   className="text-[38px] font-semibold">Touch With Us</p>
          </div>
        </div>

        <div className="max-w-[586px] overflow-hidden">
          <p data-aos="slide-right" data-aos-easing='ease-out'  data-aos-delay="1000"   className="text-base font-normal ">
            We're here to help! Whether you have a question about our services,
            need assistance with your account, or want to provide feedback, our
            team is ready to assist you. We strive to respond quickly and make
            sure you have the best experience possible. Feel free to reach out
            anytime—we’re always happy to support you.
          </p>
        </div>

        <div className="relative border-[3px] w-full border-white rounded-4xl overflow-hidden p-5 ">
          <div   className="absolute   h-full   inset-0 z-0">
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

          <div className="relative z-10 flex flex-col gap-5 ">
            {contactlist.map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  {v.icon}
                </div>
                <div className="overflow-hidden">
                  <p data-aos="slide-right" data-aos-easing='ease-out'   data-aos-offset="0"  className="font-medium">{v.title}</p>
                  <p data-aos="slide-right"   data-aos-offset="0" data-aos-easing='ease-out'  data-aos-delay="1000"   className="text-sm" >{v.dec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[20px] border-[3px] border-white w-full relative h-[184px] flex justify-center items-center  overflow-hidden">
          <div className="absolute top-0 z-0 -right-10">
            <Image src={Mapimage} alt="map image " className="object-cover" />
          </div>
          <div className="absolute top-0 right-0 w-full h-full bg-[#1A202C4D]/30 backdrop-blur-sm z-0" />
          <div className="relative z-10">
            <a
              href="https://www.google.com/maps?q=16192+Coastal+Highway+Lewes,+DE+19958"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#05BD73] py-3 px-4 rounded-full border-[3px] hover:scale-105 transition-all duration-200 text-white border-white flex gap-1 justify-center items-center"
            >
              See on Google Map
              <span className="-rotate-45">
                <ArrowRight width="14" height="18" color={"white"} />
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
