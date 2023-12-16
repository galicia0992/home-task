import {View, Text, SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HeaderbackButton from './HeaderbackButton';
import AddIconComponent from './icons/AddIconComponent';
import Notes from '../views/Notes';
import Tasks from '../views/Tasks';
import SharedTask from '../views/SharedTask';

const { Navigator, Screen } = createBottomTabNavigator();

interface Props{
  navigation:any,
  state:any
}


const NavBarBottom = ({ navigation, state }: Props): JSX.Element => {
  
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
      return(
        <>
        {
            <BottomNavigation
              selectedIndex={state.index}
              onSelect={index => navigation.navigate(state.routeNames[index])}
              >
              <BottomNavigationTab title="Tareas individuales" />
              <BottomNavigationTab title="Notas" />
              <BottomNavigationTab title="Tareas compartidas" />
            </BottomNavigation>
          
        }
        </>
      )
    
};

export const TabNavigator = () => (
  <Navigator tabBar={props => <NavBarBottom {...props} />}>
    <Screen name='TasksNav' component={Tasks}
     options={{
      headerLeft:() => <HeaderbackButton></HeaderbackButton>,
      headerRight:() => <AddIconComponent></AddIconComponent>,
      title:"", 
      headerStyle: {backgroundColor:"#FFFF", shadowColor: 'transparent'}
    }}/>
    <Screen name='Notes' component={Notes}
    options={{
      headerLeft:() => <HeaderbackButton></HeaderbackButton>,
      headerRight:() => <AddIconComponent></AddIconComponent>,
      title:"", 
      headerStyle: {backgroundColor:"#FFFF", shadowColor: 'transparent'}
    }}
    />
    <Screen name='Shared' component={SharedTask}
    options={{
      headerLeft:() => <HeaderbackButton></HeaderbackButton>,
      headerRight:() => <AddIconComponent></AddIconComponent>,
      title:"", 
      headerStyle: {backgroundColor:"#FFFF", shadowColor: 'transparent'}
    }}
    />
  </Navigator>
    
  
);

export const AppNavigator = () => (
  <NavigationContainer independent={true}>
    <TabNavigator/>
  </NavigationContainer>
);
