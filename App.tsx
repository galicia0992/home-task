import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './views/LogIn';
import Tasks from './views/Tasks';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { AppNavigator } from './components/NavBarBottom';
import { BottomNavProvider } from './context/BottomNavContext';
import AddIconComponent from './components/icons/AddIconComponent';
import HeaderbackButton from './components/HeaderbackButton';
import { TabNavigator } from './components/NavBarBottom';
const Stack = createStackNavigator();
function App(): JSX.Element {
  
  return (
    <BottomNavProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Log in">
            <Stack.Screen
              name="Log in"
              component={LogIn}
              options={{
                headerTitle: '',
                headerStyle: {height:0},
              }}
            />
            <Stack.Screen name="Home" component={TabNavigator} options={{
                headerShown:false,
              }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </BottomNavProvider>
    
  );
}

export default App;
