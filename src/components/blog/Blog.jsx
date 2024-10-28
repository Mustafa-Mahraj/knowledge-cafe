import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark, handleReadTime }) => {
    // console.log(blog)
    const { title, cover_img, author_img, author_name, date, read_time, tags } = blog;

    return (
        <div className='px-2 border-b-2 py-5'>
            <div>
                <img src={cover_img} alt="" />
            </div>
            <div className='flex justify-between px-3 mt-2'>
                {/* author */}
                <div className='flex gap-3 items-center'>
                    <div>
                        <img className='w-10' src={author_img} alt="" />
                    </div>
                    {/* author name & date */}
                    <div>
                        <h4>{author_name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                {/* read time */}
                <div className='flex items-center gap-4'>
                    <h5>{read_time} min read</h5>
                    <button onClick={() => handleAddToBookmark(blog)}><IoBookmarksOutline className='size-6'></IoBookmarksOutline></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold my-3'>{title}</h1>
            <p>
                {
                    tags.map((tag, idx) => <a key={idx} href=""> #{tag}</a>)
                }
            </p>
            <button onClick={() => handleReadTime(read_time)} className='text-blue-600 underline'>Mark as read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired
}

export default Blog;