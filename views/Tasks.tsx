import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ModalAddTask} from '../components/modals/ModalAddTask';
import {useBooleanTaskContext} from '../context/TaskBooleanContext';
import {VStack, Box, Textarea} from '@gluestack-ui/themed';

type Props = {};

const Tasks = (): JSX.Element => {
  const booleanTask = useBooleanTaskContext();
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const getTask = async() =>{
      try {
      const response = await fetch(`https://task-casa-default-rtdb.firebaseio.com/Galicia0992@gmail1com/.json`)
      const data = await response.json()
      setData(data)
      } catch (error) {
        console.log(error)
      }
    }
    getTask()
  }, [])
  console.log(data[0])
  return (
    <>
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <Text>Tasks</Text>
        {booleanTask ? <ModalAddTask /> : ''}
        <VStack space="sm" width={'100%'} alignItems="center">
          <Box w={'60%'} h="auto" bg="$blue300">
            <Textarea
              size="md"
              isReadOnly={false}
              isInvalid={false}
              isDisabled={false}
              w="100%"
            />
          </Box>
        </VStack>
      </View>
    </>
  );
};

export default Tasks;
