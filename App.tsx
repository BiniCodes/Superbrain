import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/pages/Homescreen';
import ProfilePage from './src/pages/ProfilePage';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfilePage},
});

const App = createAppContainer(MainNavigator);
export default App;
