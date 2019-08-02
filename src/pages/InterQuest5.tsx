import {View, Text, Button, StyleSheet, Image, Picker} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, ScrollView, DrawerItems, } from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";
import DropDown from "../components/DropDown";

interface IInterQuest5PageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  InterQuest5 extends React.Component<IInterQuest5PageProps> {
  static navigationOptions = {
    title: 'Joining leaderboard 4 out 6',
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
            message = "In which class level (Jahrgangsstufe) are you right now?"
            fontSize = {25}
            textAlign = "center"
            marginTop = {100}
            marginBottom = {50}
          />

          <DropDown
            PossibleChoices = {["1","2","3","4","5","6","7","8","9","10","11","12","13"]}
          />

        </View>

        <ContinueButtonBottom
          handleOnPress={() => navigate("InterGrades")}
        />

      </View>
    );
  }
  }