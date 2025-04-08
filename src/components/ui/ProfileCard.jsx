import React from 'react'

export const ProfileCard = ({image, Name, Position}) => {
  return (
    <div className='relative w-full h-full rounded-3xl'>
        <div className='bg-black w-full h-full relative rounded-3xl' >
            <img src={image} alt="" className='w-full h-full object-contain rounded-3xl' />
        </div>
        <div className='absolute bottom-0 h-[20%] w-full text-white px-6 flex flex-col gap-3 bg-gradient-to-t from-white/10 to-transparent'>
            <h1 className='text-2xl font-semibold'>
                {Name}
            </h1>
            <p className='text-[15px]'>
                {Position}
            </p>
        </div>
    </div>
  )
}
