import React from "react";
import { motion } from "framer-motion";
type Props = {};
import Link from "next/link";

function Projects({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-3xl text-sm">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth">
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:h-[400px] h-[200px]"
            src="https://user-images.githubusercontent.com/109017689/204088002-8b5eac50-f794-45c2-bd54-f79c8e9dda4a.PNG"
            alt=""
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="sm:text-4xl text-lg font-semibold text-center">
              {" "}
              <span className="underline decoration-[#f7ab0a]/50">
                Case Study 1 :
              </span>{" "}
              Modern Bank App
            </h4>
            <div className="flex justify-between">
              <Link
                href="https://bank-modern-app-omega.vercel.app/"
                className="bg-[#f7ab0a] sm:py-3 py-1 px-6 rounded-md text-black font-bold sm:text-md text-sm"
                target="_blank"
              >
                Demo
              </Link>
              <Link
                href="https://github.com/pravndevop/bank_modern_app/tree/master/bank_modern_app"
                className="bg-[#f7ab0a] sm:py-3 py-1 px-6 rounded-md text-black font-bold sm:text-md text-sm"
                target="_blank"
              >
                Source code
              </Link>
            </div>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:h-[400px] h-[200px]"
            src="https://user-images.githubusercontent.com/109017689/204120587-a36d0dba-3347-4468-84de-116b3f0895ec.PNG"
            alt=""
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="sm:text-4xl text-lg font-semibold text-center">
              {" "}
              <span className="underline decoration-[#f7ab0a]/50">
                Case Study 2 :
              </span>{" "}
              Movie Website
            </h4>
            <div className="flex justify-between">
              <Link
                href="https://movie-website-vkrw.vercel.app/"
                className="bg-[#f7ab0a] sm:py-3 py-1 px-6 rounded-md text-black font-bold sm:text-md text-sm"
                target="_blank"
              >
                Demo
              </Link>
              <Link
                href="https://github.com/pravndevop/movie-website"
                className="bg-[#f7ab0a] sm:py-3 py-1 px-6 rounded-md text-black font-bold sm:text-md text-sm"
                target="_blank"
              >
                Source code
              </Link>
            </div>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 ">
          <motion.img
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:h-[400px] h-[200px]"
            src="https://user-images.githubusercontent.com/109017689/210060417-546fa10d-2f80-4d18-8690-eece04a313dc.PNG"
            alt=""
          />
          <div className="space-y-10 px-0 md:px-10 max-w-6xl">
            <h4 className="sm:text-4xl text-lg font-semibold text-center">
              {" "}
              <span className="underline decoration-[#f7ab0a]/50">
                Case study 3 of 3:
              </span>{" "}
              E-commerce
            </h4>
            <div className="flex justify-between">
              <Link
                href="https://ecommerce-three-dusky.vercel.app/"
                className="bg-[#f7ab0a] sm:py-3 py-1 px-6 rounded-md text-black font-bold sm:text-md text-sm"
                target="_blank"
              >
                Demo
              </Link>
              <Link
                href="https://github.com/pravndevop/ecommerce"
                className="bg-[#f7ab0a] sm:py-3 py-1 px-6 rounded-md text-black font-bold sm:text-md text-sm"
                target="_blank"
              >
                Source code
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
