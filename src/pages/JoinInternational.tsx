import {View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, } from "react-navigation";
import CustomizeButton from "../components/CustomizeButton";
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN } from "../constans";
import { TextInput } from "react-native-gesture-handler";
import NumberInput from "../components/NumberInput";
import ContinueButton from "../components/ContinueButton";
import ContinueButtonBottom from "../components/ContinueButtonBottom";

interface IInternationalPageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  JoinInternational extends React.Component<IInternationalPageProps> {
    static navigationOptions = {
      title: 'Join International',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
      <View>
 
        <Headline
          message = "International is the list where you can compare yourself with everyone around the world. All your information you enter is anonymous. The only necessarily thing you need to enter is your name and your grade. all others things are optional."
          fontSize = {22}
          textAlign = "center"
          marginHorizontal = {50}
          marginTop = {50}
        />

        <ContinueButton
          marginHorizontal = {100}
          paddingVertical = {15}
          //validate given data
          marginTop = {60}
          handleOnPress={() => navigate("InterQuest2")}
        />

      </View>
      );
    }
    }