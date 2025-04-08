import React from 'react'

export const ImageCard = ({bgColor,Title, text, textColor, TitleColor, image}) => {
  return (
    <div className='w-full h-full flex flex-col'>
        <div className='rounded-t-2xl w-full h-[50%]'>
            <img src={image} alt="" className='w-full h-full rounded-tr-2xl object-cover ' />
        </div>
        <div className={`bg-[${bgColor}] px-2 flex flex-col gap-2`}>
            <h1 className={`w-full font-semibold text-2xl text-[${TitleColor}]`}>
                {Title}
            </h1>
            <p className={`w-full font-medium text-[15px] ${textColor}`}>
                {text}
            </p>
        </div>
    </div>
  )
}
