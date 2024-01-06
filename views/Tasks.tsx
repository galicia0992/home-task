import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ModalAddTask} from '../components/modals/ModalAddTask';
import {useBooleanTaskContext} from '../context/TaskBooleanContext';
import {VStack, Box, Textarea} from '@gluestack-ui/themed';
import getTask from '../api/getTask';
import { useUserContext } from '../context/UserContext';
type Props = {};

const Tasks = (): JSX.Element => {
  const booleanTask = useBooleanTaskContext();
  const user = useUserContext()
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    getTask(setData, user.replace(/\./g, '1'))
  }, [data])
  
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
            {
              data.map((item, index) =>{
                return (<Text key={index}>{item.category}</Text>)
              })
            }
          </Box>
        </VStack>
      </View>
    </>
  );
};

export default Tasks;
