import React from 'react'
import { View, TextInput, Text, Button, StyleSheet } from 'react-native'

const Header = ({
    task,
    readTaskHandler,
    addTaskHandler
  }) => {
  return (
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
  )
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
    }
  });

export default Header