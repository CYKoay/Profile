import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: JSX.Element;
}

const Motion = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const sideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      sideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: "hidden", position: "relative" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={sideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#06FFBD",
          zIndex: 20,
        }}
      ></motion.div>
    </div>
  );
};

export default Motion;
