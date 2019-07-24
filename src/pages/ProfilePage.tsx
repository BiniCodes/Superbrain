import { Text, Button } from "react-native";
import React from "react";

interface IProfilePageProps  {
    name: string,
    navigation: any
}


export default  class  ProfilePage extends React.Component<IProfilePageProps> {
    static navigationOptions = {
      title: 'Profile',
    };
    render() {
        const {navigate} = this.props.navigation;
      return (
      /*<Text>{this.props.navigation.getParam('name','DEFAULT')}</Text>*/
      <Button
        title="Go to the third page"
        onPress={() => navigate("Third")}
      />
      );
    }
  }