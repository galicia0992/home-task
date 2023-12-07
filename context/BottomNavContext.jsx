import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const booleanNavContext = createContext();
const setBooleanNavContext = createContext();

export const useBooleanNavContext = () => {
  return useContext(booleanNavContext);
};

export const useSetBooleanNavContext = () => {
  return useContext(setBooleanNavContext);
};
export const BottomNavProvider = (props) => {
  const [booleanNav, setBooleanNav] = useState(false);
  
  return (
    <setBooleanNavContext.Provider value={setBooleanNav}>
      <booleanNavContext.Provider value={booleanNav}>
        {props.children}
      </booleanNavContext.Provider>
    </setBooleanNavContext.Provider>
  );
};
