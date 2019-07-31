import {View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, } from "react-navigation";
import CustomizeButton from "../components/CustomizeButton";
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN } from "../constans";
import { TextInput } from "react-native-gesture-handler";
import NumberInput from "../components/NumberInput";
import Subject from "../components/Subject";

interface ICreateLeaderboardProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  CreateLeaderboard extends React.Component<ICreateLeaderboardProps> {
    static navigationOptions = {
      title: 'Creating leaderboard',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
      <View>
          <Subject
            message = "hello world!"
          />
        

      </View>
      );
    }
  }

