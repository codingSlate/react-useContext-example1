import React, { useContext } from 'react';
import { userContext } from './context/userContext';

const Form = () => {
  const { userName, setUserName } = useContext(userContext);
  return (
    <div>
      <label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
      </label>
    </div>
  );
};
export default Form;
