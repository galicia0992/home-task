import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const booleanModalAddContext = createContext();
const setBooleanModalAddContext = createContext();

export const useBooleanModalAddContext = () => {
  return useContext(booleanModalAddContext);
};

export const useSetBooleanModalAddContext = () => {
  return useContext(setBooleanModalAddContext);
};
export const ModalAddProvider = (props) => {
  const [booleanModalAdd, setBooleanModalAdd] = useState(false);
  console.log(booleanModalAdd)
  return (
    <setBooleanModalAddContext.Provider value={setBooleanModalAdd}>
      <booleanModalAddContext.Provider value={booleanModalAdd}>
        {props.children}
      </booleanModalAddContext.Provider>
    </setBooleanModalAddContext.Provider>
  );
};