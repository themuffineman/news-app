import React, { useState, useEffect } from 'react'
import SourcesCard from '../components/SourcesCard'
import '../Components.css'
import { SourceList } from '../utils/types'



const Sources: React.FC = () => {

  const [sourcesData, setSourcesData] = useState<SourceList>([])

  const apiKey = '2n8wA4vBFQwSPQh6XUjf6qKlzgoObCfbWC7irZqX'

  useEffect(() => {
    async function getSources(){

      try{
        const rawSourceData = await fetch(`https://api.thenewsapi.com/v1/news/sources?api_token=${apiKey}&language=en`)
        const jsonSourcesData = await rawSourceData.json()
        const sourcesData = jsonSourcesData.data
        const reducedSourcesData = sourcesData.slice(0,24)
        // console.log(reducedSourcesData)
        setSourcesData(reducedSourcesData)
  
  
  
      }
      catch(error){
        console.log('Error fetching sources data:', error)
      }
    }
    getSources()
  },[])

  

  return (
    <div className='flex flex-col items-center justify-between mt-10 gap-10'>
    <h2 className=' text-3xl sm:text-5xl font-bold capitalize text-black'>News Sources</h2>
    <div className='w-[90vw] h-max overflow-x-auto p-8 grid grid-rows-1 gap-36 grid-flow-col-dense scroll-smooth  '>
        {sourcesData.map((source)=> <SourcesCard url={source.domain}/>)}
    </div>
    </div>
  )
}

export default Sources