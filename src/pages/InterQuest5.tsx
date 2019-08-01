import {View, Text, Button, StyleSheet, Image, Picker,} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, ScrollView, } from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";

interface IInterQuest5PageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  InterQuest5 extends React.Component<IInterQuest5PageProps> {
  static navigationOptions = {
    title: 'Joining leaderboard 4 out 6',
  };
  year_level = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  state = {
    language: ""
  }
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
          <Picker
              selectedValue={this.state.language}
              style={{height: 50, width: 100}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
          </Picker>
        {/*
        <WordsInput
          marginBottom = {90}
          marginHorizontal = {40}
          fontSize = {22}
          height = {40}
          borderColor = {LIGHT_GREEN}
          borderWidth = {1}
          placeholder = "Jahrgangsstufe"
        />
        */}

        </View>

        <ContinueButtonBottom
          handleOnPress={() => navigate("InterGrades")}
        />

      </View>
    );
  }
  }