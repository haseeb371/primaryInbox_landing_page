
"use client";
import { ArrowRight, FaqsIcon } from "@/assets/icons";
import { MainBG, ShieldCheck } from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";

const sidebarmenu = [
  {
    Name: "DNS",
    subMenu: [
      { subName: "MX Lookup", des: "Quickly verify the mail exchange servers for any domain to ensure reliable email delivery." },
      { subName: "TXT Lookup", des: "Verify Domain Ownership and Email Configurations via TXT Records." },
      { subName: "A Lookup", des: "Perform an A record DNS lookup to retrieve the IP address of a domain." },
      { subName: "CNAME Lookup", des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to." },
      { subName: "NS Lookup", des: "Retrieve the Name Server (NS) records to identify which DNS servers are responsible for a domain." },
    ],
  },
  {
    Name: "DMARC",
    subMenu: [
      { subName: "DMARC Lookup", des: "Retrieve the DMARC record to check and verify a domain's email authentication and security policy." },
      { subName: "DMARC Generator", des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to." },
    ],
  },

  {
    Name: "Email Health",
    des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to.",
  },
  {
    Name: "Blacklist Check",
    des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to.",
  },
];

const LeftSideBar = ({ componentName, setcomponentName }) => {
  const [subMenuOpen, setsubMenuOpen] = useState(() =>
    sidebarmenu.reduce((acc, item) => {
      if (item.subMenu) acc[item?.Name] = true;
      return acc;
    }, {})
  );

  const handleOnClick = (menu) => {
    if (menu.subMenu) {
      setsubMenuOpen((prev) => ({
        ...prev,
        [menu?.Name]: !prev[menu?.Name],
      }));
    } else {
      // For submenu items, use subName and des
      if (menu.subName) {
        setcomponentName({
          Name: menu.subName,
          des: menu.des
        });
      } 
      // For main menu items without subMenu, use Name and des
      else {
        setcomponentName({
          Name: menu?.Name,
          des: menu.des
        });
      }
    }
  };

  return (
    <div className="border-[3px] relative border-white rounded-3xl py-5 flex flex-col gap-5 px-4 max-w-[277px] h-full">
      <div className="absolute  h-full    overflow-hidden inset-0 -z-10">
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
      <div className="flex flex-col justify-center items-center gap-2">
        <Image src={ShieldCheck} alt="check icon" className="w-12 " />
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-base font-semibold ">
            Email Authentication Tools
          </p>
          <p className="text-sm font-normal  text-center">
            Ensure email security and verify communication authenticity.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {sidebarmenu.map((v, i) => (
          <button key={i} className="flex flex-col gap-2">
            <div
              onClick={() => handleOnClick(v)}
              className={`rounded-full transition-all duration-300 text-sm font-medium leading-4  w-full  p-[14px] flex justify-between items-center ${
                subMenuOpen[v?.Name] && "bg-primary text-white"
              }
              
              ${(componentName?.Name === v?.Name) && "bg-primary text-white"}
              
              `}
            >
              {v?.Name}
              <div
                className={` transition-all duration-500 ${
                  subMenuOpen[v?.Name] ? "rotate-180" : "rotate-0"
                }`}
              >
                {v.subMenu && (
                  <FaqsIcon
                    color={subMenuOpen[v?.Name] ? "white" : "black"}
                    width="16"
                    height="16"
                  />
                )}
              </div>
            </div>
            {v.subMenu && subMenuOpen[v?.Name] && (
              <div className="flex flex-col gap-1">
                {v.subMenu.map((subv, subi) => (
                  <div
                    onClick={() => handleOnClick(subv)}
                    key={subi}
                    className="flex items-center gap-1"
                  >
                    <span className={`min-w-[6px] min-h-[6px] mx-[7px] bg-black rounded-full transition-all duration-300 ${(componentName?.Name === subv.subName) && 'bg-primary' }`}>
                      {" "}
                    </span>
                    <div className={`p-3 flex w-full justify-between transition-all duration-300 items-center rounded-full  ${(componentName?.Name === subv.subName) && 'bg-primary text-white' } `}>
                      <p className="text-sm font-medium leading-4">
                        {subv.subName}
                      </p>
                      {(componentName?.Name === subv.subName) && (
                        <div data-aos="fade-right">
                        <ArrowRight color="white" width="16" height="16" />
                      </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;


// "use client";
// import { ArrowRight, FaqsIcon } from "@/assets/icons";
// import { ShieldCheck } from "@/assets/images";
// import Image from "next/image";
// import React, { useState } from "react";

// const sidebarmenu = [
//   {
//     Name: "DNS",
//     subMenu: [
//       { subName: "MX Lookup", des: "Quickly verify the mail exchange servers for any domain to ensure reliable email delivery." },
//       { subName: "TXT Lookup", des: "Verify Domain Ownership and Email Configurations via TXT Records." },
//       { subName: "A Lookup", des: "Perform an A record DNS lookup to retrieve the IP address of a domain." },
//       { subName: "CNAME Lookup", des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to." },
//       { subName: "NS Lookup", des: "Retrieve the Name Server (NS) records to identify which DNS servers are responsible for a domain." },
//     ],
//   },
//   {
//     Name: "DMARC",
//     subMenu: [
//       { subName: "DMARC Lookup", des: "Retrieve the DMARC record to check and verify a domain's email authentication and security policy." },
//       { subName: "DMARC Generator", des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to." },
//     ],
//   },

//   {
//     Name: "Email Health",
//     des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to.",
//   },
//   {
//     Name: "Blacklist Check",
//     des: "Retrieve the Canonical Name (CNAME) record to identify the true domain a subdomain points to.",
//   },
// ];

// const LeftSideBar = ({ componentName, setcomponentName }) => {
// //   const [subMenuOpen, setsubMenuOpen] = useState({});
// const [subMenuOpen, setsubMenuOpen] = useState(() =>
//   sidebarmenu.reduce((acc, item) => {
//     if (item.subMenu) acc[item?.Name] = true;
//     return acc;
//   }, {})
// );
//   const handleOnClick = (menu) => {
//     if (menu.subMenu) {
//       setsubMenuOpen((prev) => ({
//         ...prev,
//         [menu?.Name]: !prev[menu?.Name],
//       }));
//     } else {
//       setcomponentName(menu?.Name || menu.subName);

     
//     }

   
//   };
//   return (
//     <div className="border-[3px] border-white rounded-3xl py-5 flex flex-col gap-5 px-4 max-w-[277px] h-full    ">
//       <div className="flex flex-col justify-center items-center gap-2">
//         <Image src={ShieldCheck} alt="check icon" className="w-12 " />
//         <div className="flex flex-col gap-1 justify-center items-center">

//         <p className="text-base font-semibold ">
//           Email Authentication Tools
//         </p>

//         <p className="text-sm font-normal  text-center">
//           Ensure email security and verify communication authenticity.
//         </p>
//         </div>
//       </div>
//       <div className="flex flex-col gap-2">
//         {sidebarmenu.map((v, i) => (
//           <button key={i} className="flex flex-col gap-2">
//             <div
//               onClick={() => handleOnClick(v)}
//               className={`rounded-full transition-all duration-300 text-sm font-medium leading-4  w-full  p-[14px] flex justify-between items-center ${
//                 subMenuOpen[v?.Name] && "bg-primary text-white"
//               }
              
//               ${(componentName?.Name === v?.Name) && "bg-primary text-white"}
              
//               `}
//             >
//               {v?.Name}
//               <div
//                 className={` transition-all duration-500 ${
//                   subMenuOpen[v?.Name] ? "rotate-180" : "rotate-0"
//                 }`}
//               >
//                 {v.subMenu && (
//                   <FaqsIcon
//                     color={subMenuOpen[v?.Name] ? "white" : "black"}
//                     width="16"
//                     height="16"
//                   />
//                 )}
//               </div>
//             </div>
//             {v.subMenu && subMenuOpen[v?.Name] && (
//               <div 
//               className="flex flex-col gap-1"
              
//               >
//                 {v.subMenu.map((subv, subi) => (
//                   <div
//                     onClick={() => handleOnClick(subv)}
//                     key={subi}
//                     className="flex items-center gap-1"
//                   >
//                     <span className={`min-w-[6px] min-h-[6px] mx-[7px] bg-black rounded-full transition-all duration-300 ${(componentName?.Name === subv.subName) && 'bg-primary' }`}>
//                       {" "}
//                     </span>
//                     <div className={`p-3 flex w-full justify-between transition-all duration-300 items-center rounded-full  ${(componentName?.Name === subv.subName) && 'bg-primary text-white' } `}>
//                       <p className="text-sm font-medium leading-4">
//                         {subv.subName}
//                       </p>
//                       {(componentName?.Name === subv.subName) && (
//                         <div data-aos="fade-right">
//                         <ArrowRight color="white" width="16" height="16" />
//                       </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LeftSideBar;
