import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';



const LogInInputs = () => {
    const [emailFocus, setEmailFocus] = useState<string>("#00000000")
    const [passFocus, setPassFocus] = useState<string>("#00000000")
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const renderInputIcon = (props: any): React.ReactElement => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={!secureTextEntry ? 'eye' : 'eye-off'}/>
        </TouchableWithoutFeedback>
      );
      const toggleSecureEntry = (): void => {
        setSecureTextEntry(!secureTextEntry);
      };
    
  return (
    <View style={{width: '80%'}}>
          <Input
            placeholder="Email"
            placeholderTextColor={'#FFFF'}
            onFocus={() => setEmailFocus('#ffffff39')}
            onEndEditing={()=>setEmailFocus("#00000000")}
            onChangeText={(value) => setEmail(value)}
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
            onChangeText={(value) => setPassword(value)}
            style={{
              backgroundColor: passFocus,
              borderColor: '#ffffff89',
            }}></Input>
        </View>
  )
}

export default LogInInputs