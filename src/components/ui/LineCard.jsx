import PropTypes from "prop-types";

const LineCard = ({ color, heading, body}) => {
  return (
    <div
      className={`w-[20rem] h-fit py-4 border-t-2 bg-transparent ${
        color ? "border-black text-gray-700" : "border-white text-white"
      }`}
    >
      <h1 className="text-2xl font-semibold mt-3 capitalize">{heading}</h1>
      <p className="text-gray-500 text-base text-left mt-2 font-semibold">
        {body}
      </p>
    </div>
  );
};

LineCard.propTypes = {
  color: PropTypes.bool.isRequired,
  handleClick: PropTypes.func,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default LineCard;
