import {View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, } from "react-navigation";
import CustomizeButton from "../components/CustomizeButton";
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN } from "../constans";
import { TextInput } from "react-native-gesture-handler";
import NumberInput from "../components/NumberInput";
import ContinueButton from "../components/ContinueButton";

interface IProfilePageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  JoinLeaderboard extends React.Component<IProfilePageProps> {
    static navigationOptions = {
      title: 'Join private leaderboard',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
      <View>
          
        <Headline
          message = "enter your code"
          fontSize = {30}
          textAlign = "center"
          marginTop = {100}
          marginBottom = {50}
        />

        <NumberInput
          maxLength = {10}
          marginBottom = {90}
          marginHorizontal = {80}
          fontSize = {25}
          height = {60}
          borderColor = {LIGHT_GREEN}
          borderWidth = {1}
          textAlign = "center"

        />
          
        <ContinueButton
          marginHorizontal = {100}
          paddingVertical = {15}
          //validate given data
          handleOnPress={() => navigate("AddingGrade")}
        />
        
      </View>
      );
    }
  }

