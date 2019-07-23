import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Text style={{color: "red"}}>I'm Wukong</Text>
      </View>
    );
  }
}

/*
  <View style={styles.container}>
      <Text>Hello</Text>
      <TextInput></TextInput>
    </View>

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/