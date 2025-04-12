import React from 'react'
import { DynamicBackground } from '../ui/DynamicBackground'
import landingImage from "../../assets/Images/plane black background.avif"

export const Landing = () => {
  return (
    <div className='w-full h-[150dvh] bg-[#000000] relative'>
        <DynamicBackground image={landingImage} size='70%' />
        <div className='w-full h-full relative flex flex-col'></div>
    </div>
  )
}
