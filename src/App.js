import React from 'react';
import Form from './Form';
import Display from './Display';
import EditName from './EditName';
import './style.css';
import { UserContextProvider } from './context/userContext';

const App = () => {
  return (
    <div>
      <UserContextProvider>
        <h1>Hello StackBlitz!</h1>
        <p style={{background:'yellow'}}>Component Form</p>
        <Form />
        <p style={{background:'yellow'}}>Component Display</p>
        <Display />
        <p style={{background:'yellow'}}>Component Edit Name</p>
        <EditName />
      </UserContextProvider>
    </div>
  );
};

export default App;
