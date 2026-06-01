import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import OutReach from "@/components/OutReach";
import Faqs from "@/components/Faqs";
import AOS from "@/components/AOS/AOS";
import CustomCursor from "@/components/CustomCursor/CustomCursor";
import InnerCursor from "@/components/CustomCursor/InnerCursor";
import WebsiteWrapper from "@/components/WebsiteWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Cold Email Outreach Tool | Scale with Multiple Mailboxes",
  description:
    "Primary Inbox is a powerful cold email outreach tool that improves outreach efforts, generates high-quality leads, mail warm-ups and automates campaigns.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NQFTZ2QLXS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NQFTZ2QLXS');
          `}
        </Script>
        <AOS>
          <NavBar />
          <WebsiteWrapper>{children}</WebsiteWrapper>
          <CustomCursor />
          <InnerCursor />
          {/* <Footer /> */}
        </AOS>
      </body>
    </html>
  );
}
