import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import upPic from "../public/up.webp";
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
    flaskPic,
    seleniumPic,
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
      <h3 className="absolute top-[9rem] md:top-[4.75rem] tracking-[15px] text-white/60 text-2xl">
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
            className="h-16 w-16 rounded-full grayscale hover:grayscale-0 transition-all duration-300"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: 200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
        }}
        className="grid grid-cols-4 gap-6"
      >
        {skills.map((skill, i) => (
          <Image
            src={skill}
            className="w-16 h-16 xl:w-24 xl:h-24 object-contain shadow-inner hover:scale-125 transition-all duration-300 hover:bg-[#A8E1F4] p-2"
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
            src={upPic}
            alt=""
            className="h-16 w-16 rounded-full scale-y-[-1] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
