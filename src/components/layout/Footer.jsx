import { NavLink } from 'react-router-dom'
// import { IoLogoTwitter } from "react-icons/io5";
// import { TiSocialFacebook } from "react-icons/ti";
// import { RiLinkedinFill } from "react-icons/ri";
// import { FiYoutube } from "react-icons/fi";
// import { FaInstagram } from "react-icons/fa";



export const Footer = () => {
  return (
    <div className='w-full bg-[#f1f1f1] flex flex-col px-4 pt-4 h-max gap-4' style={{fontFamily:" 'Inter', sans-serif"}}>
        <div className='w-full h-max flex lg:flex-row flex-col px-4'>
            <div className="w-full h-[20dvh] md:h-[28dvh] lg:h-[32dvh] md:w-[60%] lg:w-[50%] flex flex-col gap-4 justify-center">
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#333]'>Join our newsletter</h1>
                <p className='text-[15px] md:text-[18px] text-[#333333d5]'>We’ll send you a nice letter once per week. No spam.</p>
            </div>
            <div className='w-full h-[24dvh] md:h-[28dvh] lg:h-[32dvh] md:w-[70%] lg:w-[50%] flex flex-col gap-4 justify-center'>
                <form action="" className='w-full h-[70%] md:h-[30%] lg:h-[25%] flex md:flex-row flex-col gap-4'>
                    <input type="text" className='w-full md:w-[70%] h-[50%] md:h-full px-4 rounded-md border border-[#d4d4d4]' placeholder='Enter your email'/>
                    <button className='w-full md:w-[20%] h-[50%] md:h-full rounded-md border border-[#d4d4d4] bg-transparent hover:bg-[#d4d4d4] duration-500 ease-in-out text-black flex justify-center items-center text-[15px]'>Subscribe</button>
                </form>
                <span className='text-[15px] md:text-[18px] text-[#333333d5]'>
                    We care about your data in our privacy policy.
                </span>
            </div>
        </div>
        <div className='flex flex-wrap w-full h-max gap-y-4'>
            <div className='w-full lg:w-[40%] md:w-[50%] h-max flex flex-col gap-4 px-4'>
                <div>
                    <h1 className='text-4xl text-[#333] tracking-wider'>
                        <span>
                            ELECTRA
                        </span>
                        <span className='font-medium'>
                            X
                        </span>
                    </h1>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-medium text-[#333] text-xl'>
                        About us
                    </h1>
                    <p className='text-[#333] text-[16px] w-full md:w-[80%]'>
                        We blend the timeless elegance of the iconic Electra with cutting-edge technology to create     personal aircraft that redefine the skies. Our mission is to honor aviation history while   pioneering the future of personal flight.
                    </p>
                </div>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-medium text-[#333] text-xl'>
                        Follow us
                    </h1>
                    {/* <span className='flex gap-4'>
                        <a href="" className='md:w-12 md:h-12 rounded-full w-10 h-10 flex justify-center items-center bg-[#d4d4d4]'>
                            <IoLogoTwitter />
                        </a>
                        <a href="" className='md:w-12 md:h-12 rounded-full w-10 h-10 flex justify-center items-center bg-[#d4d4d4]'>
                            <TiSocialFacebook />
                        </a>
                        <a href="" className='md:w-12 md:h-12 rounded-full w-10 h-10 flex justify-center items-center bg-[#d4d4d4]'>
                            <RiLinkedinFill />  
                        </a>
                        <a href="" className='md:w-12 md:h-12 rounded-full w-10 h-10 flex justify-center items-center bg-[#d4d4d4]'>
                            <FiYoutube />
                        </a>
                        <a href="" className='md:w-12 md:h-12 rounded-full w-10 h-10 flex justify-center items-center bg-[#d4d4d4]'>
                            <FaInstagram />
                        </a>
                    </span> */}
                </div>
            </div>
            <div className='w-full lg:w-[20%] flex flex-col gap-4 md:w-[50%] h-max px-4 md:px-0'>
                <h1 className='text-[#666666] font-semibold text-[16px]'>
                Prodcut
                </h1>
                <div className='flex flex-col gap-4'>
                    <NavLink to="/">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                            Home
                        </span>
                    </NavLink>
                    <NavLink to="/product-page">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        ElectraX Airplane
                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='w-full lg:w-[20%] flex flex-col gap-4 md:w-[50%] h-max px-4 md:px-0'>
                <h1 className='text-[#666666] font-semibold text-[16px]'>
                Company
                </h1>
                <div className='flex flex-col gap-4'>
                    <NavLink to="/about">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        About us

                        </span>
                    </NavLink>
                    <NavLink to="/careers">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        Careers
                        </span>
                    </NavLink>
                    <NavLink to="/news">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        News

                        </span>
                    </NavLink>
                    <NavLink to="/contact">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        Contact

                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='w-full lg:w-[20%] flex flex-col gap-4 md:w-[50%] h-max px-4 md:px-0'>
                <h1 className='text-[#666666] font-semibold text-[16px]'>
                Other Pages
                </h1>
                <div className='flex flex-col gap-4'>
                    <NavLink to="/system/license">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        Licenses

                        </span>
                    </NavLink>
                    <NavLink to="/system/style-guide">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        Style Guide

                        </span>
                    </NavLink>
                    <NavLink to="/system/change-log">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        Change Log

                        </span>
                    </NavLink>
                    <NavLink to="*">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        404 page

                        </span>
                    </NavLink>
                    <NavLink to="/401">
                        <span className="text-md md:text-lg text-[#333] font-medium">
                        Protected page

                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
        <div className='w-full h-[10dvh] flex md:justify-between md:items-center md:flex-row flex-col px-4'>
            <div className='flex flex-1 gap-4 h-full items-center'>
               <NavLink to="/system/license">
                    <span className="text-sm md:text-[18px] text-[#333] font-normal">
                    Licenses
                    </span>
               </NavLink>
               <NavLink to="/system/style-guide">
                    <span className="text-sm md:text-[18px] text-[#333] font-normal">
                    Style Guide
                    </span>
               </NavLink>
               <NavLink to="/system/change-log">
                    <span className="text-sm md:text-[18px] text-[#333] font-normal">
                    Change Log
                    </span>
               </NavLink>
            </div>
            <div className='flex flex-1 md:justify-end gap-4 h-full items-center'>
               <span className="text-sm md:text-[18px] text-[#333] font-medium">
               Made by JFK Bright

               </span>
               <span className="text-sm md:text-[18px] text-[#333] font-medium">
                Powered by Webflow

               </span>
            </div>
        </div>
    </div>
  )
}
