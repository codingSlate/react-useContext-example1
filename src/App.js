import React from 'react';
import Form from './Form';
import Display from './Display';
import './style.css';
import { UserContextProvider } from './context/userContext';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <h1>Hello StackBlitz!</h1>
        <Form />
        <Display />
      </UserContextProvider>
    </div>
  );
};

export default App;
