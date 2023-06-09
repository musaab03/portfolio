import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import mePic from "../public/me.jpg";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Musaab",
      "aspiringSoftwareDeveloper.js",
      "<Looking For A Job />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="space-y-8 h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <motion.div
        initial={{
          scale: 0.5,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          className="relative rounded-full h-32 w-32 lg:h-48 lg:w-48 mx-auto object-cover hover:scale-105 transition-all duration-300"
          src={mePic}
          alt=""
        />
      </motion.div>

      <div className="space-y-4 mt-5 z-20">
        <h2 className="text-[#A8E1F4] pb-2 ml-5 tracking-[10px]  text-xs lg:text-lg ">
          SOFTWARE DEVELOPER
        </h2>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl">
          <span>{text}</span>
          <Cursor cursorColor="#A8E1F4" />
        </h1>

        <div className="max-sm:pt-3 lg:pt-5 lg:space-x-4 ">
          <Link href="#about">
            <button className="heroButton">ABOUT</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">SKILLS</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">PROJECTS</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">CONTACT</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
