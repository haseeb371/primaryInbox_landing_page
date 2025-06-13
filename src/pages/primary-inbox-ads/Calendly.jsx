"use client"
import { useEffect } from 'react';


export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="calendly-inline-widget h-[900px] md:h-[960px] xl:h-[720px]"
      data-url="https://calendly.com/voltic-ai/primary-inbox"
      style={{ minWidth: '320px' }}
    />
  );
}
