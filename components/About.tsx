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
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-3xl text-lg">
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
      <div className="sm:space-y-10 space-y-2 px-0 md:px-10 ">
        <h4 className="sm:text-4xl text-2xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          Background
        </h4>
        <p className="sm:text-base text-sm">
        As a software engineer with expertise in front-end development, I am passionate about creating visually appealing and user-friendly interfaces that enhance the user experience. With 1 years of experience, I have a deep understanding of front-end technologies such as HTML, CSS, JavaScript, React, Tailwind and Bootstrap, and have worked on projects ranging from single-page applications to complex web applications. My skills in UI/UX design, prototyping, and testing enable me to create elegant solutions that meet business needs and exceed user expectations. With a strong focus on collaboration and continuous learning, I thrive in dynamic environments and enjoy working with cross-functional teams to deliver innovative solutions that drive business success.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
