import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex flex-col items-center justify-between px-10 py-4 w-screen lg:flex-row'>
        <h1 className="text-4xl font-semibold text-lime-500 ">DevDiary</h1>
        <div className='mt-4 w-full lg:mt-0 lg:w-1/3'>
            <ul className='w-full flex items-center justify-end gap-3 md:gap-5 '>
                <li>
                    <div>
                        <input 
                        type="text"
                        placeholder='search' 
                        className='py-2 px-3 rounded-md bg-neutral-800 focus:border-0 font-mono'/></div>
                </li>
                <li><Link href="#" className='text-sm md:text-md hover:text-lime-400 border-2 hover:border-lime-400 rounded-lg px-2 md:px-5 py-2 font-mono'>Series</Link></li>
                <li>
                    <Link href="#">
                        <div className='w-10 h-10 bg-lime-500 rounded-lg hover:border-2'></div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar