import {View, Text, Button } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import CustomizeButton from "../components/CustomizeButton";
import { DARK_GREEN } from "../constans";

interface IProfilePageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  JoinLeaderboard extends React.Component<IProfilePageProps> {
    static navigationOptions = {
      title: 'Join ID',
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
          marginBottom = {60}
        />
          
        <CustomizeButton
          message ="continue"
          backgroundColor = {DARK_GREEN}
          marginHorizontal = {100}
          textAlign = "center"
          paddingVertical = {15}
          fontSize = {20}
          handleOnPress={() => navigate("AddingGrade")}
        />
        
      </View>
      );
    }
  }