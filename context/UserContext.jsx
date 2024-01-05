import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const userContext = createContext();
const setUserContext = createContext();

export const useUserContext = () => {
  return useContext(userContext);
};
export const useSetUserContext = () => {
  return useContext(setUserContext);
};
export const UserProvider = props => {
  const [user, setUser] = useState([]);
  console.log(user + " desde context")
  return (
    <userContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
        {props.children}
      </setUserContext.Provider>
    </userContext.Provider>
  );
};
