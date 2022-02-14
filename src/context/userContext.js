import React, { useState, createContext, useReducer } from 'react';

export const userContext = createContext(null);

const initialState = 'Kumar';
const reducer = (state, action) => {
  switch (action.type) {
    case 'EDIT_NAME':
      return action.payload
    case 'PREFIX_NAME':
      if(action.payload){
        return "Mr. " + action.payload
      }else{
        return "Mr. " + state
      }
    default:
      return state;
  }
};

export const UserContextProvider = ({ children }) => {
  const [userName, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ userName, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
