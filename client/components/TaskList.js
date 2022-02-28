import { FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem'
import { GetTasks, deleteTask } from '../api';
import { useIsFocused } from '@react-navigation/native';


export default function TaskList() {

  const [tasks, setTasks] = useState()
  const [refreshing, setRefreshing] = useState(false)

  const LoadTasks = async() => {
    const data = await GetTasks();
    setTasks(data)
  }
  
  const IsFocused = useIsFocused()

  useEffect(() => {
    LoadTasks();
  }, [IsFocused])

  const renderItem = ({item}) => {
    return <TaskItem item={item} handleDelete={handleDelete}/>
  }

  const onRefresh = React.useCallback(async() => {
    setRefreshing(true)
    await LoadTasks();
    setRefreshing(false)
  })

  const handleDelete = async(id) => {
    await deleteTask(id);
    await LoadTasks();
  }

  return (
    <FlatList
        style={{width:'90%'}}
        data={tasks}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            colors={["#79e08f"]}
            progressBackgroundColor="#0a3d62"
            onRefresh={onRefresh}
            refreshing={refreshing}
          />
        }
    />
  )
}