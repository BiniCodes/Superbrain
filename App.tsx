
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  } 

  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <Text>My name is Duc</Text>
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//hello