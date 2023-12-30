import {View, Button, Pressable} from 'react-native';
import React, {useRef} from 'react';
import {useState, useEffect} from 'react';
import {Input, Icon} from '@ui-kitten/components';
import {Button as Btn, ButtonText} from '@gluestack-ui/themed';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CreateAccountButton from './CreateAccountButton';
import SecurePassBar from './indicators/SecurePassBar';
import {useSetOpacityContext} from '../context/BottomNavContext';
import Recaptcha, {RecaptchaRef} from 'react-native-recaptcha-that-works';

const CreateAccount = () => {
  const [emailFocus, setEmailFocus] = useState<string>('#00000000');
  const [passFocus, setPassFocus] = useState<string>('#00000000');
  const [passConfirmFocus, setPassConfirmFocus] = useState<string>('#00000000');
  const [nameFocus, setNameFocus] = useState<string>('#00000000');
  const [lastNameFocus, setLastNameFocus] = useState<string>('#00000000');
  const [createEmail, setCreateEmail] = useState<string>('');
  const [createPass, setCreatePass] = useState<string>('');
  const [confirmCreatePass, setConfirmCreatePass] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] =
    useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isDisabledRecaptcha, setIsDisabledRecaptcha] =
    useState<boolean>(false);
  const [getToken, setGetToken] = useState<any>('');
  const setOpacity = useSetOpacityContext();

  const recaptcha = useRef<RecaptchaRef | null>(null);

  const send = () => {
    recaptcha.current?.open();
  };
  const ClosePress = () => {
    recaptcha.current?.close();
  };
  const onVerify = (token: any) => {
    setGetToken(token);
  };

  const onExpire = () => {
    console.warn('expired!');
  };

  const renderInputIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );
  const renderInputConfirmIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleConfirmSecureEntry}>
      <Icon {...props} name={!secureConfirmTextEntry ? 'eye' : 'eye-off'} />
    </TouchableWithoutFeedback>
  );
  const toggleConfirmSecureEntry = (): void => {
    setSecureConfirmTextEntry(!secureConfirmTextEntry);
  };
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };
  useEffect(() => {
    const disabledHandler = (): void => {
      if (
        createEmail == '' ||
        createPass == '' ||
        confirmCreatePass == '' ||
        name == '' ||
        lastName == '' ||
        getToken == ''
      ) {
        setIsDisabled(true);
        setIsDisabledRecaptcha(false);
      } else {
        setIsDisabled(false);
      }
      if (getToken !== '') {
        setIsDisabledRecaptcha(true);
      }
    };
    disabledHandler();
  }, [createEmail, createPass, confirmCreatePass, name, lastName, getToken]);
  return (
    <>
      <View style={{width: '90%', marginBottom: 'auto'}}>
        <Input
          placeholder="Email"
          placeholderTextColor={'#FFFF'}
          textStyle={{color: '#FFFF'}}
          onFocus={() => (setEmailFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setEmailFocus('#00000000'), setOpacity(0))}
          onChangeText={value => setCreateEmail(value)}
          value={createEmail}
          style={{
            backgroundColor: emailFocus,
            borderColor: '#ffffff89',
            marginVertical: 20,
          }}
        />
        <Input
          placeholder="Nombre"
          placeholderTextColor={'#FFFF'}
          textStyle={{color: '#FFFF'}}
          onFocus={() => (setNameFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setNameFocus('#00000000'), setOpacity(0))}
          onChangeText={value => setName(value)}
          value={name}
          style={{
            backgroundColor: nameFocus,
            borderColor: '#ffffff89',
            marginBottom: 20,
          }}
        />
        <Input
          placeholder="Apelidos"
          placeholderTextColor={'#FFFF'}
          textStyle={{color: '#FFFF'}}
          onFocus={() => (setLastNameFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setLastNameFocus('#00000000'), setOpacity(0))}
          onChangeText={value => setLastName(value)}
          value={lastName}
          style={{
            backgroundColor: lastNameFocus,
            borderColor: '#ffffff89',
            marginBottom: 20,
          }}
        />
        <Input
          placeholder="Contraseña"
          placeholderTextColor={'#FFFF'}
          textStyle={{color: '#FFFF'}}
          onFocus={() => (setPassFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setPassFocus('#00000000'), setOpacity(0))}
          secureTextEntry={secureTextEntry}
          accessoryRight={renderInputIcon}
          onChangeText={value => setCreatePass(value)}
          value={createPass}
          style={{
            backgroundColor: passFocus,
            borderColor: '#ffffff89',
          }}
        />
        <View style={{marginTop: 10, alignItems: 'center'}}>
          <SecurePassBar createPass={createPass} />
        </View>
        <Input
          placeholder="Confirmar contraseña"
          placeholderTextColor={'#FFFF'}
          textStyle={{color: '#FFFF'}}
          onFocus={() => (setPassConfirmFocus('#ffffff39'), setOpacity(20))}
          onEndEditing={() => (setPassConfirmFocus('#00000000'), setOpacity(0))}
          secureTextEntry={secureConfirmTextEntry}
          accessoryRight={renderInputConfirmIcon}
          onChangeText={value => setConfirmCreatePass(value)}
          value={confirmCreatePass}
          style={{
            backgroundColor: passConfirmFocus,
            borderColor: '#ffffff89',
            marginTop: 10,
          }}
        />
        <Recaptcha
          ref={recaptcha}
          siteKey="6LegHkApAAAAAKkWyNR3tSovXxF0Mpltoak-ElG4"
          baseUrl="http://anyalaperrita.com.mx"
          onVerify={onVerify}
          onExpire={onExpire}
          size="normal"
          footerComponent={
            <Button title="Close on footer" onPress={ClosePress} />
          }
        />
        <Btn
          isDisabled={isDisabledRecaptcha}
          size="md"
          variant="solid"
          action="primary"
          isFocusVisible={false}
          onPress={send}
          marginTop={20}
        >
          {
            !getToken ? <ButtonText>{"Recaptcha: Sin resolver"}</ButtonText>:<ButtonText>{"Recaptcha: Resuelto"}</ButtonText>
          }
        </Btn>
      </View>
      <CreateAccountButton
        createEmail={createEmail}
        setCreateEmail={setCreateEmail}
        createPass={createPass}
        setCreatePass={setCreatePass}
        confirmCreatePass={confirmCreatePass}
        setConfirmCreatePass={setConfirmCreatePass}
        name={name}
        setName={setName}
        setGetToken={setGetToken}
        lastName={lastName}
        setLastName={setLastName}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    </>
  );
};

export default CreateAccount;
