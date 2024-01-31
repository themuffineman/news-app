import React, { useContext} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './utils/context'
import SignUpPage from './pages/SignUpPage'
import Layout from './Layout'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'



const App: React.FC = () => {

  const {isLoggedIn} = useContext<any>(UserContext)


  return (
    
    <Router>
      <Routes>
        <Route path="/signin" element={isLoggedIn? <Navigate to='/'/> : <SignUpPage/>} />
        <Route path='/' element={ isLoggedIn? <Layout/> : <Navigate to='signin'/>}>
            <Route index element={<HomePage/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    

  )
}

export default App