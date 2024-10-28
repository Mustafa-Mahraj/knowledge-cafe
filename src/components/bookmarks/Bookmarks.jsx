import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readTime }) => {
    return (
        <div>
            <div className="py-5 mt-4 text-center bg-[#6047EC1A] rounded-lg text-[#6047EC] font-bold">
                <h3>Spent time on read : {readTime} min</h3>
            </div>
            <div className=" bg-gray-200 p-7 rounded-lg text-2xl font-bold mt-4">
                <h2 className="text-2xl">Bookmarked Blogs : {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        bookmark={bookmark}
                    ></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readTime: PropTypes.number.isRequired
}

export default Bookmarks;