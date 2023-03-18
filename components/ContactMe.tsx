import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from 'next/link';
type Props = {}

function ContactMe({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-semibold mb-12 flex text-center'>I have got just what you need.<br/> Lets Talk.</h1>
        <div className='flex flex-col gap-10 items-start'>
          <div className='flex flex-row gap-5'>
            <PhoneIcon className='text-[#f7ab0a] sm:h-7 h-4 sm:w-7 w-4 animate-pulse'/>
            <p className="sm:text-2xl text-sm">
              <Link href="tel:+916360479023">
              +91 6360479023
              </Link></p>
          </div>
          <div className='flex flex-row gap-5'>
            <EnvelopeIcon className='text-[#f7ab0a] sm:h-7 h-4 sm:w-7 w-4 animate-pulse'/>
            <p className="sm:text-2xl text-sm">
              <Link href="mailto:praveenarya518@gmail.com">
              praveenarya518@gmail.com
              </Link></p>
          </div>
          <div className='flex flex-row gap-5'>
            <MapPinIcon className='text-[#f7ab0a] sm:h-7 h-4 sm:w-7 w-4 animate-pulse'/>
            <p className="sm:text-2xl text-sm">
              <Link href="mailto:praveenarya518@gmail.com">
              Bangalore
              </Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe