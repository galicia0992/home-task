import { View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const CreateAccount = () => {
    const [emailFocus, setEmailFocus] = useState<string>("#00000000")
    const [passFocus, setPassFocus] = useState<string>("#00000000")
    const [passConfirmFocus, setPassConfirmFocus] = useState<string>("#00000000")
    const [createEmail, setCreateEmail] = useState<string>("")
    const [createPass, setCreatePass] = useState<string>("")
    const [confirmCreatePass, setConfirmCreatePass] = useState<string>("")
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState<boolean>(true);

    const renderInputIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'}/>
        </TouchableWithoutFeedback>
      );
      const renderInputConfirmIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleConfirmSecureEntry}>
          <Icon {...props} name={!secureConfirmTextEntry ? 'eye' : 'eye-off'}/>
        </TouchableWithoutFeedback>
      );
      const toggleConfirmSecureEntry = (): void => {
        setSecureConfirmTextEntry(!secureConfirmTextEntry);
      };
      const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
      };
    
  return (
    <View style={{width: '90%'}}>
          <Input
            placeholder="Email"
            placeholderTextColor={'#FFFF'}
            onFocus={() => setEmailFocus('#ffffff39')}
            onEndEditing={()=>setEmailFocus("#00000000")}
            onChangeText={(value) => setCreateEmail(value)}
            style={{
              backgroundColor: emailFocus,
              borderColor: '#ffffff89',
              marginVertical: 20,
            }}></Input>
          <Input
            placeholder="Contraseña"
            placeholderTextColor={'#FFFF'}
            onFocus={() => setPassFocus('#ffffff39')}
            onEndEditing={()=>setPassFocus("#00000000")}
            secureTextEntry={secureTextEntry}
            accessoryRight={renderInputIcon}
            onChangeText={(value) => setCreatePass(value)}
            style={{
              backgroundColor: passFocus,
              borderColor: '#ffffff89',
            }}></Input>
            <Input
            placeholder="Confirmar contraseña"
            placeholderTextColor={'#FFFF'}
            onFocus={() => setPassConfirmFocus('#ffffff39')}
            onEndEditing={()=>setPassConfirmFocus("#00000000")}
            secureTextEntry={secureConfirmTextEntry}
            accessoryRight={renderInputConfirmIcon}
            onChangeText={(value) => setConfirmCreatePass(value)}
            style={{
              backgroundColor: passConfirmFocus,
              borderColor: '#ffffff89',
              marginTop:20
            }}></Input>
        </View>
  )
}

export default CreateAccount