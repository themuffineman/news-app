import React from 'react'
import Favicon from '../assets/favicon.png'

const SourcesCard = ({onClick}: {onClick?: ()=> void}) => {
  return (
    <div className='relative w-max ml-10' onClick={onClick}>
        <div className='p-1 bg-gray-50 w-20 border rounded-full  '>
            <img src={Favicon} alt="" className=' w-full rounded-full' />
        </div>
        <div className='bg-white text- rounded-3xl border w-max py-1 px-3 shadow font-normal absolute -bottom-6 left-1/2 -translate-x-1/2'>CNN</div>
    </div>
  )
}

export default SourcesCard