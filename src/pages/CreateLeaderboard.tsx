import {View, ScrollView } from "react-native";
import React from "react";
import {NavigationScreenProp, NavigationState, NavigationParams} from "react-navigation";
import Subject from "../components/Subject";
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

