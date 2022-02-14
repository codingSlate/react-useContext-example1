import React, { useState, createContext } from 'react';
export const userContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');

  return (
    <userContext.Provider value={{ userName, setUserName }}>
      {children}
    </userContext.Provider>
  );
};
