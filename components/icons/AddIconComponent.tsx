import {View, Text} from 'react-native';
import {Icon, AddIcon, Button} from '@gluestack-ui/themed';
import React, {useState} from 'react';

export default function AddIconComponent() {
  const [defaultColor, setDefaultColor] = useState<string>("#78C0E0")
  const Add = (): void => {
    console.log('add');
  };
  return (
    <Button
      style={{
        width: 44,
        height: 44,
        borderRadius: 44/2,
        marginBottom:2,
        padding:7,
        marginRight: 20,
        backgroundColor: defaultColor,
      }}
      onPress={Add}
      onPressIn={() => setDefaultColor("#449DD1")}
      onPressOut={() => setDefaultColor("#78C0E0")}>
      <Icon as={AddIcon} color="white"></Icon>
    </Button>
  );
}
