import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import { useBooleanModalAddContext } from '../../context/ModalAddContext';
import { useSetBooleanModalAddContext } from '../../context/ModalAddContext';

export const ModalAddNotes = (): React.ReactElement => {
const setBooleanModalAdd = useSetBooleanModalAddContext()
const booleanModalAdd = useBooleanModalAddContext()

  return (
    <View style={styles.container}>

      <Modal
        visible={booleanModalAdd}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setBooleanModalAdd(false)}
      >
        <Card disabled={true}>
          <Text>
Welcome to UI Kitten Notes 😻
          </Text>
          <Button onPress={() => setBooleanModalAdd(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});