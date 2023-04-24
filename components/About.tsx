import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import hoodiePic from "../public/laptop.jpg";

import upPic from "../public/up.png";
import downPic from "../public/down.png";
import Link from "next/link";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md-text-left md:flex-row max-w-8xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[5.75rem] xl:top-[6rem] tracking-[15px] text-white/60 text-2xl ml-4">
        ABOUT
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
        <Link href="#top">
          <Image
            src={upPic}
            alt=""
            className="h-16 w-16 rounded-full hover:grayscale transition-all duration-300 hover:shadow-[#A8E1F4]/50 hover:shadow-lg"
          />
        </Link>
      </motion.div>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
        }}
      >
        <Image
          src={hoodiePic}
          alt=""
          className="-mb-20 mt-8 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[20rem] xl:h-[27rem] 2xl:w-[22rem] 2xl:h-[29rem]"
        />
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
          delay: 0.5,
        }}
        className="space-y-5 px-0"
      >
        <h4 className="text-2xl font-semibold">
          A{" "}
          <span className="underline decoration-[#A8E1F4] tracking-[3px]">
            Little
          </span>{" "}
          About Me
        </h4>
        <p className="text-base w-80 md:w-80 text-justify">
          Hi there! My name is Musaab and I&apos;m a junior software developer
          with a passion for creating innovative and functional solutions. I
          have experience working with JavaScript and Python, and I love the
          challenge of finding creative ways to solve problems using these
          technologies. As a developer, I am committed to writing clean,
          efficient code and continuously improving my skills. When I&apos;m not
          coding, you can usually find me reading about the latest developments
          in technology or exploring the great outdoors. I&apos;m excited to see
          what the future holds in the world of software development!
        </p>
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
        <Link href="#skills">
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

export default About;
