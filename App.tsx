import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/pages/Homescreen';
import JoinLeaderboard from './src/pages/JoinLeaderboard';
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  JoinLeaderboard: {screen: JoinLeaderboard},
});

const App = createAppContainer(MainNavigator);
export default App;
