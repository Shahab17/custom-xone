import { useEffect } from "react";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="container mx-auto">
            <div className="md:flex gap-5">
                <div className="md:w-2/3 ">
                    <h3 className="text-2xl">Blogs: {blogs.length} </h3>
                </div>

                <div className="md:w-1/3  ">
                  <Bookmarks></Bookmarks>
                </div>
            </div>
        </div>
    );
};

export default Blogs;