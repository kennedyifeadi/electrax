import React from 'react'

export const NewsCard = ({Title, image, type, date}) => {
  return (
    <div className='w-[300px] h-[500px] relative cursor-pointer group rounded-2xl'>
        <div className='absolute w-full h-full top-0 group-hover:bg-[#0000008a] duration-500 ease-in-out rounded-2xl '>
            <img src={image} alt="" className='w-full h-full object-contain rounded-2xl'/>
        </div>
        <div className='flex relative w-full h-full rounded-2xl flex-col justify-between'>
            <div className='w-full h-max p-4 text-[#ffffff80] flex items-center gap-2'>
                <span className='text-[15px]'>
                    {type}
                </span>
                <span className='w-2 h-2 rounded-full bg-[#ffffff80]'></span>
                <span className='text-[15px]'>
                    {date}
                </span>
            </div>
            <div className='w-full h-[20%] p-4'>
                <h1 className='text-2xl md:text-3xl text-white'>
                    {Title}
                </h1>
            </div>
        </div>
    </div>
  )
}
