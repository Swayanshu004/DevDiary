import React from 'react'
import Link from 'next/link'

function Card({title, creator, blogUrl, imageUrl}) {
  return (
    <div className='w-5/6 md:w-72 bg-neutral-200 max-h-60 rounded-lg hover:bg-lime-500 overflow-hidden'>
        <Link href={blogUrl ? blogUrl : ""}>
            <img src={imageUrl ? imageUrl : "https://res.cloudinary.com/swayanshu/image/upload/v1729875132/DevDiary/k165zbyingeopsi4dztm.png"} alt="na" className='w-full aspect-video '/>
            <h3 className='text-black font-semibold text-xl px-3 py-1 font-mono'>{title}</h3>
            <div className='flex items-center justify-between px-3 pb-4'>
              <p className='text-neutral-600 font-medium '>{creator}</p>
              {blogUrl ? "" : <p className='text-neutral-500 font-bold px-3 border-2 bg-neutral-200 border-lime-500 rounded-md'>writing</p>}
            </div>
        </Link>
    </div>
  )
}

export default Card