import React from "react";
import { motion } from "framer-motion";
import image from "../images/myhero.jpg";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-3xl text-md">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt="img"
          className="mb-0 mt-20 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-45 md:h-95 xl:w-[2000px] xl:h-[600px]"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
        </h4>
        <p className="text-base">
          A dedicated software engineer focusing on trending technologies like
          IoT, RFID, label and barcode software development, AIDC and industry
          4.0 and familiar with UI/UX design and development, usage of scripting
          language and its library, and framework. I am interested in scrum and
          agile project management methodologies. Passionate at Engineering,
          project management, leadership, investing, innovation and startup.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
