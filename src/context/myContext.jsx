import React, { createContext, useState, useEffect } from "react";
import { auth, handleLogin, LogOut } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [mode, setMode] = useState('light'); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuth(!!currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <myContext.Provider value={{ user, setUser, isAuth, setIsAuth, mode, setMode, handleLogin, LogOut }}>
      {children}
    </myContext.Provider>
  );
};

export default myContext;
