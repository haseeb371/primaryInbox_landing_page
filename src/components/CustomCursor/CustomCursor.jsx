"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const inner = innerRef.current;

    let mouseX = 0,
      mouseY = 0;
    let currentX = 0,
      currentY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const animate = () => {
      currentX = lerp(currentX, mouseX, 0.10);
      currentY = lerp(currentY, mouseY, 0.10);

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      requestAnimationFrame(animate);
    };

    const updateMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Check if hovered element is clickable
      const target = e.target;
      const isClickable =
        target.closest("a, button, [role='button'], [onclick], [data-clickable]") !== null;

      // Toggle visibility
      if (isClickable) {
        cursor.style.opacity = "0";
      } else {
        cursor.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", updateMouse);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden bg-primary/20  lg:flex justify-center items-center z-[999999] pointer-events-none fixed top-0 left-0 transition-opacity duration-300"
    >
      
    </div>
  );
};

export default CustomCursor;
