import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blogData, handleAddToBookmark, handleMarkAsRead }) => {
    const { id, cover, title, author, author_img, posted_date, reading_time, hashtags } = blogData;
    return (
        <div className='space-y-4 my-6'>
            <img className='w-full rounded-md' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3>{author}</h3>
                        <p><small>{posted_date}</small></p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span> <button onClick={() => handleAddToBookmark(blogData)} className='ml-1 '> <FaBookmark></FaBookmark>  </button>
                </div>
            </div>
            <h3 className='text-2xl'>{title}</h3>
            <p>
                {
                    hashtags.map((hash, idx) => <span
                        key={idx} className='mr-2 text-blue-900  ' ><a href="">#{hash}</a></span>)
                }
            </p>

            <button className='text-purple-950 font-semibold underline' onClick={() => handleMarkAsRead(id, reading_time)}>Mark As Read</button>

        </div>
    );
};

Blog.propTypes = {
    blogData: PropTypes.object,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blog;