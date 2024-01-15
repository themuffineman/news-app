import React from 'react'
import NewsCardButton from './NewsCardButton'
import Loading from './Loading'

const LoadMore:React.FC<{
  loadingMore: boolean;
  setLoadingMore: (param: boolean) => void;
  getNews: () => void;
  }> = ({loadingMore, setLoadingMore, getNews}) => {

  function fetchMoreData(){
    setLoadingMore(true)
    getNews()
  }
    
  return (
    <div  className='mt-4'>
       {loadingMore? <Loading/> : <NewsCardButton onClick={()=> fetchMoreData()} >Load More</NewsCardButton>}
    </div>
  )
}


export default LoadMore