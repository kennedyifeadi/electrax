import PropTypes from "prop-types";

const FunctionalLineCard = ({ color, handleClick, heading, body}) => {
  return (
    <div
      className={`w-[20rem] h-fit px-3 py-4 border-t-2 cursor-pointer ${
        color ? "border-black text-gray-700" : "border-white text-white"
      }`}
      onClick={handleClick}
    >
      <h1 className="text-2xl font-semibold mt-3 capitalize">{heading}</h1>
      <p className="text-gray-500 text-sm text-left mt-2 ">
        {body}
      </p>
    </div>
  );
};

FunctionalLineCard.propTypes = {
  color: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default FunctionalLineCard;
