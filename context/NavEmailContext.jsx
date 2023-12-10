import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const navEmailContext = createContext();
const navEmailIndexContext = createContext();

export const useNavEmailContext = () => {
  return useContext(navEmailContext);
};
export const useNavEmailIndexContext = () => {
  return useContext(navEmailIndexContext);
};
export const NavEmailProvider = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <navEmailContext.Provider value={selectedIndex}>
      <navEmailIndexContext.Provider value={setSelectedIndex}>
        {props.children}
      </navEmailIndexContext.Provider>
    </navEmailContext.Provider>
  );
};
