import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-30 p-5 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center space-x-3"
      >
        <SocialIcon
          url="https://twitter.com/mus0161"
          fgColor="transparent"
          bgColor="#A8E1F4"
          className="hover:bg-gray-600 rounded-full shadow-[#A8E1F4]/20 shadow-lg"
          target="_blank"
        />
        <SocialIcon
          url="https://instagram.com/musssss19"
          fgColor="transparent"
          bgColor="#A8E1F4"
          className="hover:bg-gray-600 rounded-full shadow-[#A8E1F4]/20 shadow-lg"
          target="_blank"
        />
      </motion.div>


      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center cursor-pointer space-x-3"
      >
        <SocialIcon
          url="https://linkedin.com/in/musaab-uppal"
          fgColor="transparent"
          bgColor="#A8E1F4"
          className="hover:bg-gray-600 rounded-full shadow-[#A8E1F4]/20 shadow-lg"
          target="_blank"
        />
        <SocialIcon
          url="https://github.com/musaab03"
          fgColor="transparent"
          bgColor="#A8E1F4"
          className="hover:bg-gray-600 rounded-full shadow-[#A8E1F4]/20 shadow-lg"
          target="_blank"
        />
      </motion.div>
    </header>
  );
}

export default Header;
