import PropTypes from "prop-types";
import { FaBookmark } from 'react-icons/fa'
const Blog = ({blog,handleBookmarks, handleMarkAsRead}) => {
    const {title, cover, reading_time,author_img,author, posted_date,hashtags} = blog
    return (
        <div className="mb-20 space-y-3" >
            <img className="mb-8" src={cover}/>
            <div className="flex justify-between ">
                <div className="flex ">
                <img className="w-12 h-12 rounded-full " src={author_img}/>
                <div className="ml-5">
                    <h3 className="text-xl font-bold">{author}</h3>
                    <p><small>{posted_date}</small></p>
                </div>

                </div>
                <div>
                 <span>{reading_time} min read</span>
                 <button onClick={()=>handleBookmarks(blog)} className="m-2 hover:text-gray-600"><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className="text-4xl font-bold
            "> {title}</h1>
            <p>{
                hashtags.map((hash, i) => <span key={i}><a href="">{hash}</a></span>)}
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} 
            className="text-purple-800 hover:text-purple-950 font-bold underline">Mark as read</button>
        </div>
    );
};
Blog.PropTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;