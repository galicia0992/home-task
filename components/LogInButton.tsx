import {View, Text} from 'react-native';
import React from 'react';
import {Spinner, Button} from '@ui-kitten/components';
import { logInUser } from '../api/logInUser';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { useSetEmailContext } from '../context/EmailContext';
type Props = {
  email:any,
  password:any,
  isDisabled:any,
  setIsDisabled:any
  setEmail: any,
  setPassword:any
};

const LogInButton = ({email, password, isDisabled, setIsDisabled, setEmail, setPassword}:Props): JSX.Element => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const navigation = useNavigation();
  const setEmailPass = useSetEmailContext()
  const logIn = () =>{
    logInUser(email, password, navigation, setShowSpinner, setIsDisabled, setEmail, setPassword)
    setEmailPass(email)
  }
  return (
    <>
    {
      showSpinner ? <Button
      appearance="filled"
      status="primary"
      style={{width: 320, height: 52}}>
      {() => (
        <Spinner status='success' ></Spinner>
      )}
    </Button>:<Button
      appearance="filled"
      status="primary"
      onPress={logIn}
      disabled={isDisabled}
      style={{width: 320, height: 52}}>
      {() => (
        <Text
          style={{color: '#FFFF', fontSize: 20, fontFamily: 'Roboto-Light'}}>
          Iniciar sesion
        </Text>
      )}
    </Button>
    }
    </>
  );
};

export default LogInButton;
