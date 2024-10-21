import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='flex items-center justify-between px-10 py-4 w-screen'>
        <h1 className="text-4xl font-semibold text-lime-500 ">DevDiary</h1>
        <div className='w-1/3'>
            <ul className='w-full flex items-center justify-between'>
                <li>
                    <div>
                        <input 
                        type="text"
                        placeholder='search' 
                        className='py-1 px-3 rounded-md bg-neutral-800 focus:border-0'/></div>
                </li>
                <li><Link href="#" className='text-md hover:text-lime-400 border-2 hover:border-lime-400 rounded-full px-5 py-1'>Series</Link></li>
                <li>
                    <Link href="#">
                        <div className='w-10 h-10 bg-lime-500 rounded-full hover:border-2'></div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar