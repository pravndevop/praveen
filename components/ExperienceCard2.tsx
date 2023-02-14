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
        src="https://p.urbanpro.com/tv-prod/member/photo/6691673-medium190ap.jpg"
        alt="exp"
      />
      <div className="px-0 md:px-10">
        <h4 className="sm:text-4xl text-md font-light">Full Stack Developer(intern)</h4>
        <p className="font-bold sm:text-2xl text-sm mt-1">
          EDYODA (Zekelabs Technologies Pvt Ltd.)
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://reactjs.org/logo-og.png"
            alt="react"
          />
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt="react"
          />
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ZvXAFs02fg19pmpZiXpnFAi_1zaUqVQRjrcGNWMV40TvD5n_jBPRX1CFtw43Y_onExE&usqp=CAU"
            alt="react"
          />
          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
            alt="react"
          />

          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
            alt="react"
          />

          <img
            className="sm:h-10 h-5 sm:w-12 w-7 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png?20170517184425"
            alt="react"
          />
        </div>
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
