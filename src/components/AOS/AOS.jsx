'use client'
import React, {  useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";


const AOS = ({children}) => {
 useEffect(() => {
        Aos.init({
          duration: 1000, // Animation duration in ms
          easing: "ease-in-out-back", // Animation easing
          once: false, // Whether animation happens only once
          offset:0
        });
      }, []);
    return (
    <> {children}</>
  )
}

export default AOS