import React from "react";
import { motion } from "framer-motion";
import ExperienceCard1 from "./ExperienceCard1";
import ExperienceCard2 from "./ExperienceCard2"
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center sm:pt-0 pt-10 "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-3xl text-md">
        Experience
      </h3>

     <div className="w-full flex space-x-5 overflow-x-scroll snap-x snap-mandatory">
      <ExperienceCard1/>
      <ExperienceCard2/>


     </div>
    </motion.div>
  );
};

export default WorkExperience;
