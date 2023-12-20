import {StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';
import React from 'react';
import { ModalAddSharedTask } from '../components/modals/ModalAddSaredTask';
import { useBooleanSharedTaskContext } from '../context/SharedTaskBooleanContext';

export default function SharedTask() {
  const booleanSharedTask = useBooleanSharedTaskContext()
  return (
    <>
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Text>SharedTask</Text>
      {
        booleanSharedTask ? <ModalAddSharedTask></ModalAddSharedTask>:""
      }
    </View>
    </>
  );
}

const styles = StyleSheet.create({});
