import {View} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {Input, Icon} from '@ui-kitten/components';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CreateAccountButton from './CreateAccountButton';
import ProgressBar from './indicators/ProgressBar';

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
        lastName == ''
      ) {
        setIsDisabled(true);
      } else {
        setIsDisabled(false);
      }
    };
    disabledHandler();
  }, [createEmail, createPass, confirmCreatePass, name, lastName]);
  return (
    <>
      <View style={{width: '90%', marginBottom: 'auto'}}>
        <Input
          placeholder="Email"
          placeholderTextColor={'#FFFF'}
          onFocus={() => setEmailFocus('#ffffff39')}
          textStyle={{color: '#FFFF'}}
          onEndEditing={() => setEmailFocus('#00000000')}
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
          onFocus={() => setNameFocus('#ffffff39')}
          textStyle={{color: '#FFFF'}}
          onEndEditing={() => setNameFocus('#00000000')}
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
          onFocus={() => setLastNameFocus('#ffffff39')}
          textStyle={{color: '#FFFF'}}
          onEndEditing={() => setLastNameFocus('#00000000')}
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
          onFocus={() => setPassFocus('#ffffff39')}
          textStyle={{color: '#FFFF'}}
          onEndEditing={() => setPassFocus('#00000000')}
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
          <ProgressBar
          createPass={createPass}
          />
        </View>
        <Input
          placeholder="Confirmar contraseña"
          placeholderTextColor={'#FFFF'}
          onFocus={() => setPassConfirmFocus('#ffffff39')}
          textStyle={{color: '#FFFF'}}
          onEndEditing={() => setPassConfirmFocus('#00000000')}
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
        lastName={lastName}
        setLastName={setLastName}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
    </>
  );
};

export default CreateAccount;
