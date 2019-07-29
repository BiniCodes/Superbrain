import {View, Text, Button } from "react-native";
import React from "react";

interface IProfilePageProps  {
    name: string,
    navigation: any
}


export default  class  JoinID extends React.Component<IProfilePageProps> {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
      /*<Text>{this.props.navigation.getParam('name','DEFAULT')}</Text>*/
      <View>
        <Button
          title="Scotty beam mich hoch"
          onPress={() => navigate("")}
        />
      </View>
      );
    }
  }