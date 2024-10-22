import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, totalReadingTime}) => {
    return (
        
        <div className="md: 1/3 bg-gray-300 rounded-lg ml-4">
            <div>
                <h2 className="text-4xl">Reading Time:-{totalReadingTime}</h2>
            </div>
            <h1 className="text-3xl  font-bold  text-center mt-7">Bookmarked Book :-{bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks:PropTypes.array
    totalReadingTime:PropTypes.number
}
export default Bookmarks;