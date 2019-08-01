import {View, Text, Button, StyleSheet, Image,} from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, } from "react-navigation";
import CustomizeButton from "../components/CustomizeButton";
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN } from "../constans";
import { TextInput } from "react-native-gesture-handler";
import NumberInput from "../components/NumberInput";
import ContinueButton from "../components/ContinueButton";

interface IInterQuest2PageProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  InterQuest2 extends React.Component<IInterQuest2PageProps> {
    static navigationOptions = {
      title: 'Join International 2',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
        <Headline message= "hi"/>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 36
    }
  })