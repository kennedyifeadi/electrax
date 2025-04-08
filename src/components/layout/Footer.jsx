import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full bg-[#f1f1f1] flex flex-col p-4 h-max' style={{fontFamily:" 'Inter', sans-serif"}}>
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
        <div className='flex flex-wrap w-full h-max'>
            <div className='w-full lg:w-[40%] border-black md:w-[50%] h-max border'>
                <div></div>
                <div>
                    <h1>

                    </h1>
                    <p>

                    </p>
                </div>
                <div>
                    <h1>

                    </h1>
                    <span>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                        <a href=""></a>
                    </span>
                </div>
            </div>
            <div className='w-full lg:w-[20%] border-black md:w-[50%] h-max border'>
                <h1>

                </h1>
                <div>
                    <NavLink to="/">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/product-page">
                        <span>

                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='w-full lg:w-[20%] border-black md:w-[50%] h-max border'>
                <h1>

                </h1>
                <div>
                    <NavLink to="/about">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/careers">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/news">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/contact">
                        <span>

                        </span>
                    </NavLink>
                </div>
            </div>
            <div className='w-full lg:w-[20%] border-black md:w-[50%] h-max border'>
                <h1>

                </h1>
                <div>
                    <NavLink to="/system/license">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/system/style-guide">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/system/change-log">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="*">
                        <span>

                        </span>
                    </NavLink>
                    <NavLink to="/401">
                        <span>

                        </span>
                    </NavLink>
                </div>
            </div>
        </div>
        <div className='w-full h-[12dvh] flex justify-between items-center md:flex-row flex-col'>
            <div>
               <NavLink to="/system/license">
                    <span>

                    </span>
               </NavLink>
               <NavLink to="/system/style-guide">
                    <span>

                    </span>
               </NavLink>
               <NavLink to="/system/change-log">
                    <span>

                    </span>
               </NavLink>
            </div>
            <div>
               <span></span>
               <span></span>
            </div>
        </div>
    </div>
  )
}
