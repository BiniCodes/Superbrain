import {View, Text, Button, StyleSheet, Image,} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, ScrollView, } from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";
import Leaderboard from "../components/Leaderboard";

interface IAdditionalQuestionsPageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  AdditionalQuestions extends React.Component<IAdditionalQuestionsPageProps> {
  static navigationOptions = {
    title: 'Joining leaderboard 6 out 6',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        }}>
        <View style={{height: 40}}>
          <Text style={{textAlign: "center", fontSize: 25}}>Additional features / questions</Text>
        </View>

        <View style={{flex:1}}>
            <Text>hi</Text>
        </View>

        <ContinueButtonBottom
          handleOnPress={() => navigate("Home")}
        />

      </View>
    );
  }
  }