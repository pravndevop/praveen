import React from "react";
import exp1 from "../assets/channels4_profile.jpg"
import Image from "next/image";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <Image
        
        className="sm:w-32 w-20 sm:h-32 h-20 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={exp1}
        alt="exp"
      />
      <div className="px-0 md:px-10">
        <h4 className="sm:text-4xl text-md font-light">Sofware Engineer</h4>
        <p className="font-bold sm:text-2xl text-sm  mt-1">
          NEXTEP ENGINEERING PVT LTD
        </p>
        
        <p className="uppercase py-4 sm:text-sm text-xs text-gray-300">JAN 01 2023 - PRESENT</p>
        <ul className="list disc space-y-4 ml-5 sm:text-lg text-xs">
          <li>Utilized  software engineering expertise to develop product throughout the software lifecycle to boost business efficiency, from ideation and requirements definition through development and successful deployment. </li>
          <li>Enhanced the applications features to effectively fix the bug and optimize the overall performance, reliability and efficiency. </li>
          <li>Demonstrated expertise in transiting the clients specific needs into easy-to-understand software solution during sales presentation. </li>
         
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
