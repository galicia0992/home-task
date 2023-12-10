import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';
import createUser from '../api/createUser';
import { useNavEmailIndexContext } from '../context/NavEmailContext';
type Props = {
  createEmail:any,
  createPass:any,
  confirmCreatePass:any,
  setCreateEmail:any,
  setCreatePass:any,
  setConfirmCreatePass:any
};

const CreateAccountButton = ({createEmail, createPass, confirmCreatePass, setCreatePass, setCreateEmail, setConfirmCreatePass}: Props) => {
  const setSelectedIndex = useNavEmailIndexContext()
  const userCreation = ():void =>{
    createUser(createEmail, createPass, setSelectedIndex)
    setConfirmCreatePass("")
    setCreateEmail("")
    setCreatePass("")
  }
  return (
    <Button
      appearance="filled"
      status="primary"
      onPress={userCreation}
      style={{width: 320, height: 52}}>
      {() => (
        <Text
          style={{color: '#FFFF', fontSize: 20, fontFamily: 'Roboto-Light'}}>
          Crear cuenta
        </Text>
      )}
    </Button>
  );
};

export default CreateAccountButton;

const styles = StyleSheet.create({});
