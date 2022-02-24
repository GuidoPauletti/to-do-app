import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const TaskItem = ({item, handleDelete}) => {

  const navigation = useNavigation();

  return (
    <View style={styles.ItemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen', {id: item.id})}>
        <Text style={styles.TaskTitle}>{item.title}</Text>
        <Text>{item.descript}</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{backgroundColor:'#ee5253', padding: 7, borderRadius: 5}}
        onPress= {() => handleDelete(item.id)}
        >
        <Text>delete</Text>
      </TouchableOpacity>
    </View>
  )

}

const styles = StyleSheet.create({
    ItemContainer: {
        backgroundColor: "#333333",
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    TaskTitle: {
        color: 'white'
    }
})

export default TaskItem