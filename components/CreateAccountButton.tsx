import {StyleSheet, Text, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {Spinner, Button} from '@ui-kitten/components';
import createUser from '../api/createUser';
import {useNavEmailIndexContext} from '../context/NavEmailContext';
type Props = {
  createEmail: any;
  createPass: any;
  confirmCreatePass: any;
  setCreateEmail: any;
  setCreatePass: any;
  setConfirmCreatePass: any;
  name: any;
  setName: any;
  lastName: any;
  setLastName: any;
  isDisabled:any,
  setIsDisabled:any
};

const CreateAccountButton = ({
  createEmail,
  createPass,
  confirmCreatePass,
  setCreatePass,
  setCreateEmail,
  setConfirmCreatePass,
  name,
  lastName,
  setLastName,
  setName,
  isDisabled,
  setIsDisabled
}: Props) => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  let regex = /\.(com|net|org|edu|gov)$/i;
  const setSelectedIndex = useNavEmailIndexContext();
  const userCreation = (): void => {
    if (createEmail.includes('@') && regex.test(createEmail)) {
      if (
        createPass !== confirmCreatePass ||
        createPass == '' ||
        confirmCreatePass == ''
      ) {
        Alert.alert(`Las contraseñas no coinciden`, '', [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      } else {
        createUser(
          createEmail,
          createPass,
          setSelectedIndex,
          name,
          lastName,
          setShowSpinner,
          setIsDisabled
        );
        setConfirmCreatePass('');
        setCreateEmail('');
        setCreatePass('');
        setLastName('');
        setName('');
      }
    } else {
      Alert.alert(`Verifica el correo`, '', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }
  };
  return (
    <>
      {showSpinner ? (
        <Button
          appearance="filled"
          status="primary"
          style={{width: 320, height: 52}}>
          {() => <Spinner status="success" />}
        </Button>
      ) : (
        <Button
          appearance="filled"
          status="primary"
          onPress={userCreation}
          disabled={isDisabled}
          style={{width: 320, height: 52}}>
          {() => (
            <Text
              style={{
                color: '#FFFF',
                fontSize: 20,
                fontFamily: 'Roboto-Light',
              }}>
              Crear cuenta
            </Text>
          )}
        </Button>
      )}
    </>
  );
};

export default CreateAccountButton;

const styles = StyleSheet.create({});
