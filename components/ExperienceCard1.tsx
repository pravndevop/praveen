import React from "react";
import { motion } from "framer-motion";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="sm:w-32 w-20 sm:h-32 h-20 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://media.licdn.com/dms/image/C510BAQGPfT6chR598w/company-logo_200_200/0/1557677748827?e=1680739200&v=beta&t=hiJfB3WZ-llLYA-9R5ICAuTNdWGNRRsP1WO0Ks6L-Pw"
        alt="exp"
      />
      <div className="px-0 md:px-10">
        <h4 className="sm:text-4xl text-md font-light">Sofware Engineer</h4>
        <p className="font-bold sm:text-2xl text-sm  mt-1">
          NEXTEP ENGINEERING PVT LTD
        </p>
        <div className="flex space-x-2 my-2">
         
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZvXAFs02fg19pmpZiXpnFAi_1zaUqVQRjrcGNWMV40TvD5n_jBPRX1CFtw43Y_onExE&usqp=CAU"
            alt="react"
          />
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png"
            alt="react"
          />
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
            alt="react"
          />
        
        </div>
        <p className="uppercase py-4 sm:text-sm text-xs text-gray-300">JAN 01 2023 - PRESENT</p>
        <ul className="list disc space-y-4 ml-5 sm:text-lg text-xs">
          <li>Utilized  software engineering expertise to develop product throughout the software lifecycle to boost business efficiency, from ideation and requirements definition through development and successful deployment. </li>
          <li>Enhanced the application's features to effectively fix the bug and optimize the overall performance, reliability and efficiency. </li>
          <li>Demonstrated expertise in transiating the client's specific needs into easy-to-understand software solution during sales presentation. </li>
         
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
