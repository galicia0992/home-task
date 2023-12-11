import {StyleSheet, Text, View, Alert} from 'react-native';
import React from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';
import createUser from '../api/createUser';
import {useNavEmailIndexContext} from '../context/NavEmailContext';
type Props = {
  createEmail: any;
  createPass: any;
  confirmCreatePass: any;
  setCreateEmail: any;
  setCreatePass: any;
  setConfirmCreatePass: any;
};

const CreateAccountButton = ({
  createEmail,
  createPass,
  confirmCreatePass,
  setCreatePass,
  setCreateEmail,
  setConfirmCreatePass,
}: Props) => {
  let regex = /\.(com|net|org|edu|gov)$/i;
  const setSelectedIndex = useNavEmailIndexContext();
  const userCreation = (): void => {
    if(createEmail.includes("@") && regex.test(createEmail)){
      if (createPass !== confirmCreatePass || createPass == "" || confirmCreatePass == "") {
        Alert.alert(`Las contraseñas no coinciden`,"", [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }else{
        createUser(createEmail, createPass, setSelectedIndex);
        setConfirmCreatePass('');
        setCreateEmail('');
        setCreatePass('');
      }
    }else{
      Alert.alert(`Verifica el correo`,"", [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
    
  };
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
