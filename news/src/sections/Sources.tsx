import React, { useState, useEffect } from 'react';
import SourcesCard from '../components/SourcesCard';
import '../Components.css';
import { SourceList } from '../utils/types';
import { getSources, getSourcesFavicon } from '../utils/functions';

const Sources: React.FC = () => {
  const [sourcesData, setSourcesData] = useState<SourceList>([]);

  useEffect(() => {
    async function getSourcesData() {
      try {
        const sourcesData = await getSources();
        const sourcesWithFavicons = await Promise.all(
          sourcesData.map(async (source:any) => {
            const favicon = await getSourcesFavicon(source.domain);
            return { ...source, faviconUrl: favicon };
          })
        );
        setSourcesData(sourcesWithFavicons);
      } catch (error) {
        console.log('Error fetching sources data:', error);
      }
    }
    getSourcesData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-between mt-10 gap-10'>
      <h2 className='text-3xl sm:text-5xl font-bold capitalize text-black'>News Sources</h2>
      <div className='w-[90vw] h-max overflow-x-auto p-8 grid grid-rows-1 gap-36 grid-flow-col-dense scroll-smooth'>
        {sourcesData.length > 0 &&
          sourcesData.map((source) => (
            <SourcesCard key={source.source_id} url={source.domain} faviconUrl={source.faviconUrl} />
          ))}
      </div>
    </div>
  );
};

export default Sources;
