import { Button } from "react-native";
import React from "react";
import { any } from "prop-types";
import { NavigationScreenProps, NavigationProp } from "react-navigation";

interface IHomeScreenProps  {
    navigation: any
}

export default class HomeScreen extends React.Component<IHomeScreenProps> {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }