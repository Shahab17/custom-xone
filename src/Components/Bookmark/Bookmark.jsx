import PropTypes from 'prop-types'

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    // console.log(bookmark)

    return (
        <div className=' '>
            <h3 className='text-2xl bg-slate-200 p-4 mt-4 rounded-md'>{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;