import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { UserContext } from './utils/context.ts';
import { User } from './utils/types.ts';



const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
  const [userData, setUserData] = useState<User[]>([]);



  return (
    <React.StrictMode>
      <UserContext.Provider value={{userData , setUserData, isLoggedIn, setIsLoggedIn}}>
      <App />
      </UserContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<Main />);
