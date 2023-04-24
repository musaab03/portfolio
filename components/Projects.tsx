import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import apiPic from "../public/api.png";
import escaperoomPic from "../public/escape_room.png";

import herokuPic from "../public/heroku.png";
import nodePic from "../public/node.png";
import psqlPic from "../public/psql.png";
import expressPic from "../public/express.png";
import jestPic from "../public/jest.png";
import pythonPic from "../public/python.png";
import upPic from "../public/up.webp";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      pic: escaperoomPic,
      title: "GREEN ESCAPE ROOMS",
      tech: [pythonPic],
      desc: "TEXT BASED COMMAND LINE GAME",
      link: "",
      repo: "https://github.com/musaab03/house_of_games_api",
    },
    {
      pic: apiPic,
      title: "HOUSE OF GAMES API",
      tech: [nodePic, psqlPic, expressPic, jestPic, herokuPic],
      desc: "BACKEND FOR A GAME REVIEW WEB APP",
      link: "",
      repo: "https://github.com/musaab03/house_of_games_api",
    },
  ];

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
      className="h-screen flex relative flex-col text-center md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-[6rem] md:top-[4.75rem] tracking-[15px] text-white/60 text-2xl">
        PROJECTS{<br />}
        <span className="text-xs mr-2 tracking-[7px]">AND THIS WEBSITE!</span>
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
        <Link href="#skills">
          <Image
            src={upPic}
            alt=""
            className="h-16 w-16 rounded-full grayscale hover:grayscale-0 transition-all duration-300"
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
        className="w-full flex space-x-5 overflow-x-scroll p-6 md:max-w-5xl snap-x snap-mandatory mt-4 md:mt-20 scroll-mb-6 scrollbar scrollbar-thumb-[#A8E1F4] scrollbar-track-black/20"
      >
        {projects.map((project, i) => (
          <article className="group projectCard">
            <motion.div
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              <Image
                src={project.pic}
                alt=""
                className="projectImage grayscale group-hover:grayscale-0 transition-all duration-200 group-hover:shadow-[#A8E1F4]/10 group-hover:shadow-md"
                key={i}
              />
            </motion.div>
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
                delay: 0.75,
                duration: 1.5,
              }}
            >
              <div className="px-0 md:px-10 space-y-5">
                <h4 className="text-xl tracking-[1px] md:tracking-[3px]">
                  {project.title}
                </h4>
                <div className="flex space-x-2 my-2 justify-center">
                  {project.tech.map((t, i) => (
                    <Image
                      src={project.tech[i]}
                      alt=""
                      className="h-10 w-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-200"
                      key={i}
                    />
                  ))}
                </div>
                <ul className="space-y-4">
                  <li className=" font-light italic">{project.desc}</li>
                  <li className="flex space-x-4 md:space-x-14 justify-center">
                    {project.link !== "" ? (
                      <Link href={project.link} target="_blank">
                        <button className="heroButton grayscale group-hover:grayscale-0">
                          VISIT
                        </button>
                      </Link>
                    ) : (
                      ""
                    )}
                    <Link href={project.repo} target="_blank">
                      <button className="heroButton grayscale group-hover:grayscale-0">
                        GITHUB
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </article>
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
        <Link href="#contact">
          <Image
            src={upPic}
            alt=""
            className="h-16 w-16 rounded-full scale-y-[-1] grayscale hover:grayscale-0 transition-all duration-300"
          />
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Projects;
