import {View, Text, Button, StyleSheet, Image,} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, ScrollView, } from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";
import DropDown from "../components/DropDown";

interface IInterResultPageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  InterResult extends React.Component<IInterResultPageProps> {
  static navigationOptions = {
    title: 'Result',
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
          <Text>jo</Text>

        </View>

        <ContinueButtonBottom
          handleOnPress={() => navigate("Home")}
        />

      </View>
    );
  }
  }