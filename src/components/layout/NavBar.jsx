import { NavLink } from "react-router-dom";
import Button from "../ui/Buttons";

const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-2  bg-transparent absolute top-0 z-40 w-full">
      <NavLink to="/">
      <h1 className="flex items-center text-3xl text-[#333] tracking-wider">
        <span>ELECTRA</span>
        <span className="font-medium">X</span>
      </h1>
      </NavLink>
      <div className="flex space-x-9">
        <NavLink
          to="/product-page"
          className="text-[#333333] hover:text-gray-400 py-2 capitalize transition-colors duration-300 font-poppins"
        >
          ElectraX
        </NavLink>

        <NavLink
          to="/about"
          className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins"
        >
          About
        </NavLink>
        <NavLink
          to="/careers"
          className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins "
        >
          careers
        </NavLink>
        <NavLink
          to="/news"
          className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins "
        >
          News
        </NavLink>
        <NavLink
          to="/contact"
          className="hover:text-gray-400 py-2 text-[#333333] capitalize transition-colors duration-300 font-poppins "
        >
          Contact
        </NavLink>

        <Button text="Clone Template" />
      </div>
    </div>
  );
};

export default Navbar;
