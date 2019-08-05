import { View, Text, Button } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams
} from "react-navigation";
import CustomizeButton from "../components/CustomizeButton";
import { DARK_GREEN } from "../constans";

interface IProfilePageProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class AddingGrades extends React.Component<IProfilePageProps> {
  static navigationOptions = {
    title: "Max-Planck-Schule Kiel Q1.c"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <CustomizeButton
          message="continue"
          backgroundColor={DARK_GREEN}
          handleOnPress={() => navigate("Home")}
        />
      </View>
    );
  }
}
