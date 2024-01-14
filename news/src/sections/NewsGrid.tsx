import React from 'react'
import NewsCard from '../components/NewsCard'
import Loading from '../components/Loading'

const NewsGrid: React.FC = () => {
  return (
    <div className='flex flex-col justify-between items-center w-[90vw]-t-2 mt-40 p-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center content-center w-full p-1 '>
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
        <Loading/>
    </div>
  )
}

export default NewsGrid