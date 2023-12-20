import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const booleanTaskContext = createContext();
const setBooleanTaskContext = createContext();

export const useBooleanTaskContext = () => {
  return useContext(booleanTaskContext);
};

export const useSetBooleanTaskContext = () => {
  return useContext(setBooleanTaskContext);
};
export const TaskBooleanProvider = (props) => {
  const [booleanTask, setBooleanTask] = useState(false);
  console.log(booleanTask + " task")
  return (
    <setBooleanTaskContext.Provider value={setBooleanTask}>
      <booleanTaskContext.Provider value={booleanTask}>
        {props.children}
      </booleanTaskContext.Provider>
    </setBooleanTaskContext.Provider>
  );
};