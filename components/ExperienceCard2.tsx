import React from "react";
import exp2 from "../assets/edyoda_transparent_logo.55bcc00f.png"
import Image from "next/image";
type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden">
      <Image
        
         
        className="sm:w-32 w-20 sm:h-32 h-20 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={exp2}
        alt="exp"
      />
      <div className="px-0 md:px-10">
        <h4 className="sm:text-4xl text-md font-light">Full Stack Developer(trainee)</h4>
        <p className="font-bold sm:text-2xl text-sm mt-1">
          EDYODA (Zekelabs Technologies Pvt Ltd.)
        </p>
       
        <p className="uppercase py-4 text-gray-300 sm:text-sm text-xs">
          JUN 15 2022 - DEC 30 2022
        </p>
        <ul className="list disc space-y-4 ml-5 sm:text-lg text-xs">
          <li>
            Design and establish user-friendly websites including optimized
            check out page.
          </li>
          <li>
            Formulated and implement improvements on cleanup process and
            performance.
          </li>
          <li>
            Establish an interactive and dynamic websites that guarantees high
            traffic, page views, and maximum user experience.
          </li>
          <li>
            Devised various custom responsive react sites from design comps that
            include advanced react features.
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
