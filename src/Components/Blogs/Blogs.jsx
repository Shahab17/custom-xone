import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3  ">

            <h3 className="text-2xl">Blogs: {blogs.length} </h3>
            {
                blogs.map( blogInfo => <Blog
                     key={blogInfo.id} 
                     blogData={blogInfo} 
                     
                     ></Blog>)
            }

        </div>
    );
};

export default Blogs;