import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full bg-[#f1f1f1] flex flex-col p-4 h-max'>
        <div className='w-full h-max border border-black flex items-center lg:flex-row flex-col'>
            <div>
                <h1></h1>
                <p></p>
            </div>
            <div>
                <form action="">
                    <input type="text" />
                    <button></button>
                </form>
                <span>

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
                    <NavLink to="/404">
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
