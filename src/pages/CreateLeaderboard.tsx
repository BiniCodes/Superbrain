import {View, ScrollView, Text } from "react-native";
import React from "react";
import {NavigationScreenProp, NavigationState, NavigationParams} from "react-navigation";
import Subject from "../components/Subject";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import { LIGHT_GREEN, DARK_BLUE } from "../constans";
import GradesInput from "../components/GradesInput";
import Leaderboard from "../components/Leaderboard";

interface ICreateLeaderboardProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  CreateLeaderboard extends React.Component<ICreateLeaderboardProps> {
    static navigationOptions = {
      title: 'Creating leaderboard',
    };

    render() {
      const {navigate} = this.props.navigation;
      
      return (
        <View style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          }}>
          <View style={{height: 40}}>
            <Text style={{textAlign: "center", fontSize: 25}}>Enter your grades from 1 - 6 </Text>
          </View>


          
          <ScrollView style={{flex:1}}>
            <Leaderboard
            SubjectsList = {["Biologie", "Chemie", "Deutsch", "Englisch", "Geographie",
                            "Ethik", "Französisch", "Geschichte", "Informatik", "Kunst",
                            "Latein", "Mathematik", "Musik", "Pädagogik", "Philosophie",
                            "Religion", "Sport"]}
            />
            
          </ScrollView>

          <ContinueButtonBottom
            handleOnPress={() => navigate("Home")}
          />

        </View>
      );
    }
  }

