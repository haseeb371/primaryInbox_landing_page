import {
  AccountsIcon,
  CampaignsIcon,
  ClientAccessIcon,
  DeliveryCheckerIcon,
  FaqsIcon,
  GlobalAnalyticsIcon,
  IntegrationIcon,
  MasterInboxIcon,
  NotificationsIcon,
  SettingIcon,
} from "@/assets/icons";
import { PLogo } from "@/assets/images";
import Image from "next/image";
import React from "react";
import RightSideHeroDashboard from "./RightSideHeroDashboard";

const FirstTabs = [
  {
    tabIcon: <CampaignsIcon />,
    tabName: "campaigns",
  },
  {
    tabIcon: <AccountsIcon />,
    tabName: "Accounts",
  },
  {
    tabIcon: <MasterInboxIcon />,
    tabName: "Master Inbox",
  },
  {
    tabIcon: <ClientAccessIcon />,
    tabName: "Client Access",
  },
  {
    tabIcon: <IntegrationIcon />,
    tabName: "Integration",
  },
  {
    tabIcon: <DeliveryCheckerIcon />,
    tabName: "Delivery Checker",
  },
  {
    tabIcon: <GlobalAnalyticsIcon />,
    tabName: "Global Analytics",
  },
];

const SecondTabs = [
  {
    tabIcon: <NotificationsIcon />,
    tabName: "Notifications",
  },
  {
    tabIcon: <SettingIcon />,
    tabName: "Setting",
  },
];

const HeroDashboard = () => {
  return (
    <div className="w-full relative z-10 h-full flex">
      <div className="hidden lg:flex p-[7px] bg-white/40 border-r-[1.5px] flex-col border-white h-full animate-sidebar ">
        <div className="w-full relative flex flex-col justify-center items-center py-[13.79px] animate-fade-in-delayed">
          <div className="z-10 w-[28px] absolute top-[22px] -right-[18px] h-[28px] bg-primary border-[1px] flex justify-center items-center rotate-90 border-white rounded-full">
            <FaqsIcon color="white" width="12" height="12" />
          </div>
          <Image
            src={PLogo}
            alt="Brand Logo"
            priority
            className="w-[60px] h-[60px]"
          />
          <p className="text-primary font-bold text-sm">Primary Inbox</p>
        </div>

        <div className="flex flex-col justify-between h-full animate-fade-in-delayed">
          <div>
            {FirstTabs.map((v, i) => (
              <div
                key={i}
                className={`flex text-[11.25px] font-medium gap-[6px] items-center py-[8.54px] pl-[11.38px] pr-[18.5px] rounded-full animate-slide-in ${
                  i === 0 ? "bg-primary text-white" : ""
                }`}
                style={{ animationDelay: `${1 + i * 0.1}s` }}
              >
                {v.tabIcon}
                <p>{v.tabName}</p>
              </div>
            ))}
          </div>
          <div>
            {SecondTabs.map((v, i) => (
              <div
                key={i}
                className={`flex text-[11.25px] font-medium gap-[6px] items-center py-[8.54px] pl-[11.38px] pr-[18.5px] rounded-full animate-slide-in`}
                style={{ animationDelay: `${1.7 + i * 0.1}s` }}
              >
                {v.tabIcon}
                <p>{v.tabName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full">
        <RightSideHeroDashboard />
      </div>
    </div>
  );
};

export default HeroDashboard;
// import {
//   AccountsIcon,
//   CampaignsIcon,
//   ClientAccessIcon,
//   DeliveryCheckerIcon,
//   FaqsIcon,
//   GlobalAnalyticsIcon,
//   IntegrationIcon,
//   MasterInboxIcon,
//   NotificationsIcon,
//   SettingIcon,
// } from "@/assets/icons";
// import { PLogo } from "@/assets/images";
// import Image from "next/image";
// import React from "react";
// import RightSideHeroDashboard from "./RightSideHeroDashboard";

// const FirstTabs = [
//   {
//     tabIcon: <CampaignsIcon />,
//     tabName: "campaigns",
//   },
//   {
//     tabIcon: <AccountsIcon />,
//     tabName: "Accounts",
//   },
//   {
//     tabIcon: <MasterInboxIcon />,
//     tabName: "Master Inbox",
//   },
//   {
//     tabIcon: <ClientAccessIcon />,
//     tabName: "Client Access",
//   },
//   {
//     tabIcon: <IntegrationIcon />,
//     tabName: "Integration",
//   },
//   {
//     tabIcon: <DeliveryCheckerIcon />,
//     tabName: "Delivery Checker",
//   },
//   {
//     tabIcon: <GlobalAnalyticsIcon />,
//     tabName: "Global Analytics",
//   },
// ];

// const SecondTabs = [
//   {
//     tabIcon: <NotificationsIcon />,
//     tabName: "Notifications",
//   },
//   {
//     tabIcon: <SettingIcon />,
//     tabName: "Setting",
//   },
// ];

// const HeroDashboard = () => {
//   return (
//     <div className="w-full relative z-10 h-full flex ">
//       <div className="min-w-[200px] increaseWidth hidden  lg:flex p-[7px] bg-white/40 border-r-[1.5px]  flex-col border-white h-full">
//         <div className="w-full relative flex flex-col justify-center items-center py-[13.79px] ">
//           <div className="z-10 w-[28px] absolute top-[22px] -right-[18px] h-[28px] bg-primary border-[1px] flex justify-center items-center rotate-90  border-white rounded-full">
//             <FaqsIcon color="white" width="12" height="12" />
//           </div>
//           <Image
//             src={PLogo}
//             alt="Brand Logo"
//             priority
//             className="w-[60px] h-[60px]"
//           />
//           <p className="text-primary font-bold text-sm ">Primary Inbox</p>
//         </div>

//         <div className="flex flex-col justify-between h-full">
//           <div>
//             {FirstTabs.map((v, i) => (
//               <div
//                 key={i}
//                 className={` flex text-[11.25px] font-medium gap-[6px] items-center  py-[8.54px] pl-[11.38px] pr-[18.5px] rounded-full ${
//                   i === 0 ? "bg-primary text-white" : ""
//                 } `}
//               >
//                 {v.tabIcon}
//                 <p>{v.tabName}</p>
//               </div>
//             ))}
//           </div>
//           <div>
//             {SecondTabs.map((v, i) => (
//               <div
//                 key={i}
//                 className={` flex text-[11.25px] font-medium gap-[6px] items-center  py-[8.54px] pl-[11.38px] pr-[18.5px] rounded-full `}
//               >
//                 {v.tabIcon}
//                 <p>{v.tabName}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//       <div className="w-full">

//         <RightSideHeroDashboard />
//       </div>
//     </div>
//   );
// };

// export default HeroDashboard;
