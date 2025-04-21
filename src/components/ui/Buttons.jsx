import PropTypes from 'prop-types';

const Button = ({text}) => {
    return ( 
        <button className="transition-bg duration-300  bg-transparent text-gray-500 px-4 py-2 rounded-md capitalize font-poppins w-fit h-fit border border-gray-300  hover:bg-gray-200">
            {text}
        </button>
     );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
};
 
export default Button;