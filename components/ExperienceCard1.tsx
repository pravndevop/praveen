import React from "react";
import exp1 from "../assets/channels4_profile.jpg";
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

        <p className="uppercase py-4 sm:text-sm text-xs text-gray-300">
          JAN 01 2023 - PRESENT
        </p>
        <ul className="list disc space-y-4 ml-5 sm:text-lg text-xs">
          <li>
            Designed and developed software solutions in collaboration with a
            team of developers to meet client requirements.{" "}
          </li>
          <li>
            Contributed to the full software development life cycle including
            requirements gathering, design, development, testing, and
            maintenance.{" "}
          </li>
          <li>
            Worked with project managers and team members to ensure project
            milestones were met on time and within budget.{" "}
          </li>
          <li>
            Documented software development processes, wrote technical
            documentation, and provided support to end-users.{" "}
          </li>
          <li>
            Stayed up-to-date with new software development technologies and
            trends through self-learning and team training sessions.{" "}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
