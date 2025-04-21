import React from 'react'
import plane from "../../assets/Images/sunset.avif"
import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion'

export const ParralaxSection = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 40,
    stiffness: 100,
    mass: 0.2
  });

  const y = useTransform(smoothVelocity, [-1000, 0, 1000], [-20, 0, 20]);

  return (
    <div className='w-full min-h-screen relative bg-black'>
      <div className='sticky top-0 w-full h-screen flex justify-center items-center z-10'>
        <div className='w-[80%] h-[60%] rounded-3xl overflow-hidden relative flex items-end'>
          <img src={plane} alt="" className='w-full h-full object-cover absolute top-0 left-0' />
          <h1 className='text-white text-7xl font-[300] uppercase mb-16 z-10 text-center w-full tracking-wider'>take flight</h1>
        </div>
      </div>

      <div className='relative z-20 mt-[-10vh]'>
        <motion.div style={{ y }} className='flex flex-col items-center gap-10 pt-40'>
          <div className='w-[80%] h-[300px] border border-white rounded-3xl'></div>
          <div className='w-[80%] h-[300px] border border-white rounded-3xl'></div>
          <div className='w-[80%] h-[300px] border border-white rounded-3xl'></div>
          <div className='w-[80%] h-[300px] border border-white rounded-3xl'></div>
        </motion.div>
      </div>
    </div>
  )
}
