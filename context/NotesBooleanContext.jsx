import React, {createContext, useContext} from 'react';
import {useState} from 'react';

const booleanNotesContext = createContext();
const setBooleanNotesContext = createContext();

export const useBooleanNotesContext = () => {
  return useContext(booleanNotesContext);
};

export const useSetBooleanNotesContext = () => {
  return useContext(setBooleanNotesContext);
};
export const NotesBooleanProvider = (props) => {
  const [booleanNotes, setBooleanNotes] = useState(false);
  console.log(booleanNotes + " notes")
  return (
    <setBooleanNotesContext.Provider value={setBooleanNotes}>
      <booleanNotesContext.Provider value={booleanNotes}>
        {props.children}
      </booleanNotesContext.Provider>
    </setBooleanNotesContext.Provider>
  );
};