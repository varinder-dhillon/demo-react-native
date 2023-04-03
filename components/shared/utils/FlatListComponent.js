import React from 'react'
import { Text, View, FlatList, Button, StyleSheet } from 'react-native'



const FlatListComponent = ({
    taskList,
    deleteTaskHandler
  }) => {
  return (
    <View style={styles.lowerContainer}>
        <Text style={{textAlign:"center",color:"black",fontSize:20,fontWeight:"600"}}>Task list</Text>
        <View style={styles.taskList}>
            <FlatList 
                data={taskList}
                renderItem={(item)=> {
                  return (
                    <View style={styles.taskListItem} >
                      <View style={{flex:5, flexDirection:"row"}}>
                          <Text style={{marginRight:5}}>
                          {item.index+1}. 
                          </Text>
                          <Text>
                          {item.item}
                          </Text>
                      </View>
                      <View style={{flex:2}}>
                          <Button 
                              title='Delete' 
                              onPress={()=> deleteTaskHandler(item.index)}
                          />
                      </View>
                    </View>
                  )
                }}
                keyExtractor={(item, index)=> index}
            />
            <Text>You have not ant task yet.</Text>
        </View>
      </View>
  )
}


const styles = StyleSheet.create({
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

export default FlatListComponent