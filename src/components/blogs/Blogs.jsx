import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleReadTime }) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleReadTime={handleReadTime}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired
}

export default Blogs;