import React, { createContext, useState, useEffect } from "react";
import { auth, handleLogin, LogOut } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

// Create the context
const myContext = createContext();

// Context provider component
export const MyContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [mode, setMode] = useState('light'); // Default mode is light

  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsAuth(!!currentUser);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <myContext.Provider value={{ user, setUser, isAuth, setIsAuth, mode, setMode, handleLogin, LogOut }}>
      {children}
    </myContext.Provider>
  );
};

export default myContext;
