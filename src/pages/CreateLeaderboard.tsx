import {View, ScrollView, Text, TouchableNativeFeedback } from "react-native";
import React from "react";
import {NavigationScreenProp, NavigationState, NavigationParams} from "react-navigation";
import Subject from "../components/Subject";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import { LIGHT_GREEN, DARK_BLUE } from "../constans";
import GradesInput from "../components/GradesInput";
import Leaderboard from "../components/Leaderboard";
import { Item, LeaderboardEntry } from "../models/Leaderboard";
import ToggleBtn from "../components/ToggleBtn";

interface ICreateLeaderboardProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface ICreateLeaderboardState {
 items: Item[],
 leaderboard: LeaderboardEntry
 
}

const  makeid = (length) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const saveToServer = (data: LeaderboardEntry) => {
  console.log("saved", data )

}

// funktion die etwas holt 
// funktion die etwas holt 
const getItems = (): Item[] => {
  return [{
    name: "Biologie",
    value: 1,
    status: true
  }, {
    name: "Chemie",
    value: 2,
    status: false
  }, {
    name: "Physik",
    value: 3,
    status: false
  }, {
    name: "Mathe",
    value: 4,
    status: false
  }, {
    name: "Deutsch",
    value: 5,
    status: false
  }, {
    name: "Englisch",
    value: 6,
    status: false
  }, {
    name: "Französisch",
    value: 7,
    status: false
  }, {
    name: "Spanisch",
    value: 8,
    status: false
  }, {
    name: "Sport",
    value: 9,
    status: false
  }, {
    name: "Kunst",
    value: 10,
    status: false
  }]
}

export default  class  CreateLeaderboard extends React.Component<ICreateLeaderboardProps,ICreateLeaderboardState> {
  private id;
  constructor(props: ICreateLeaderboardProps) {
    super(props);
    this.id = makeid(10);
    this.state = {
      items: getItems(),
      leaderboard: null
    };
  }

    static navigationOptions = {
      title: 'Creating leaderboard',
    };


    // // immer wenn der screen das erste mal geladen wird
    // componentWillMount(){
    //     this.setState({items: getItems()})
    // }

    render() {
      if (this.state.items.length < 0) {
        return(
        <View style={{height: 40}}>
        <Text style={{textAlign: "center", fontSize: 25}}>LOADING</Text>
      </View>
      )
      }
      const {navigate} = this.props.navigation;  

      return (
        <View style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          }}>
          <View style={{height: 40}}>
            <Text style={{textAlign: "center", fontSize: 20}}>Check Selected Subjects</Text>
          </View>
          <View style={{height: 40}}>
            <Text style={{textAlign: "center", fontSize: 20}}>{this.id}</Text>
          </View>
          <ScrollView style={{flex:1}}>
            
          {this.state.items.map( item => {return (
            <View key={item.name} style={{flexDirection: "row", justifyContent: "space-between"}}>
            <Subject message={item.name} />
            <ToggleBtn handleClick={() => this.handleToggle(item)} status={item.status}/>     
          </View>)
          })}
          </ScrollView>

          <ContinueButtonBottom
            handleOnPress={() => this.handleSave(this.id)}
          />

        </View>
      );
    }

    // spread operator map und sharthand szntax
    handleToggle = (item: Item) => {
      this.setState(
        {items: this.state.items
          .map( x => x.name == item.name ? {...item, status: !item.status} : x ) }
        )
      
    }

    handleSave = (id: string) => {
      const tmpBoard = {id: id, name: 'default', subjects: this.state.items } as LeaderboardEntry
      saveToServer(tmpBoard);
      this.props.navigation.navigate("CreateLeaderboardFeature");
    }

  }

