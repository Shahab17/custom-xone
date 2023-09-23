import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    // const { name } = data;

    return (
        <div className="md:w-1/3   ">
            <div className='bg-red-200 text-center p-4 rounded-md mt-10'>
                <h3 className="text-2xl">Reading Time {readingTime} min </h3>
            </div>

            <div className=' bg-slate-400 p-6 rounded-lg mt-7 '>
            <h3 className="text-2xl text-center">Bookmarked Blogs: {bookmarks.length} </h3>
                
                {
                    bookmarks.map((bookmarkInfo, idx) => <Bookmark key={idx} bookmark={bookmarkInfo} ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;