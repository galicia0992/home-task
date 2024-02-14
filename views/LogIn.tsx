import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ImageBackground} from 'react-native';
import NavBarEmail from '../components/NavBarEmail';
import {TouchableWithoutFeedback} from 'react-native';
import {Keyboard} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Layout} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import { NavEmailProvider } from '../context/NavEmailContext';
import {useSetBooleanNavContext} from '../context/BottomNavContext';


const LogIn = (): JSX.Element => {
  const setBooleanNav = useSetBooleanNavContext()

  useEffect(() => {
   setBooleanNav(false)
  }, [])
  
  return (
    <ImageBackground
      source={require('../img/mt2.jpg')}
      resizeMode="cover"
      style={{height: '100%'}}>
      <IconRegistry icons={EvaIconsPack} />
      <NavEmailProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <View style={styles.header}>
              <Text style={styles.hola}>Hola</Text>
              <Text style={styles.inicia}>Inicia sesion en tu cuenta</Text>
            </View>
            <NavBarEmail></NavBarEmail>
          </View>
        </TouchableWithoutFeedback>
      </ApplicationProvider>
      </NavEmailProvider>
    </ImageBackground>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    marginBottom: 80,
  },
  hola: {
    fontSize: 40,
    fontWeight: '300',
    color: '#FFFF',
    marginBottom: 13,
    fontFamily: 'Roboto-Medium',
  },
  inicia: {
    fontSize: 18,
    color: '#FFFF',
    fontFamily: 'Roboto-Light',
  },
});
