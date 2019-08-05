import {View} from "react-native";
import React from "react";
import {NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import Headline from "../components/Headline";
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN, LIGHT_YELLOW } from "../constans";
import CustomizeButton from "../components/CustomizeButton";

interface ICreateLeaderboardFeatureScreenProps  {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default class CreateLeaderboardFeature extends React.Component<ICreateLeaderboardFeatureScreenProps> {
    static navigationOptions = {
      title: '',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Headline
              message="WOW"
              textAlign="center"
              marginTop={20}
              marginBottom={10}
            />


        </View>
      );
    }
  }
