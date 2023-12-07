import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './views/LogIn';
import Tasks from './views/Tasks';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import NavBarBottom from './components/NavBarBottom';
import { BottomNavProvider } from './context/BottomNavContext';


const Stack = createStackNavigator();
function App(): JSX.Element {
  
  return (
    <BottomNavProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Log In">
            <Stack.Screen
              name="Log in"
              component={LogIn}
              options={{
                headerTitle: '',
                headerStyle: {height:0},
              }}
            />
            <Stack.Screen name="Tasks" component={Tasks} />
          </Stack.Navigator>
        </NavigationContainer>
        <NavBarBottom></NavBarBottom>
      </ApplicationProvider>
    </BottomNavProvider>
    
  );
}

export default App;
