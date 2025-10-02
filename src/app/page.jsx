"use client"
import React from "react";
import axios from "axios";
import blogs from "@/app/blog"
import Card from "@/components/Card.jsx"

export default function Home() {
  
  
  return (
    <div>
      <div className="min-h-[70vh] p-10 flex gap-4 justify-center flex-wrap">
        {
          blogs.map((blog, i)=>(
            <Card 
            key={i}
            title={blog.title} 
            creator={blog.creatorName} 
            url={blog.url}
            imageUrl={blog.imageUrl}/>
          ))
        }
      </div>
    </div>
  );
}
