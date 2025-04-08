import React from 'react'

export const NumbersCard = ({Number, Text}) => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f1f1f1] rounded-xl min-w-[170px] w-[30%] max-w-[250px] h-[150px] md:h-[200px]' style={{fontFamily:" 'Inter', sans-serif"}}>
        <span className='text-3xl md:text-4xl'>
            {Number}
        </span>
        <span className='text-xl font-light'>
            {Text}
        </span>
    </div>
  )
}
