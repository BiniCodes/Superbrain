import {View, Text, Button, StyleSheet, Image,} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, ScrollView, } from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";

interface IInterGradesPageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  InterGrades extends React.Component<IInterGradesPageProps> {
  static navigationOptions = {
    title: 'Joining leaderboard 5 out 6',
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
            message = "Hello World!"
            fontSize = {25}
            textAlign = "center"
            marginTop = {100}
            marginBottom = {50}
          />
        

        </View>

        <ContinueButtonBottom
          handleOnPress={() => navigate("Home")}
        />

      </View>
    );
  }
  }