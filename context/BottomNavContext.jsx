import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const booleanNavContext = createContext();
const setBooleanNavContext = createContext();
const opacityContext = createContext();
const setOpacityContext = createContext();

export const useBooleanNavContext = () => {
  return useContext(booleanNavContext);
};

export const useSetBooleanNavContext = () => {
  return useContext(setBooleanNavContext);
};
export const useOpacityContext = () => {
  return useContext(opacityContext);
};
export const useSetOpacityContext = () => {
  return useContext(setOpacityContext);
};
export const BottomNavProvider = props => {
  const [booleanNav, setBooleanNav] = useState(false);
  const [opacity, setOpacity] = useState(0);
  return (
    <setBooleanNavContext.Provider value={setBooleanNav}>
      <booleanNavContext.Provider value={booleanNav}>
        <opacityContext.Provider value={opacity}>
          <setOpacityContext.Provider value={setOpacity}>
            {props.children}
          </setOpacityContext.Provider>
        </opacityContext.Provider>
      </booleanNavContext.Provider>
    </setBooleanNavContext.Provider>
  );
};
