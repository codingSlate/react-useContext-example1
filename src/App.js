import React, {useState, createContext} from "react";
import Form from "./Form";
import Display from "./Display";
import "./style.css";

export const userContext = createContext(null)

const App = () => {
  const [userName, setUserName] = useState('')
  return (
    <div>
      <userContext.Provider value={{userName, setUserName}}>
      <h1>Hello StackBlitz!</h1>
      <Form/>
      <Display/>
      </userContext.Provider>
    </div>
  );
}

export default App