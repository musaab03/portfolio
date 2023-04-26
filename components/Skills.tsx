import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import upPic from "../public/up.png";
import downPic from "../public/down.png";

import jsPic from "../public/js.png";
import nodePic from "../public/node.png";
import expressPic from "../public/express.png";
import nextPic from "../public/next.png";
import reactPic from "../public/rc.webp";
import pythonPic from "../public/python.png";
import flaskPic from "../public/flask.png";
import seleniumPic from "../public/selenium.png";
import tsPic from "../public/ts.png";
import jestPic from "../public/jest.png";
import githubPic from "../public/github.png";
import linuxPic from "../public/linux.png";
import herokuPic from "../public/heroku.png";
import psqlPic from "../public/psql.png";
import htmlPic from "../public/html.png";
import cssPic from "../public/css.png";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    jsPic,
    nodePic,
    expressPic,
    psqlPic,
    reactPic,
    nextPic,
    pythonPic,
    htmlPic,
    cssPic,
    tsPic,
    jestPic,
    githubPic,
    linuxPic,
    herokuPic,
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      viewport={{
        once: true,
      }}
      className="min-h-screen flex relative flex-row text-center xl:flex-row max-w-[2000px] xl:px-10 justify-center md:justify-around xl:space-y-16 mx-auto items-center"
    >
      <h3 className="absolute top-[9rem] xs:top-[5.5rem] md:top-[4.75rem] tracking-[15px] text-white/60 text-2xl xs:text-sm">
        SKILLS
      </h3>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 2,
        }}
        className="max-lg:hidden"
      >
        <Link href="#about">
          <Image
            src={upPic}
            alt=""
            className="h-16 w-16 rounded-full hover:grayscale transition-all duration-300 hover:shadow-[#A8E1F4]/50 hover:shadow-lg"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="grid grid-cols-4 gap-6 xs:gap-4 xs:mt-14"
      >
        {skills.map((skill, i) => (
          <Image
            src={skill}
            className="w-16 h-16 xs:w-12 xs:h-12 xl:w-24 xl:h-24 object-contain shadow-inner hover:scale-125 transition-all duration-300 hover:bg-[#A8E1F4] p-2 cursor-pointer"
            alt=""
            key={i}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: 2,
        }}
        className="max-lg:hidden"
      >
        <Link href="#projects">
          <Image
            src={downPic}
            alt=""
            className="h-16 w-16 rounded-full hover:grayscale transition-all duration-300 hover:shadow-[#A8E1F4]/50 hover:shadow-lg"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
