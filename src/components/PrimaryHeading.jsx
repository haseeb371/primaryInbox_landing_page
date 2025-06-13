import React from "react";
import PrimaryButtom from "./buttons/PrimaryButtom";

const PrimaryHeading = ({
  dotText = "Trusted by Industry Leaders",
  leftText = "Global Trust",
  rightText = " Join top companies worldwide who rely on our platform for innovation and reliability.Experience seamless integration and unmatched support tailored to your needs.",
}) => {
  return (
    <div className="w-full ">
      <div className="container mx-auto  flex flex-col md:flex-row gap-2 justify-between overflow-hidden ">
    <div className="overflow-hidden">
          <p data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500' className="rounded-full w-fit  flex items-center py-1 px-2 gap-1 text-white text-sm font-semibold  bg-linear-to-r from-[#8E2DE2] to-[#4A00E0] ">
            <span data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500' className="w-[7px] h-[7px] rounded-full bg-white"></span>
            <span data-aos="fade-right" data-aos-easing='ease-out' data-aos-duration='1500' >

            {dotText}
            </span>
          </p>

          <p  data-aos="slide-right" data-aos-easing='ease-out' data-aos-duration='1500' className="uppercase  text-3xl md:text-[48px] font-semibold ">{leftText}</p>
        </div>

        <div className="grid gap-3 overflow-hidden">
          <p data-aos="slide-left" data-aos-easing='ease-out'  data-aos-duration='1500' className=" text-[12px] md:text-base font-medium max-w-[592px]">{rightText}</p>
          <div data-aos="slide-left" data-aos-easing='ease-out' data-aos-duration='1500'>

          <PrimaryButtom  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryHeading;
// import React from "react";
// import PrimaryButtom from "./buttons/PrimaryButtom";

// const PrimaryHeading = ({
//   dotText = "Trusted by Industry Leaders",
//   leftText = "Global Trust",
//   rightText = " Join top companies worldwide who rely on our platform for innovation and reliability.Experience seamless integration and unmatched support tailored to your needs.",
// }) => {
//   return (
//     <div className="w-full ">
//       <div className="container mx-auto md:flex justify-between ">
//         <div>
//           <p data-aos="fade-down" className="rounded-full w-fit  flex items-center py-1 px-2 gap-1 text-white text-sm font-semibold  bg-linear-to-r from-[#8E2DE2] to-[#4A00E0] ">
//             <span data-aos="fade-right" className="w-[7px] h-[7px] rounded-full bg-white"></span>
//             <p data-aos="fade-left" >

//             {dotText}
//             </p>
//           </p>

//           <p  data-aos="fade-right" className="uppercase  text-3xl md:text-[48px] font-semibold ">{leftText}</p>
//         </div>

//         <div className="grid gap-3">
//           <p data-aos="fade-left" className=" text-[12px] md:text-base font-medium max-w-[592px]">{rightText}</p>
//           <div data-aos="fade-up">

//           <PrimaryButtom  />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PrimaryHeading;
