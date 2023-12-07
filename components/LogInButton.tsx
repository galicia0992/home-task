import {View, Text} from 'react-native';
import React from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';

type Props = {};

const LogInButton = (): JSX.Element => {
  return (
    <Button
      appearance="filled"
      status="primary"
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
