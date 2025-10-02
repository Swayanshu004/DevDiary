"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import blogs from '@/app/blog';
import series from '@/app/series';


function Navbar() {
    const [keyword, setKeyword] = useState("");
    const [ids, setIds] = useState([]);
    function search(keyword){
        console.log(keyword);
        setIds([]);
        for(let i=0 ; i<blogs.length ; i++){
            for(let token in blogs[i].tokens){
                if(blogs[i].tokens[token].toLowerCase() == keyword.toLowerCase() || blogs[i].tokens[token].toLowerCase().startsWith(keyword.toLowerCase())){
                    console.log("match in ",blogs[i].tokens[token]);
                    setIds( prev =>[...prev,blogs[i]]);
                }
            }
        }
        for(let i=0 ; i<series.length ; i++){
            for(let token in series[i].tokens){
                if(series[i].tokens[token].toLowerCase() == keyword.toLowerCase() || series[i].tokens[token].toLowerCase().startsWith(keyword.toLowerCase())){
                    setIds( prev =>[...prev,series[i]]);
                }
            }
        }
        setKeyword("");
        console.log(ids);
    }
    return (
        <div className='flex flex-col items-center justify-between px-10 py-4 w-screen sm:flex-row '>
            <Link href="/">
                <h1 className="text-4xl font-semibold text-lime-500 ">DevDiary</h1>
            </Link>
            <div className='mt-4 w-full lg:mt-0 lg:w-1/3'>
                <ul className='w-full flex items-center justify-end gap-3 md:gap-5 '>
                    <li>
                        <div>
                            <div className='flex'>
                                <input 
                                type="text"
                                placeholder='search'
                                onChange={(e)=>setKeyword(e.target.value)}
                                className='py-2 px-3 rounded-l-md bg-neutral-800 focus:outline-none focus:bg-neutral-200 focus:text-black font-mono'/>
                                <button
                                onClick={e => search(keyword)}
                                className='py-2 px-3 rounded-r-md bg-neutral-800 hover:bg-lime-500 hover:text-black duration-300 font-mono'>go</button>
                            </div>
                            <div className='absolute z-20 w-fit'>
                                {
                                    ids.map((value,index)=>(
                                        <a 
                                        href={value.url}
                                        key={index}>
                                            <div 
                                            className='px-1 py-2 bg-neutral-950 bg-opacity-90 text-white hover:bg-lime-500 duration-500'
                                            >
                                                {value.title}
                                            </div>
                                        </a>
                                    ))
                                }
                            </div>
                        </div>
                    </li>
                    <li><Link href="/series" className='text-sm md:text-md hover:text-lime-400 border-2 hover:border-lime-400 rounded-lg px-2 md:px-5 py-2 font-mono'>Series</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar