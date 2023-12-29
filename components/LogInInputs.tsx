import {View, Text} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import LogInButton from './LogInButton';
import { useSetOpacityContext } from '../context/BottomNavContext';

const LogInInputs = () => {
  const [emailFocus, setEmailFocus] = useState<string>('#00000000');
  const [passFocus, setPassFocus] = useState<string>('#00000000');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const setOpacity = useSetOpacityContext()

  const renderInputIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };
  
    useEffect(() => {
      const disabledHandler = (): void =>{
        if(email == "" || password == ""){
          
          setIsDisabled(true)
        }else{
          setIsDisabled(false)
        }
      }
      disabledHandler()
    }, [email, password])
    
  
  return (
    <>
      <View style={{width: '90%', marginBottom:"auto"}}>
        <Input
          placeholder="Email"
          placeholderTextColor={'#FFFF'}
          textStyle={{color:"#FFFF"}}
          onFocus={() => (setEmailFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setEmailFocus('#00000000'), setOpacity(0))}
          onChangeText={value => (setEmail(value))}
          value={email}
          style={{
            backgroundColor: emailFocus,
            borderColor: '#ffffff89',
            marginVertical: 20,
          }}></Input>
        <Input
          placeholder="Contraseña"
          placeholderTextColor={'#FFFF'}
          textStyle={{color:"#FFFF"}}
          onFocus={() => (setPassFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setPassFocus('#00000000'), setOpacity(0))}
          secureTextEntry={secureTextEntry}
          accessoryRight={renderInputIcon}
          onChangeText={value => (setPassword(value))}
          value={password}
          style={{
            backgroundColor: passFocus,
            borderColor: '#ffffff89',
          }}></Input>
      </View>
      <LogInButton
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      isDisabled={isDisabled}
      setIsDisabled={setIsDisabled}
      ></LogInButton>
    </>
  );
};

export default LogInInputs;
