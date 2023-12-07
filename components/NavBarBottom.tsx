import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {useBooleanNavContext} from '../context/BottomNavContext';

const NavBarBottom = (): JSX.Element => {
  const booleanNav = useBooleanNavContext();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <>
      {!booleanNav ? (
        ''
      ) : (
        <BottomNavigation
          selectedIndex={selectedIndex}
          onSelect={index => setSelectedIndex(index)}>
          <BottomNavigationTab title="Notas" />
          <BottomNavigationTab title="Tareas individuales" />
          <BottomNavigationTab title="Tareas compartidas" />
        </BottomNavigation>
      )}
    </>
  );
};

export default NavBarBottom;
