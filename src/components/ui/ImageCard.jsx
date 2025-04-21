import React from 'react'

export const ImageCard = ({bgColor,Title, text, textColor, TitleColor, image, orientation, titleFont}) => {
  return (
    <div className={`w-full h-full flex ${orientation ?  "flex-row": "flex-col"}`} style={{backgroundColor : bgColor}}>
        <div className={`px-2 flex flex-col ${orientation ?  "justify-center h-full w-1/2 px-16 gap-5": "w-full h-[35%] text-center items-center gap-3"}`} style={{backgroundColor : bgColor}}>
            <h1 className={`w-full font-semibold text-[40px] font-poppins ${orientation ? "" : "pt-10"}`} style={{color: TitleColor, fontSize: titleFont}}>
                {Title}
            </h1>
            <p className={`w-full font-medium text-[15px] ${orientation ? "" : "px-16"}`} style={{color: textColor}}>
                {text}
            </p>
        </div>
        <div className={`rounded-t-2xl ${orientation ?  "items-center h-full w-1/2": "w-full h-[75%] justify-center"}`}>
            <img src={image} alt="" className='w-full h-full rounded-tr-2xl object-cover ' />
        </div>
    </div>
  )
}
