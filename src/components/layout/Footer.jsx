import React from 'react'

export const Footer = () => {
  return (
    <div className='w-full h-[120dvh] bg-[#f1f1f1] flex flex-col p-4 max-h-max'>
        <div className='w-full h-[30%] max-h-[36dvh] flex items-center lg:flex-row flex-col'>
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
        <div className='flex flex-wrap w-full h-[60%] max-h-max'>
            <div className='w-full lg:w-[40%]'></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='w-full h-[10%] max-h-[12dvh] flex justify-between items-center md:flex-row flex-col'>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}
