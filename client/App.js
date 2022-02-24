import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='HomeScreen' 
        component={HomeScreen}
        options = {({navigation}) => ({
          title: "Today's Tasks",
          headerStyle: {backgroundColor:'#222f3e'},
          headerTitleStyle: {color:'#ffffff'},
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate(TaskFormScreen)}>
              <Text style={{color:'#ffffff', marginRight: 5, fontSize: 15}}>New</Text>
            </TouchableOpacity>
          )
        })}
        />
        <Stack.Screen 
        name='TaskFormScreen' 
        component={TaskFormScreen}
        options={{
          headerStyle: {backgroundColor:"#222f3e"},
          headerTitleStyle: {color:"#ffffff"},
          title: 'Create a new Task',
          headerTintColor: '#ffffff'
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
