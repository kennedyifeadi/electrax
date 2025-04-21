import React from 'react'
import { Landing } from '../components/ProductPageCom/Landing'
import { Aereodynamics } from '../components/ProductPageCom/Aereodynamics'
import { ParralaxSection } from '../components/ProductPageCom/ParralaxSection'

export const ProductPage = () => {
  return (
    <div className='flex flex-col w-full h-max'>
      <Landing/>
      <Aereodynamics/>
      <ParralaxSection/>
    </div>
  )
}
