"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@/components/Card.jsx"

export default function Home() {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/blog/allBlogs`, {
      headers: {
        "authorization": localStorage.getItem("jwtToken")
      }
    })
    .then(res => {
      if (res.data) {
        setBlogs(res.data);
      }
    })
    .catch(err => console.error(err));
  }, []);
  
  return (
    <div>
      <div className="min-h-[90vh] p-10 flex gap-4 justify-center flex-wrap">
        {
          blogs.map((blog, i)=>(
            <Card 
            key={i}
            title={blog.title} 
            creator={blog.creatorName} 
            blogUrl={blog.blogUrl}
            imageUrl={blog.imageUrl}/>
          ))
        }
      </div>
    </div>
  );
}
