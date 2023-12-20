import {View, Text} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {ModalAddTask} from '../components/modals/ModalAddTask';
import { useBooleanTaskContext } from '../context/TaskBooleanContext';

type Props = {};

const Tasks = (): JSX.Element => {
 const booleanTask = useBooleanTaskContext()
  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Text>Tasks</Text>
        {
          booleanTask ? <ModalAddTask></ModalAddTask>:""
        }
      </View>
    </>
  );
};

export default Tasks;
