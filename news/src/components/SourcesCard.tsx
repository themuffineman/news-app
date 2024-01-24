import React from 'react'
import {useState } from 'react'
import { SourcesCardProps } from '../utils/types'
import Skeleton from '@mui/material/Skeleton'
 

const SourcesCard: React.FC<SourcesCardProps> = ({onClick, url, faviconUrl}) => {
  
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setIsLoaded(true);
  };





  return (
    <div className='relative w-max  cursor-pointer' onClick={onClick}>
        <div className='p-1 bg-gray-50 w-20 border rounded-full  flex justify-center'>
            {!faviconUrl && <Skeleton variant="circular" animation="wave" sx={{width:'4.5rem', height: '4.5rem'}} /> }
            <img src={faviconUrl} alt="" onLoad={handleImageLoad} className=' w-full rounded-full' style={{ display: isLoaded ? 'block' : 'none' }} />
        </div>
        <div className='bg-white text-semibold capitalize rounded-3xl border w-max py-1 px-3 shadow font-normal absolute -bottom-6 left-1/2 -translate-x-1/2'>{url}</div>
    </div>
  )
}

export default SourcesCard