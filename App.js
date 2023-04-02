import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

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
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={{textAlign:"center",color:"white",fontSize:20,fontWeight:"600"}}>Enter you task</Text>
        <View style={styles.upperContainerInnerRow}>
          <TextInput 
            style={styles.taskInput} 
            placeholder="Enter your text" 
            value={task}
            onChangeText={readTaskHandler}
          />
          <Button 
            title='Enter' 
            onPress={addTaskHandler}
          />
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <Text style={{textAlign:"center",color:"black",fontSize:20,fontWeight:"600"}}>Task list</Text>
        <View style={styles.taskList}>
          {taskList.length > 0 ? 
            taskList.map((task, index) => (
              <View key={index} style={styles.taskListItem} >
                <View style={{flex:5, flexDirection:"row"}}>
                  <Text style={{marginRight:5}}>
                    {index+1}. 
                  </Text>
                  <Text>
                    {task}
                  </Text>
                </View>
                <View style={{flex:2}}>
                  <Button 
                    title='Delete' 
                    onPress={()=> deleteTaskHandler(index)}
                  />
                </View>
              </View>
            ))
            :
            <Text>You have not ant task yet</Text>
          } 
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop:40,
  },
  upperContainer: {
    flex: 1,
    backgroundColor: '#A8C523',
    padding:20
  },
  upperContainerInnerRow:{
    flex:1,
    flexDirection:"row",
    alignItems:"center"
  },
  taskInput:{
    flex:4,
    padding:5,
    borderWidth:2,
    borderStyle:"solid",
    borderColor:"white",
    marginRight:15
  },
  lowerContainer: {
    flex:5,
    backgroundColor: "white",
    padding:20
  },
  taskList:{
    flex: 1,
    flexDirection:"column",
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:30
  },
  taskListItem:{
    flexDirection:"row",
    padding:5,
    marginBottom:10,
    alignItems:"center"
  }
});
