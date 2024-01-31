import React, { useContext, useEffect, useState } from 'react'
import TrendingArticle from './components/TrendingArticle'
import NewsGrid from './sections/NewsGrid'
import Sources from './sections/Sources'
import { getheadlines } from './utils/functions'
import { HeadlineItem } from './utils/types';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './utils/context'
import SignUpPage from './pages/SignUpPage'
import Layout from './Layout'

const App: React.FC = () => {

  const [headlines, setHeadlines] = useState<HeadlineItem>({})
  const {isLoggedIn, setIsLoggedIn} = useContext(UserContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getheadlines();
        setHeadlines(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);


  
  {/* <div className='flex flex-col items-center justify-between py-5 pt-40 gap-2 scroll-smooth'> */}

  return (
    
    <Router>
      <Routes>
        <Route path="/signin" element={isLoggedIn? <Navigate to='/'/> : <SignUpPage/>} />
        <Route path='/' element={ isLoggedIn? <Layout/> : <Navigate to='signin'/>}>
            <TrendingArticle headlines={headlines}/>
            <Sources/>
            <NewsGrid/>
        </Route>
      </Routes>
    </Router>
    

  )
}

export default App