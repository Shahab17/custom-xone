import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    // const { name } = data;

    return (
        <div className="md:w-1/3   ">
            <h3 className="text-2xl">Bookmarked Blogs: {bookmarks.length} </h3>
            <div className=' bg-slate-400 p-6 rounded-lg mt-7 '>
                {
                    bookmarks.map((bookmarkInfo, idx) => <Bookmark key={idx} bookmark={bookmarkInfo} ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;