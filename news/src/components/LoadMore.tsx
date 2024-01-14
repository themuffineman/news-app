import React, { useState } from 'react'
import NewsCardButton from './NewsCardButton'
import Loading from './Loading'

const LoadMore:React.FC = () => {
    const [load, setload] = useState(false)
  return (
    <div  className='mt-4'>
       {load? <Loading/> : <NewsCardButton onClick={()=> setload(prev => !prev)} >Load More</NewsCardButton>}
    </div>
  )
}


export default LoadMore