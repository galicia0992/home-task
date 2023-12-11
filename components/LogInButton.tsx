import {View, Text} from 'react-native';
import React from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';
import { logInUser } from '../api/logInUser';
import {useNavigation} from '@react-navigation/native';
type Props = {
  email:any,
  password:any
};

const LogInButton = ({email, password}:Props): JSX.Element => {
  const navigation = useNavigation();
  const logIn = () =>{
    logInUser(email, password, navigation)
  }
  return (
    <Button
      appearance="filled"
      status="primary"
      onPress={logIn}
      style={{width: 320, height: 52}}>
      {() => (
        <Text
          style={{color: '#FFFF', fontSize: 20, fontFamily: 'Roboto-Light'}}>
          Iniciar sesion
        </Text>
      )}
    </Button>
  );
};

export default LogInButton;
