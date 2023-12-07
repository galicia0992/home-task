import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, Icon, IconElement, Button} from '@ui-kitten/components';

type Props = {};

const CreateAccountButton = (props: Props) => {
  return (
    <Button
      appearance="filled"
      status="primary"
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
