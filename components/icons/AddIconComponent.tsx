import {View, Text} from 'react-native';
import {Icon, AddIcon, Button} from '@gluestack-ui/themed';
import React, {useState} from 'react';
import { useSetBooleanModalAddContext } from '../../context/ModalAddContext';

export default function AddIconComponent() {
  const setBooleanModalAdd = useSetBooleanModalAddContext()
  const [defaultColor, setDefaultColor] = useState<string>("#78C0E0")
  const Add = (): void => {
   setBooleanModalAdd(true)
  };
  return (
    <Button
      style={{
        width: 40,
        height: 40,
        borderRadius: 44/2,
        marginBottom:2,
        padding:7,
        marginRight: 20,
        backgroundColor: defaultColor,
      }}
      onPress={() => setBooleanModalAdd(true)}
      onPressIn={() => setDefaultColor("#449DD1")}
      onPressOut={() => setDefaultColor("#78C0E0")}>
      <Icon as={AddIcon} color="white"></Icon>
    </Button>
  );
}
