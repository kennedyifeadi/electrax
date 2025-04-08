import React from 'react'
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";



export const PositionCard = ({Position, Team, Location, workTime}) => {
  return (
    <div className='w-[60%] h-full md:px-10 px-6 flex border border-[#8080802f] hover:border-[gray] bg-transparent hover:bg-[#80808009] rounded-2xl duration-300 ease-in-out cursor-pointer ' style={{fontFamily:" 'Inter', sans-serif"}}>
        <div className='w-[80%] h-full flex flex-col justify-center items-center gap-2'>
            <div className='w-full flex flex-col-reverse md:flex-row h-[50%] justify-start md:justify-start border md:items-end gap-4'>
                <h1 className='text-[1.2rem] text-[#333] font-bold '>{Position}</h1>
                <span className={`${Team === "Software Development" ? "text-[#b23c8b] bg-[#b23c8b31] before:bg-[#b23c8b]": Team === "Design" ? "text-[#3076ac] bg-[#3076ac4b] before:bg-[#3076ac]": Team === "Marketing" ? "text-[#d5902c] bg-[#d5912c54] before:bg-[#d5902c]": Team === "Sales" ?"text-[#73992e] bg-[#74992e52] before:bg-[#73992e]" : "bg-transparent text-[black]"} w-max h-[25px] flex justify-center items-center px-2 pl-5 text-[14px] font-semibold rounded-full relative before:absolute before:w-2 before:h-2 before:top-2 before:rounded-full before:bg-black before:left-2`}>{Team}</span>
            </div>
            <div className='w-full flex flex-col md:flex-row h-[50%] gap-2 text-[#475467]'>
                <span className='w-full md:w-max flex h-[50%] md:h-max font-medium items-center '>
                    <MdOutlineLocationOn className='text-xl' />
                    {Location}
                </span>
                <span className='w-full md:w-max flex h-[50%] md:h-max font-medium gap-1 items-center'>
                    <LuClock4 className='text-lg' />
                    {workTime}
                </span>
            </div>
        </div>
        <div className='w-[20%] h-full flex justify-end py-4'>
            <LuCircleArrowOutUpRight className='text-2xl font-bold text-[#270808]'/>
        </div>
    </div>
  )
}
