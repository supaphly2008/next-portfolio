import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 1],
        opacity: 1,
      }}
      transition={{
        duration: 3,
      }}
      className="relative flex justify-center items-center mt-20"
    >
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping" />
      <div className="absolute border border-[#F7AB0A] opacity-10 rounded-full h-[300px] w-[300px] md:h-[500px] md:w-[500px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[800px] w-[800px] mt-52 animate-ping" />
    </motion.div>
  );
};

export default BackgroundCircles;
