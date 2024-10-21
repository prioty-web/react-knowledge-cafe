import PropTypes from "prop-types";
const Blog = ({blog}) => {
    const {title, cover} = blog
    return (
        <div>
            <img src={ cover}/>
            <h1>Title : {title}</h1>
        </div>
    );
};
Blog.PropTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;