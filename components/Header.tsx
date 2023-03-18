import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
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
          duration: 1.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/praveenputtappa/"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        <SocialIcon
          url="https://twitter.com/pravypz"
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
        />
        
         <SocialIcon
          url="https://github.com/pravndevop?tab=repositories"
          fgColor="gray"
          bgColor="transparent"
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
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {" "}
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          target="_blank"
          url="https://drive.google.com/file/d/1ITzwEzuvsGgR66oVlPISYQoQNaf5iRSx/view?usp=sharing"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          <Link href="https://drive.google.com/file/d/1ITzwEzuvsGgR66oVlPISYQoQNaf5iRSx/view?usp=sharing" target="_blank">Resume</Link>
        </p>
        {/* </Link> */}
      </motion.div>
    </header>
  );
}

export default Header;
