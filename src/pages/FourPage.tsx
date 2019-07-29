import { Button, View } from "react-native";
import React from "react";
import { any } from "prop-types";
import { NavigationScreenProps, NavigationProp } from "react-navigation";

interface IThirdPageProps  {
    navigation: any
}


export default class FourPage extends React.Component<IThirdPageProps> {
    static navigationOptions = {
      title: 'The testing page',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        <Button
          title="Going to the Welcome Page"
          onPress={() => navigate("WelcomePage")}
        />
        </View>
      );
    }
  }