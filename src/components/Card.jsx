import React from 'react'
import Link from 'next/link'

function Card({title, creator, Url}) {
  return (
    <div className='w-5/6 md:w-1/5 bg-neutral-200 max-h-60 rounded-lg hover:bg-lime-500 overflow-hidden'>
        <Link href={Url ? Url : ""}>
            <img src="https://images.pexels.com/photos/28975090/pexels-photo-28975090/free-photo-of-tranquil-boat-ride-on-yamuna-river-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="na" className='w-full aspect-video '/>
            <h3 className='text-black font-semibold text-xl px-3 py-1 font-mono'>{title}</h3>
            <div className='flex items-center justify-between px-3'>
              <p className='text-neutral-600 font-medium '>{creator}</p>
              {Url ? "" : <p className='text-neutral-500 font-bold px-3 border-2 bg-neutral-200 border-lime-500 rounded-md'>Writting</p>}
            </div>
        </Link>
    </div>
  )
}

export default Card