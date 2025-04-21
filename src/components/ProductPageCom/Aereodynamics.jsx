import React from 'react'
import { ImageCard } from '../ui/ImageCard'
import planeEngine from "../../assets/Images/plane black background.avif"
import planeEngine2 from "../../assets/Images/PlaneEngineBack.avif"
import planeEngine3 from "../../assets/Images/PlaneEngine3.avif"

export const Aereodynamics = () => {
  return (
    <div className='w-full h-max flex flex-col px-10 gap-10'>
        <div className='flex gap-4 flex-col mt-36'>
            <span className='text-[#666] font-medium font-poppins'>Precision Engineering at Its Finest</span>
            <h1 className='text-[40px] text-[#333] font-medium font-poppins'>Aerodynamics Redefined</h1>
            <p className='w-1/2 mt-2 text-[#666] font-medium font-poppins'>Our aircraft’s streamlined design is a product of relentless innovation, reducing drag and enhancing speed and efficiency. Every curve, every detail is crafted to ensure optimal performance in all flight conditions.</p>
        </div>
        <div className='w-full h-max flex flex-col gap-6'>
            <div className='w-full h-[450px] overflow-hidden rounded-3xl'>
                <ImageCard Title={"Advanced Propulsion Technology"} TitleColor={"white"} bgColor={"#000"} orientation={true} text={"Powered by next-generation engines, our aircraft offer unrivaled efficiency and power. Whether you choose electric or hybrid propulsion, you’ll experience seamless acceleration and impressive range."} textColor={"#fff"} image={planeEngine3} titleFont={"40px"} /> 
            </div>
            <div className='w-full flex flex-6 h-[500px] gap-6'>
              <div className='w-full h-full rounded-3xl overflow-hidden'>
              <ImageCard Title="Cutting-Edge Materials" TitleColor={"white"} bgColor={"#000"} orientation={false} text={"Constructed from advanced lightweight materials, ElectraX aircraft maximize durability while minimizing weight, improving both fuel efficiency and overall performance."} textColor={"#f4f4f4"} image={planeEngine} titleFont={"24px"} />
              </div>
              <div className='w-full h-full rounded-3xl overflow-hidden'>
              <ImageCard Title={"Cutting-Edge Materials"} TitleColor={"white"} bgColor={"#000"} orientation={false} text={"Constructed from advanced lightweight materials, ElectraX aircraft maximize durability while minimizing weight, improving both fuel efficiency and overall performance."} textColor={"#f4f4f4"} image={planeEngine2} titleFont={"24px"} />
              </div>
            </div>
        </div>
    </div>
  )
}
