import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class MyBtn extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button  
        color='#ff' 
        title='Klick Mich' 
        onPress={null}></Button>
      </View>
    );
  }
}