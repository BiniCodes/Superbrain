import {StyleSheet ,View, Button, Text, TouchableOpacity} from "react-native";
import React from "react";
import { any } from "prop-types";
import { NavigationScreenProps, NavigationProp } from "react-navigation";
import Headline from "../components/Headline";
import BigButton from "../components/BigButton";

interface IHomeScreenProps  {
    navigation: any
}



export default class HomeScreen extends React.Component<IHomeScreenProps> {
    static navigationOptions = {
      title: 'Welcome to this App',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <View>
            <Headline
              message="Superbrain"
              fontSize={20}
            />
            <BigButton
              message="join ID"
              //vertical = senkrecht!!
              marginVertical =  {30}
              backgroundColor = "#247BA0"
              nextPage = "JoinID"
              handleOnPress={navigate("JoinID")}
            />
            {/* <BigButton
              message="create ID"
              //vertical = senkrecht!!
              marginVertical =  {30}
              backgroundColor = "#70C1B3"
              nextPage = "JoinID"
              handleOnPress={navigate("JoinID")}
            /> */}

        </View>
      );
    }
  }


{/*}
  <TouchableOpacity onPress={() => navigate('JoinID')} activeOpacity={2}>
    <View style={bigButton.darkblue}>
    <Text style={styles.headline}>join ID</Text>

    </View>
  </TouchableOpacity> 
*/}