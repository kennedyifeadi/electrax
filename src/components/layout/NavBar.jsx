// import electrax from "../../assets/electrax.png";
import Button from "../ui/Buttons";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 my-2">
      <h1 className="">ELECTRAX</h1>
      <div className="flex space-x-9">
        <a
          href=""
          className="text-[#333333] hover:text-gray-400 py-2 capitalize transition-colors duration-300 font-poppins"
        >
          ElectraX
        </a>

        <a href="" className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins">
          About
        </a>
        <a href="" className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins ">
          careers
        </a>
        <a href="" className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins ">
          News
        </a>
        <a href="" className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins ">
          Contact
        </a>

        <Button text="Clone Template" />
      </div>
    </div>
  );
};

export default Navbar;
