import React from 'react'
import SourcesCard from '../components/SourcesCard'
import '../Components.css'

const Sources: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-between mt-10 gap-10'>
    <h2 className=' text-3xl sm:text-5xl font-bold capitalize text-black'>News Sources</h2>
    <div className='w-[90vw] h-max overflow-x-auto p-8 grid grid-rows-1 grid-flow-col scroll-smooth  '>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
        <SourcesCard/>
    </div>
    </div>
  )
}

export default Sources