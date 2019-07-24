import { Button } from "react-native";
import React from "react";
import { any } from "prop-types";
import { NavigationScreenProps, NavigationProp } from "react-navigation";

interface IThirdPageProps  {
    navigation: any
}


export default class ThirdPage extends React.Component<IThirdPageProps> {
    static navigationOptions = {
      title: 'The third page on this App',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Going back to the start"
          onPress={() => navigate('Home')}
        />
      );
    }
  }