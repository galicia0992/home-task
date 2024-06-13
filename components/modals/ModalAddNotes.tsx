import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useBooleanModalAddContext } from '../../context/ModalAddContext';
import { useSetBooleanModalAddContext } from '../../context/ModalAddContext';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  Icon,
  SelectBackdrop,
  SelectItem,
  SelectContent,
  ChevronDownIcon,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  Center,
  Modal,
  ModalBackdrop,
  ModalContent,
  Heading,
  ModalCloseButton,
  CloseIcon,
  ModalBody,
  ModalHeader,
  Text,
  ModalFooter,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';

export const ModalAddNotes = (): React.ReactElement => {
const setBooleanModalAdd = useSetBooleanModalAddContext()
const booleanModalAdd = useBooleanModalAddContext()
const [selected, setSelected] = useState<string>('');
  const ref = React.useRef(null);

  useEffect(() => {
    console.log(selected);
    console.log(selected)
  }, [selected]);

  return (
    <Center h={300}>
      <Modal
        isOpen={booleanModalAdd}
        onClose={() => {
          setBooleanModalAdd(false);
        }}
        finalFocusRef={ref}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Engage with Modals</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
            <Select
              onValueChange={value => setSelected(value)}
              style={{zIndex: 2}}>
              <SelectTrigger variant="outline" size="md">
                <SelectInput placeholder="Select option" />
                <SelectIcon mr="$3">
                  <Icon as={ChevronDownIcon} />
                </SelectIcon>
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              size="sm"
              action="secondary"
              mr="$3"
              onPress={() => {
                setBooleanModalAdd(false);
              }}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              size="sm"
              action="positive"
              borderWidth="$0"
              onPress={() => {
                setBooleanModalAdd(false);
              }}>
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
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