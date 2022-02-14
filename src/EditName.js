import React, { useContext, useState } from 'react';
import { userContext } from './context/userContext';
const EditName = () => {
  const { dispatch } = useContext(userContext);
  const [nm, setNm] = useState();
  return (
    <div>
      <label>
        <input
          type="text"
          onChange={(e) => setNm(e.target.value)}
          value={nm}
        />
      </label>
      <button
        onClick={() => dispatch({ type: 'EDIT_NAME', payload: nm})}
      >
        Change Name
      </button>
      <button
        onClick={() =>
          dispatch({ type: 'PREFIX_NAME', payload: nm})
        }
      >
        Prefix Mr.
      </button>
    </div>
  );
};
export default EditName;
