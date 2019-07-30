import {View, Text, Button } from "react-native";
import React from "react";
import Headline from "../components/Headline";

interface IProfilePageProps  {
    name: string,
    navigation: any
}


export default  class  JoinID extends React.Component<IProfilePageProps> {
    static navigationOptions = {
      title: 'Join ID',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
      <View>
          
        <Headline
            message="Enter your ID"
            fontSize={20}
          />
          
        <Button
          title="Scotty beam mich hoch"
          onPress={() => navigate("")}
        />
        
      </View>
      );
    }
  }