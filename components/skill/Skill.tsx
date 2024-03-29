import React from "react";
// import { motion } from "framer-motion";
import Image from "next/image";
import skill from "./assets/node.jpg"
type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <Image
        src={skill}
        alt="react" 
        className="rounded-full border border-gray-500 object-cover w-16 h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
            <p className="sm:text-3xl text-lg font-bold text-black opacity-100">50%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
