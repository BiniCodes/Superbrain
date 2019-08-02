import {View, ScrollView, Text } from "react-native";
import React from "react";
import {NavigationScreenProp, NavigationState, NavigationParams} from "react-navigation";
import Subject from "../components/Subject";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import { LIGHT_GREEN, DARK_BLUE } from "../constans";
import GradesInput from "../components/GradesInput";
import Leaderboard from "../components/Leaderboard";
import { Item } from "../models/Leaderboard";
import ToggleBtn from "../components/ToggleBtn";

interface ICreateLeaderboardProps  {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

interface ICreateLeaderboardState {
 items: Item[],
 
}

// funktion die etwas hohlt 
const getItems = ():Item[] => { return [{name: "Biologie", value: 1, status: true },{name: "Chemie", value: 2, status: false },{name: "Mathe", value: 2, status: false }] }

export default  class  CreateLeaderboard extends React.Component<ICreateLeaderboardProps,ICreateLeaderboardState> {
  constructor(props: ICreateLeaderboardProps) {
    super(props);
    this.state = {
      items: getItems()
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
            <Text style={{textAlign: "center", fontSize: 25}}>Enter your grades from 1 - 6 </Text>
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
            handleOnPress={() => navigate("AdditionalQuestions")}
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

  }

