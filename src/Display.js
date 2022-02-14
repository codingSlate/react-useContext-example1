import React, { useContext } from 'react';
import { userContext } from './App';

const Display = () => {
  const { userName } = useContext(userContext);
  return <div>Your Name is: {userName}</div>;
};
export default Display;
