import React, {createContext, useContext} from 'react';
import {useState} from 'react';
import createUser from '../api/createUser';

const createUserContext = createContext();

export const useCreateUserContext = () =>{
    return useContext(createUserContext)
}
export const CreateUserProvider = props => {

  return (
    <createUserContext.Provider value={createUser}>
      {props.children}
    </createUserContext.Provider>
  );
};
