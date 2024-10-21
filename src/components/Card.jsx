import React from 'react'
import Link from 'next/link'

function Card() {
  return (
    <div className='w-5/6 md:w-1/5 bg-slate-200 max-h-60 rounded-lg hover:bg-lime-500 overflow-hidden'>
        <Link href="#">
            <img src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="na" className='w-full aspect-video '/>
            <h3 className='text-black font-semibold text-xl px-3 py-1 font-mono'>Hello JS</h3>
            <p className='text-neutral-600 font-medium px-3'>Crerated By</p>
        </Link>
    </div>
  )
}

export default Card