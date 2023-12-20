import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const booleanSharedTaskContext = createContext();
const setBooleanSharedTaskContext = createContext();

export const useBooleanSharedTaskContext = () => {
  return useContext(booleanSharedTaskContext);
};

export const useSetBooleanSharedTaskContext = () => {
  return useContext(setBooleanSharedTaskContext);
};
export const SharedTaskBooleanProvider = (props) => {
  const [booleanSharedTask, setBooleanSharedTask] = useState(false);
  console.log(booleanSharedTask + " shared")
  return (
    <setBooleanSharedTaskContext.Provider value={setBooleanSharedTask}>
      <booleanSharedTaskContext.Provider value={booleanSharedTask}>
        {props.children}
      </booleanSharedTaskContext.Provider>
    </setBooleanSharedTaskContext.Provider>
  );
};