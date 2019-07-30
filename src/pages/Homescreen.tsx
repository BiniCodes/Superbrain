import {View} from "react-native";
import React from "react";
import {NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";
import Headline from "../components/Headline";
import BigButton from "../components/BigButton";
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN, LIGHT_YELLOW } from "../constans";
import CustomizeButton from "../components/CustomizeButton";

interface IHomeScreenProps  {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
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
              textAlign="center"
              marginVertical= {20}
            />

            <Headline
              message="This app is for all people who want
                      want to compare their grades anonymously"
              textAlign="center"
              marginHorizontal={40}
            />
            
            <BigButton
              message="join private leaderboard"
              //vertical = senkrecht!!
              backgroundColor = {DARK_GREEN}  
              handleOnPress={() => navigate('JoinLeaderboard')}
            />

            <BigButton
              message="create private leaderboard"
              backgroundColor = {DARK_BLUE} 
              handleOnPress={() => navigate('JoinLeaderboard')}
            />

            <BigButton
              message="International leaderboard"
              backgroundColor = {LIGHT_GREEN}
              handleOnPress={() => navigate('JoinLeaderboard')}
            />
            
            <CustomizeButton
              message="instruction"
              backgroundColor = {LIGHT_YELLOW}
              marginTop = {50}
              fontSize = {15}
              marginHorizontal = {140}
              paddingVertical = {10}
              textAlign = "center"
              handleOnPress={() => navigate("JoinLeaderboard")}
            />


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