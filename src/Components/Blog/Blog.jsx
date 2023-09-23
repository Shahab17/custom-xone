import PropTypes from 'prop-types';

const Blog = ({ blogData }) => {
    const { cover, title, hashtags } = blogData;
    return (
        <div className='space-y-4 my-6'>
            <img src={cover} alt="" />
            <div>
                <div>
                    
                </div>
                <div></div>
            </div>
            <h3 className='text-2xl'>{title}</h3>
            <p>
            {
                hashtags.map( (hash, idx) => <span
                 key={idx} className='mr-2 text-blue-900  ' ><a href="">#{hash}</a></span>)
            }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blogData: PropTypes.object
}

export default Blog;