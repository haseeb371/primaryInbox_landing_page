
"use client";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
  useVelocity,
  useAnimationControls,
} from "motion/react";

export const DraggableCardBody = ({
  className,
  children,
  style: externalStyle = {},   // NEW: style coming from the parent
  ...rest                      // NEW: any other props (onClick, etc.)
}) => {
  // ----- physics & tilt boilerplate (unchanged) -----
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef(null);
  const controls = useAnimationControls();
  const [constraints, setConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const velocityX = useVelocity(mouseX);
  const velocityY = useVelocity(mouseY);

  const spring = { stiffness: 100, damping: 20, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), spring);
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), spring);
  const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), spring);
  const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), spring);

  useEffect(() => {
    const update = () => {
      setConstraints({
        top: -100,
        left: -window.innerWidth / 10,
        right: window.innerWidth / 10,
        bottom: window.innerHeight / 5,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = cardRef.current?.getBoundingClientRect() ?? {};
    mouseX.set(clientX - (left + width / 2));
    mouseY.set(clientY - (top + height / 2));
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={constraints}
      {...rest}                                
      style={{
        ...externalStyle,                      
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className={cn(
        "relative h-[226px] w-[276px] overflow-hidden rounded-2xl bg-white p-1 shadow-2xl transform-3d",
        className
      )}
    >
      {children}

      {/* glare layer */}
      <motion.div
        style={{ opacity: glareOpacity }}
        className="pointer-events-none absolute inset-0 bg-white select-none"
      />
    </motion.div>
  );
};

export const DraggableCardContainer = ({ className, children }) => (
  <div className={cn("[perspective:3000px]", className)}>{children}</div>
);



// "use client"
// import { cn } from "@/lib/utils"
// import { useRef, useState, useEffect } from "react"
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   animate,
//   useVelocity,
//   useAnimationControls,
// } from "motion/react"

// export const DraggableCardBody = ({ className, children }) => {
//   const mouseX = useMotionValue(0)
//   const mouseY = useMotionValue(0)
//   const cardRef = useRef(null)
//   const controls = useAnimationControls()
//   const [constraints, setConstraints] = useState({
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//   })

//   // physics biatch
//   const velocityX = useVelocity(mouseX)
//   const velocityY = useVelocity(mouseY)

//   const springConfig = {
//     stiffness: 100,
//     damping: 20,
//     mass: 0.5,
//   }

//   const rotateX = useSpring(useTransform(mouseY, [-300, 300], [25, -25]), springConfig)
//   const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-25, 25]), springConfig)

//   const opacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]), springConfig)

//   const glareOpacity = useSpring(useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]), springConfig)

//   useEffect(() => {
//     // Update constraints when component mounts or window resizes
//     const updateConstraints = () => {
//       if (typeof window !== "undefined") {
//         setConstraints({
//           top: -100,
//           left: -window.innerWidth / 10,
//           right: window.innerWidth / 10,
//           bottom: window.innerHeight / 5,
//           // top: -window.innerHeight / 2,
//           // left: -window.innerWidth / 2,
//           // right: window.innerWidth / 2,
//           // bottom: window.innerHeight / 2,
//         })
//       }
//     }

//     updateConstraints()

//     // Add resize listener
//     window.addEventListener("resize", updateConstraints)

//     // Clean up
//     return () => {
//       window.removeEventListener("resize", updateConstraints)
//     }
//   }, [])

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e
//     const { width, height, left, top } = cardRef.current?.getBoundingClientRect() ?? {
//       width: 0,
//       height: 0,
//       left: 0,
//       top: 0,
//     }
//     const centerX = left + width / 2
//     const centerY = top + height / 2
//     const deltaX = clientX - centerX
//     const deltaY = clientY - centerY
//     mouseX.set(deltaX)
//     mouseY.set(deltaY)
//   }

//   const handleMouseLeave = () => {
//     mouseX.set(0)
//     mouseY.set(0)
//   }

//   return (
//     <motion.div
//       ref={cardRef}
//       drag
//       dragConstraints={constraints}
//       onDragStart={() => {
//         document.body.style.cursor = "grabbing"
//       }}
//       onDragEnd={(event, info) => {
//         document.body.style.cursor = "default"

//         controls.start({
//           rotateX: 0,
//           rotateY: 0,
//           transition: {
//             type: "spring",
//             ...springConfig,
//           },
//         })
//         const currentVelocityX = velocityX.get()
//         const currentVelocityY = velocityY.get()

//         const velocityMagnitude = Math.sqrt(currentVelocityX * currentVelocityX + currentVelocityY * currentVelocityY)
//         const bounce = Math.min(0.8, velocityMagnitude / 1000)

//         animate(info.point.x, info.point.x + currentVelocityX * 0.3, {
//           duration: 0.8,
//           ease: [0.2, 0, 0, 1],
//           bounce,
//           type: "spring",
//           stiffness: 50,
//           damping: 15,
//           mass: 0.8,
//         })

//         animate(info.point.y, info.point.y + currentVelocityY * 0.3, {
//           duration: 0.8,
//           ease: [0.2, 0, 0, 1],
//           bounce,
//           type: "spring",
//           stiffness: 50,
//           damping: 15,
//           mass: 0.8,
//         })
//       }}
//       style={{
//         rotateX,
//         rotateY,
//         opacity,
//         willChange: "transform",
//       }}
//       animate={controls}
//       whileHover={{ scale: 1.02 }}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       className={cn(
//         "relative h-[226px] w-[276px] overflow-hidden rounded-2xl bg-white p-1  shadow-2xl transform-3d ",
//         className,
//       )}
//     >
//       {children}
//       <motion.div
//         style={{
//           opacity: glareOpacity,
//         }}
//         className="pointer-events-none absolute inset-0 bg-white select-none"
//       />
//     </motion.div>
//   )
// }

// export const DraggableCardContainer = ({ className, children }) => {
//   return <div className={cn("[perspective:3000px]", className)}>{children}</div>
// }
