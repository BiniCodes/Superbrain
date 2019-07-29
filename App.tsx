import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/pages/Homescreen';
import ProfilePage from './src/pages/ProfilePage';
import ThirdPage from './src/pages/ThirdPage';
import FourPage from "./src/pages/FourPage";
import Welcome from "./src/pages/Welcome";

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfilePage},
  Third: {screen: ThirdPage},
  Testing: {screen: FourPage},
  WelcomePage: {screen: Welcome},
});

const App = createAppContainer(MainNavigator);
export default App;
