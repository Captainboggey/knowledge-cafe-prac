import { useEffect, useState  } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleBookmarkBtn,handleReadingTime}) => {
    const [blogs,setBlogs]=  useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    console.log(blogs)
    
   
    return (

        <div>
            <h1 className="font-bold text-3xl">Blogs</h1>
           {
            blogs.map((blogs)=> <Blog handleReadingTime={handleReadingTime} handleBookmarkBtn={handleBookmarkBtn} key={blogs.id}  blogs={blogs}></Blog>)
           }
            

            
        </div>
    );
};

export default Blogs;