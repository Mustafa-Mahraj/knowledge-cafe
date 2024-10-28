import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {

    const {title} = bookmark;

    return (
        <div className="mt-4 p-5 bg-white rounded-lg">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;