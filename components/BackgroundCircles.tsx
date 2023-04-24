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
        scale: [1, 1.15, 1.35, 1],
        opacity: [0.1, 0.2, 0.3, 0.55, 0.1, 0.1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-gray-200 rounded-full h-[200px] w-[200px] mt-52 lg:mt-[15rem] animate-ping" />
      <div className="absolute border border-gray-200 rounded-full h-[300px] w-[300px] mt-52 lg:mt-[15rem]" />
      <div className="absolute border border-[#7dd3fc] rounded-full h-[500px] w-[500px] mt-52 lg:mt-[15rem] opacity-100" />
      <div className="absolute border border-gray-200 rounded-full h-[650px] w-[650px] opacity-20 mt-52 lg:mt-[15rem] animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
