import React from 'react'
import NewsCard from '../components/NewsCard'
import LoadMore from '../components/LoadMore'

const NewsGrid: React.FC = () => {
  return (
    <div className='flex flex-col gap-10 justify-between items-center w-[90vw]-t-2 mt-20 p-2'>
        <h2 className=' text-3xl sm:text-5xl font-bold capitalize  text-black '>Top Stories</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-center content-center w-full px-2'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
        <LoadMore/>
    </div>
  )
}

export default NewsGrid