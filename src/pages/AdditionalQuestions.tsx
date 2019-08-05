import { View, Text, Button, StyleSheet, Image } from "react-native";
import React from "react";
import Headline from "../components/Headline";
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
  ScrollView
} from "react-navigation";
import ContinueButtonBottom from "../components/ContinueButtonBottom";
import WordsInput from "../components/WordsInput";
import { LIGHT_GREEN } from "../constans";
import Leaderboard from "../components/Leaderboard";
import DropDown from "../components/DropDown";

interface IAdditionalQuestionsPageProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class AdditionalQuestions extends React.Component<
  IAdditionalQuestionsPageProps
> {
  static navigationOptions = {
    title: "Joining leaderboard 6 out 6"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <View style={{ height: 40 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            Additional features / questions
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.Question}>nickname</Text>
          <WordsInput
            marginBottom={20}
            marginHorizontal={40}
            fontSize={22}
            height={40}
            borderColor={LIGHT_GREEN}
            borderWidth={1}
            placeholder="enter a nickname*"
          />

          <Headline
            message="How much time do you spend for learning in a week?"
            fontSize={20}
            textAlign="center"
            marginVertical={15}
            marginHorizontal={40}
          />

          <DropDown PossibleChoices={["5h<", "5h-10h", ">10h"]} />

          <Headline
            message="Are you a male or female?"
            fontSize={20}
            textAlign="center"
            marginVertical={15}
            marginHorizontal={40}
          />

          <DropDown PossibleChoices={["male", "female"]} />

          <Headline
            message="Are other users allowed to see your profile?*"
            fontSize={20}
            textAlign="center"
            marginVertical={15}
            marginHorizontal={40}
          />

          <DropDown PossibleChoices={["Yes", "No"]} />
        </View>

        <ContinueButtonBottom handleOnPress={() => navigate("InterResult")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Question: {
    fontSize: 18,
    marginLeft: 40,
    marginBottom: 10,
    fontWeight: "bold"
  }
});
