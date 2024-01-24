import React from 'react'
import NewsCardButton from './NewsCardButton'
import Loading from './Loading'

const LoadMore:React.FC<{
  loadingMore: boolean;
  setLoadingMore: (param: boolean) => void;
  getNewsdata: () => void;
  }> = ({loadingMore, setLoadingMore, getNewsdata}) => {

  function fetchMoreData(){
    setLoadingMore(true)
    getNewsdata()
  }
    
  return (
    <div  className='mt-4'>
       {loadingMore? <Loading/> : <NewsCardButton onClick={()=> fetchMoreData()} >Load More</NewsCardButton>}
    </div>
  )
}


export default LoadMore