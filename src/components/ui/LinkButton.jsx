import goArrow from '../../assets/goArrow.svg';
const LinkButton = () => {
    return ( 
        <a href="" className='flex font-normal text-xl'>
            <u className='mr-2'> Discover the ElectraX</u>
           
            <img src={goArrow} alt="go" className='w-5 h-6'/>
        </a>
     );
}
 
export default LinkButton;