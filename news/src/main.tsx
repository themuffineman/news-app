import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.tsx';
import SearchPage from './pages/SearchPage.tsx';
import SignUpPage from './pages/SignUpPage.tsx';
import App from './App.tsx';
import { UserContext } from './utils/context.ts';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState(null);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ isLoggedIn ? ( <Layout />) : ( <UserContext.Provider value={{ userData, setUserData, setIsLoggedIn }}>  <SignUpPage /> </UserContext.Provider>)}>
        <Route path='' element={<App />} />
        <Route path='search/:searchQuery' element={<SearchPage />} />
      </Route>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
