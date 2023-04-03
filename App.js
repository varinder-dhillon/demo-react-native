import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/shared/header/Header';
import FlatListComponent from './components/shared/utils/FlatListComponent';

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const readTaskHandler = (enteredtTask) => {
    setTask(enteredtTask);
  }
  const addTaskHandler = () => {
    if(task.trim().length > 0){
      setTaskList(prev => [...prev, task]);
      setTask("");
    }
  }
  const deleteTaskHandler = (taskIndex) => {
    setTaskList((prev) => prev.filter((task, index) => index !== taskIndex))
  }
  const headerProps = {
    task,
    readTaskHandler,
    addTaskHandler
  }
  const flatListProps = {
    taskList,
    deleteTaskHandler
  }
  return (
    <View style={styles.container}>
      <Header {...headerProps} />
      <FlatListComponent {...flatListProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop:40,
  }
})