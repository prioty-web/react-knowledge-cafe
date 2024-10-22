import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('api.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
           <h1 className="text-4xl font-bold m-6">Blogs</h1> 
           {
            blogs?.map(blog => <Blog key={blog.id}
                handleBookmarks={handleBookmarks}
                handleMarkAsRead={handleMarkAsRead}
                 blog={blog}></Blog>)
           }
        </div>
    );
};

export default Blogs;