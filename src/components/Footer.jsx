import React from 'react'
import { FaXTwitter, FaLinkedinIn, FaGithub, FaMapPin } from "react-icons/fa6";
import Link from 'next/link';

function Footer() {
  return (
    <div className='w-screen px-10 py-5'>
        <div className='h-fit bg-lime-500 rounded-xl text-white py-4 px-10 flex flex-col md:flex-row gap-5 items-end justify-between'>
          <div className='flex md:flex-col gap-5 md:gap-2'>
            <Link href="https://github.com/Swayanshu004">            
              <div className='h-6'>
              <FaGithub className='text-black text-xl my-2 hover:scale-150 ease-in-out duration-300'/>
              </div>
            </Link>
            <Link href="https://x.com/SwayanshuSahoo">            
              <div className='h-6'>
              <FaXTwitter className='text-black text-xl my-2 hover:scale-150 ease-in-out duration-300'/>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/swayanshu-satyapragyan-sahoo-084b6525a/">            
              <div className='h-6'>
              <FaLinkedinIn className='text-black text-xl my-2 hover:scale-150 ease-in-out duration-300'/>
              </div>
            </Link>
          </div>
          <div className='text-right text-black font-mono font-semibold md:text-md'>
            <p>
              Thanks for joining me on this tech journey.
            </p>
            <p>
              Keep exploring, keep learning, keep contributing
            </p>
            <p className='text-amber-400 text-sm font-semibold bg-black py-3 px-5 rounded-lg mt-3 flex gap-3'>
            <FaMapPin className='text-xl'/> All content provided here is solely for educational purposes and not intended for resale !
            </p>
            <p className=''>a product under <a href='//codingaashram.vercel.app' target='_blank' className='text-black font-sans text-xl underline hover:text-white'>codingaashram</a> community</p>
          </div>
        </div>
    </div>
  )
}

export default Footer