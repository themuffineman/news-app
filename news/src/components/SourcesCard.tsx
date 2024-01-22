import React from 'react'
import { useEffect, useState } from 'react'
import { SourcesCardProps } from '../utils/types'
 

const SourcesCard: React.FC<SourcesCardProps> = ({onClick, url}) => {

  const [logoUrl, setLogoUrl] = useState<string>()


  useEffect(() => {
    const websiteUrl = `https://www.${url}`;
    const proxyUrl = `http://localhost:3002/api/proxy?websiteUrl=${encodeURIComponent(websiteUrl)}`;
    
    // Make a request to the proxy server
    fetch(proxyUrl)
      .then(response => response.json())
      .then(data => {
      console.log('Data from proxy server:', data.faviconUrl);
      setLogoUrl(data.faviconUrl)
      })
      .catch(error => {
      console.error('Error fetching data from proxy server:', error);
      });
    }, []
  );

  return (
    <div className='relative w-max ml-10 cursor-pointer' onClick={onClick}>
        <div className='p-1 bg-gray-50 w-20 border rounded-full  '>
            <img src={logoUrl} alt="" className=' w-full rounded-full' />
        </div>
        <div className='bg-white text- rounded-3xl border w-max py-1 px-3 shadow font-normal absolute -bottom-6 left-1/2 -translate-x-1/2'>{url}</div>
    </div>
  )
}

export default SourcesCard