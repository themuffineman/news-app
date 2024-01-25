import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.tsx'
import SearchPage from './pages/SearchPage.tsx'
import SignUpPage from './pages/SignUpPage.tsx'
import App from './App.tsx'
import { UserContext } from './utils/context.ts'

const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
const [userData, setUserData] = useState(null);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={isLoggedIn? '/': '/login'} element={isLoggedIn? <Layout/> : <SignUpPage />}>
      <Route path='' element={<UserContext.Provider value={{userData, setUserData, setIsLoggedIn}}> <App/> </UserContext.Provider>}/>
      <Route path='search/:searchQuery' element={<SearchPage/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
