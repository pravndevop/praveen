import React, { useState, useRef } from "react";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
type Props = {};

function ContactMe({}: Props) {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 sm:text-3xl text-md">
        contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="sm:text-4xl text-md font-semibold text-center">
          I have got just what you need.
          <span className="decoration-[#f7ab0a]/50 underline"> Lets Talk.</span>
        </h4>
        <div className="sm:space-y-10 space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] sm:h-7 h-4 sm:w-7 w-4 animate-pulse" />

            <p className="sm:text-2xl text-sm">
              <Link href="tel:+916360479023">
              +91 6360479023
              </Link>
              </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] sm:h-7 h-4 sm:w-7 w-4  animate-pulse" />

            <p className="sm:text-2xl text-md">
              <Link href="mailto:praveenarya518@gmail.com">
              praveenarya518@gmail.com
              </Link>
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] sm:h-7 h-4 sm:w-7 w-4 animate-pulse" />

            <p className="sm:text-2xl text-md">Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
