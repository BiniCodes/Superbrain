import {View, Text, Button, StyleSheet, Image,} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, ScrollView, } from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";

interface IInterQuest3PageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  InterQuest3 extends React.Component<IInterQuest3PageProps> {
  static navigationOptions = {
    title: 'Joining leaderboard 2 out 6',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        }}>
        
        <View style={{flex:1}}>
          <Headline
            message = "In which city do you live?"
            fontSize = {25}
            textAlign = "center"
            marginTop = {100}
            marginBottom = {50}
          />
        
        <WordsInput
          marginBottom = {90}
          marginHorizontal = {40}
          fontSize = {22}
          height = {40}
          borderColor = {LIGHT_GREEN}
          borderWidth = {1}
          placeholder = "Stadt"
        />


        </View>

        <ContinueButtonBottom
          handleOnPress={() => navigate("InterQuest4")}
        />

      </View>
    );
  }
  }