import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-75px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0.95, filter: "blur(10px)" }, // Blur and slight shrink
          visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },    // Clear and full size
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8, delay: 0.25, type: "spring", damping: 20 }} // Spring physics for premium feel
      >
        {children}
      </motion.div>
    </div>
  );
};