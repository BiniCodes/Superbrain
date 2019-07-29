import { Button, View, Text } from "react-native";
import React from "react";
import { any } from "prop-types";

interface IThirdPageProps  {
    navigation: any,
    name: string
}

const hello = () : JSX.Element => {
  return(
  <Text>hello World</Text>
)
}



export default class ThirdPage extends React.Component<IThirdPageProps> {
    static navigationOptions = {
      title: 'The third page on this App',
    };

    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
          <Button
            title="Going to the testing page"
            onPress={() => navigate("Testing")}
          />
          {hello()}
        </View>
      );
    }
  }