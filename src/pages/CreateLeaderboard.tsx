import {View, Text, Button, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {NavigationScreenProp, NavigationState, NavigationParams, } from "react-navigation";
import { TextInput } from "react-native-gesture-handler";
import NumberInput from "../components/NumberInput";
import Subject from "../components/Subject";
import { DARK_BLUE, DARK_GREEN } from "../constans";
import CustomizeButton from "../components/CustomizeButton";
import ContinueButton from "../components/ContinueButton";
import ContinueButtonBottom from "../components/ContinueButtonBottom";

interface ICreateLeaderboardProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}


export default  class  CreateLeaderboard extends React.Component<ICreateLeaderboardProps> {
    static navigationOptions = {
      title: 'Creating leaderboard',
    };
    render() {
      const {navigate} = this.props.navigation;
      const SubjectsList = ["Biologie", "Chemie", "Deutsch", "Englisch", "Geographie",
                      "Ethik", "Französisch", "Geschichte", "Informatik", "Kunst",
                      "Latein", "Mathematik", "Musik", "Pädagogik", "Philosophie",
                      "Religion", "Sport"]
      
      {/*
      const list = () => {
        for (var i = 0; i < Subject.length; i++) {
          return(
            <Subject
              //message= {i + " " + Subject[i]}
            />
          )
        }
      };
    */}
      return (
        <View style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          }}>
          
          <ScrollView style={{flex:1}}>
            <Subject message= {SubjectsList[0]}/>
            <Subject message= {SubjectsList[1]}/>
            <Subject message= {SubjectsList[2]}/>
            <Subject message= {SubjectsList[3]}/>
            <Subject message= {SubjectsList[4]}/>
            <Subject message= {SubjectsList[5]}/>
            <Subject message= {SubjectsList[6]}/>
            <Subject message= {SubjectsList[7]}/>
            <Subject message= {SubjectsList[8]}/>
            <Subject message= {SubjectsList[9]}/>
            <Subject message= {SubjectsList[10]}/>
            <Subject message= {SubjectsList[11]}/>
            <Subject message= {SubjectsList[12]}/>
            <Subject message= {SubjectsList[13]}/>
            <Subject message= {SubjectsList[14]}/>
            <Subject message= {SubjectsList[15]}/>
          </ScrollView>
          
          <ContinueButtonBottom
            handleOnPress={() => navigate("Home")}
          />

        </View>
      );
    }
  }

