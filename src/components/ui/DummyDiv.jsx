import PropTypes from 'prop-types';

const DummyDiv = ({darkbg}) => {
    return ( 
        <div className={`w-fit h-fit px-8 py-4 rounded-lg mx-4 ${darkbg ? 'bg-[#201f21] text-[#a0adad]' : 'bg-[#f1f1f1]'}`}>
            <p className='text-xl font-poppins text-[#66666a]'>
            Whether you&apos;re flying solo or coordinating with ground control,<br />
            our advanced avionics provide crystal-clear communication<br />
            channels, enabling enhanced situational awareness.
            </p>
        </div>
     );
}

DummyDiv.propTypes = {
    text: PropTypes.string.isRequired,
    darkbg: PropTypes.bool
};
 
export default DummyDiv;