import { View, Text, StyleSheet, StatusBar } from 'react-native'
import React from 'react'

const Layouts = ({children}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#222f3e'/>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#222f3e",
        padding: 20,
        flex: 1,
        alignItems: 'center',
    }
})

export default Layouts