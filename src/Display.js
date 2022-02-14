import React, { useContext } from 'react';
import { userContext } from './context/userContext';

const Display = () => {
  const { userName } = useContext(userContext);
  return <div>Your Name is: {userName}</div>;
};
export default Display;
