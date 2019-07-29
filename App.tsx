import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/pages/Homescreen';
import JoinID from "./src/pages/JoinID";
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  JoinID: {screen: JoinID},
});

const App = createAppContainer(MainNavigator);
export default App;
