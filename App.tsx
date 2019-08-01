import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/pages/Homescreen';
import JoinLeaderboard from './src/pages/JoinLeaderboard';
import AddingGrades from './src/pages/AddingGrades';
import CreateLeaderboard from './src/pages/CreateLeaderboard';
import JoinInternational from './src/pages/JoinInternational';
import InterQuest2 from './src/pages/InterQuest2';
import InterQuest3 from './src/pages/InterQuest3';
import InterQuest4 from './src/pages/InterQuest4';
import InterQuest5 from './src/pages/InterQuest5';
import InterGrades from './src/pages/InterGrades';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  JoinLeaderboard: {screen: JoinLeaderboard},
  AddingGrade: {screen: AddingGrades},
  CreateLeaderboard: {screen: CreateLeaderboard},
  JoinInternational: {screen: JoinInternational},
  InterQuest2: {screen: InterQuest2},
  InterQuest3: {screen: InterQuest3},
  InterQuest4: {screen: InterQuest4},
  InterQuest5: {screen: InterQuest5},
  InterGrades: {screen: InterGrades},
});

const App = createAppContainer(MainNavigator);
export default App;
