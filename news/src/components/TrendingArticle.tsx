import React from 'react'
import TrendingButton from './TrendingButton'
import { HeadlineItem } from '../utils/types'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const TrendingArticle:React.FC<{headlines: HeadlineItem}> = ({headlines}) => {

  const openUrlInNewTab = () => {
    const url = `${headlines.url}`;  
    window.open(url, '_blank');
  }

  


  return (
    <>
    <h2 className='text-3xl sm:text-5xl font-bold capitalize mb-12 text-black'>Headlines</h2>
    <div className='relative rounded-lg h-max flex flex-col  '>
    <div className='absolute z-10 w-full h-full bg-black bg-opacity-70 top-0 left-1/2 -translate-x-1/2 flex p-2 rounded-lg' style={{backdropFilter: 'blur(5px)'}}  ></div>
    <div className=' w-[90vw] sm:w-[80vw] h-max  relative rounded-md bg-opacity-5 bg-center bg-cover' style={{backgroundImage: `url(${headlines.urlToImage? headlines.urlToImage : undefined })`}}>

        <div className=' flex flex-col md:flex-row w-full h-full z-20 justify-between gap-5 items-center px-5'>
            <div className=' w-full md:w-1/2 h-full flex justify-between flex-col gap-5 pl-4 my-12'>
                <p className=' bg-yellow-200 font-semibold text-black px-4 w-max rounded-xl py-2  z-20 '>Top Story</p>
                <h1 className=' text-xl  font-bold capitalize  z-20 text-white'>{headlines.title || <Skeleton variant="text" sx={{ fontSize: '2rem', bgcolor: 'grey.100' }} />}</h1>
                <p className='text-white opacity-90  z-20 text-lg'> {headlines.description || <Stack spacing={0}><Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: 'grey.100' }} /><Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: 'grey.100' }} /><Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: 'grey.100' }} /></Stack> } </p>
                <TrendingButton onClick={openUrlInNewTab}>Read Full Article</TrendingButton>
            </div>
            <div className='w-full md:w-[23rem] flex p-4 justify-center z-20  '>
                {headlines.urlToImage? <img src={headlines.urlToImage} alt="" className='w-full rounded-md border' /> : <Skeleton variant="rounded" sx={{bgcolor: 'grey.100', width:{xs:'200px', sm:'200px', md:'300px'}, height:{xs:'100px', sm:'200px', md:'200px'} }} /> }
            </div>
        </div>

    </div>
    </div>
    </>
  )
}

export default TrendingArticle