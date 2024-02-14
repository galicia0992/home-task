import {View, Text} from 'react-native';
import React from 'react';
import {useEffect, useState} from 'react';
import {ModalAddTask} from '../components/modals/ModalAddTask';
import {useBooleanTaskContext} from '../context/TaskBooleanContext';
import getTask from '../api/getTask';
import {useEmailContext} from '../context/EmailContext';
import {StyleSheet, ScrollView} from 'react-native';

type Props = {};

const Tasks = (): JSX.Element => {
  const booleanTask = useBooleanTaskContext();
  const [task, setTask] = useState<any[]>([]);
  const emailPass = useEmailContext();
  useEffect(() => {
    getTask(setTask, emailPass.replace(/\./g, '1'));
  }, []);

  return (
    <ScrollView>
      <View style={styles.taskBody}>
          {task.map((item, i) => {
            return (
              <View key={i} style={styles.taskCard}>
                <Text>{`${item.category}`}</Text>
              </View>
            );
          })}
        
        {booleanTask ? <ModalAddTask></ModalAddTask> : ''}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  taskBody: {
    backgroundColor: 'blue',
    justifyContent:"center",
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"center", 
    padding:20
  },
  taskCard: {
    width:"50%",
    maxWidth:"50%",
    height:"auto",
    backgroundColor: 'red',
    alignItems:"center",
    margin:7
  }
});

export default Tasks;
