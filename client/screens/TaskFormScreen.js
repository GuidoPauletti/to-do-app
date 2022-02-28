import { TextInput, StyleSheet, View, Text, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import Layouts from '../components/Layouts'
import { saveTask, getTask, updateTask } from '../api'


const TaskFormScreen = ({navigation, route}) => {
  
  const [task, setTask] = useState({
    title: '',
    descript: ''
  })

  const [editing, setEditing] = useState(false)
  
  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({headerTitle: 'Updating a Task'});
      (async() =>{
        const task = await getTask(route.params.id)
        setTask({title: task.title, descript: task.descript})
      })();
      setEditing(true)
    }
  }, [])
    
  

  const handleChange = (name, value) => setTask({...task, [name]:value})
  
  const handleSave = async () => {
    try {
      if (!editing) {
        await saveTask(task);
      } else {
        await updateTask(route.params.id, task)
        setEditing(false)
      }
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    
    <Layouts>
      
      <TextInput
      style={styles.input}
      placeholder='Write a task title'
      placeholderTextColor="#546574"
      onChangeText={(text) => handleChange('title', text)}
      value={task.title}
      />
      <TextInput
      style={styles.input}
      placeholder='Wrtie the description'
      placeholderTextColor="#546574"
      onChangeText={(text) => handleChange('descript', text)}
      value={task.descript}
      />
      {!editing ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save task</Text>
        </TouchableOpacity>) : (
        <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Update task</Text>
        </TouchableOpacity>)
      }
      
    </Layouts>
    
  )
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 7,
    borderColor: '#ffffff',
    borderWidth: 2,
    width: '90%',
    fontSize: 20,
    height: 45,
    color:"#ffffff",
    padding: 10,
    textAlign: 'center',
    borderRadius: 5
  },
  saveButton: {
    paddingVertical: 10,
    marginBottom: 10,
    width: '90%',
    borderRadius: 5,
    backgroundColor: '#10ac84',
  },
  updateButton:{
    paddingVertical: 10,
    marginBottom: 10,
    width: '90%',
    borderRadius: 5,
    backgroundColor:'#e58e26'
  },
  buttonText: {
    textAlign: 'center',
    color: '#ffffff'
  }
})


export default TaskFormScreen