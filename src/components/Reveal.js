import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const revealAnimation = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.35,
    },
  },
};

const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        variants={revealAnimation}
        initial="hidden"
        animate={mainControls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
