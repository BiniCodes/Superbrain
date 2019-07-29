import {StyleSheet ,View, Button, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { any } from "prop-types";
import { NavigationScreenProps, NavigationProp } from "react-navigation";

interface IHomeScreenProps  {
    navigation: any
}
const styles = StyleSheet.create({
  headline: {
    fontSize: 30,
  },
  description: {
    fontSize: 20,
    textAlign: 'center'
  },
  center: {
    alignItems: "center",
    
  }
});

const bigButton = StyleSheet.create({
  darkblue: {
    backgroundColor: "#247BA0",
    fontSize: 20,
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 60,
    marginVertical: 20,
    borderWidth: 1
  },


});

export default class HomeScreen extends React.Component<IHomeScreenProps> {
    static navigationOptions = {
      title: 'Welcome to this App',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View style={styles.center}>
          <Text style={styles.headline}>Superbrain</Text>
          <Text style={styles.description}>
            This app is for all people who want to compare their grades anonymously
          </Text>

          <TouchableOpacity onPress={() => navigate('JoinID')} activeOpacity={2}>
            <View style={bigButton.darkblue}>
            <Text style={styles.headline}>join ID</Text>
          
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('JoinID')} activeOpacity={10}>
            <View style={bigButton.darkblue}>
            <Text style={styles.headline}>create ID</Text>
          
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('JoinID')} activeOpacity={2}>
            <View style={styles.center}>
            <Text style={styles.headline}>International</Text>
          
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigate('JoinID')} activeOpacity={2}>
            <View style={styles.center}>
            <Text style={styles.headline}>help</Text>
          
            </View>
          </TouchableOpacity>
          
        </View>
      );
    }
  }