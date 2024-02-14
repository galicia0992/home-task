import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LogIn from './views/LogIn';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {BottomNavProvider} from './context/BottomNavContext';
import {TabNavigator} from './components/NavBarBottom';
import {ModalAddProvider} from './context/ModalAddContext';
import {NotesBooleanProvider} from './context/NotesBooleanContext';
import {SharedTaskBooleanProvider} from './context/SharedTaskBooleanContext';
import { EmailProvider } from './context/EmailContext';
import {TaskBooleanProvider} from './context/TaskBooleanContext';
import {GluestackUIProvider, Text} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
const Stack = createStackNavigator();
function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NotesBooleanProvider>
        <EmailProvider>
        <SharedTaskBooleanProvider>
          <TaskBooleanProvider>
            <ModalAddProvider>
              <BottomNavProvider>
                <ApplicationProvider {...eva} theme={eva.light}>
                  <NavigationContainer>
                    <Stack.Navigator initialRouteName="Log in">
                      <Stack.Screen
                        name="Log in"
                        component={LogIn}
                        options={{
                          headerTitle: '',
                          headerStyle: {height: 0},
                        }}
                      />
                      <Stack.Screen
                        name="Home"
                        component={TabNavigator}
                        options={{
                          headerShown: false,
                        }}
                      />
                    </Stack.Navigator>
                  </NavigationContainer>
                </ApplicationProvider>
              </BottomNavProvider>
            </ModalAddProvider>
          </TaskBooleanProvider>
        </SharedTaskBooleanProvider>
        </EmailProvider>
      </NotesBooleanProvider>
    </GluestackUIProvider>
  );
}

export default App;
