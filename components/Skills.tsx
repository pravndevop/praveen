import React from "react";
import { motion } from "framer-motion";
import Skill from "./skill/Skill";
import Skill2 from "./skill/Skill2";
import Skill3 from "./skill/Skill3";
import Skill4 from "./skill/Skill4";
import Skill5 from "./skill/Skill5";
import Skill6 from "./skill/Skill6";
import Skill7 from "./skill/Skill7";
import Skill8 from "./skill/Skill8";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-3xl text-md">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 sm:text-sm text-xs">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill2 />
        <Skill3 />
        <Skill4 />
        <Skill5 />
        <Skill6 />
        <Skill7 />
        <Skill8 />
        {/* <Skill9 /> */}
        {/* <Skill10 /> */}
        {/* <Skill11 /> */}
        {/* <Skill12/> */}
      </div>
    </motion.div>
  );
}

export default Skills;
