import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { UserContext } from './utils/context.ts';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState(null);



  return (
    <React.StrictMode>
      <UserContext.Provider value={{userData , setUserData, isLoggedIn, setIsLoggedIn}}>
      <App />
      </UserContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
