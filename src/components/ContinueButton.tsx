import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  TouchableOpacity,
  GestureResponderEvent
} from "react-native";
import {
  BTN_DEFAULT_PADDING,
  MARGIN_DEFAULT,
  FONTSIZE_DEFAULT,
  TEXTALIGN_DEFAULT,
  BACKGROUND_COLOR_DEFAULT,
  DARK_GREEN
} from "../constans";

interface IContinueButtonScreenProps {
  marginVertical?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  marginHorizontal?: number;
  marginTop?: number;
  handleOnPress: () => void;
}

export default class ContinueButton extends Component<
  IContinueButtonScreenProps
> {
  render() {
    const marginVertical = this.props.marginVertical
      ? this.props.marginVertical
      : MARGIN_DEFAULT;
    const marginHorizontal = this.props.marginHorizontal
      ? this.props.marginHorizontal
      : MARGIN_DEFAULT;
    const paddingVertical = this.props.paddingVertical
      ? this.props.paddingVertical
      : BTN_DEFAULT_PADDING;
    const paddingHorizontal = this.props.paddingHorizontal
      ? this.props.paddingHorizontal
      : BTN_DEFAULT_PADDING;
    const marginTop = this.props.marginTop
      ? this.props.marginTop
      : MARGIN_DEFAULT;

    return (
      <TouchableOpacity onPress={this.props.handleOnPress} activeOpacity={2}>
        <View
          style={{
            marginVertical: marginVertical,
            marginHorizontal: marginHorizontal,
            paddingHorizontal: paddingHorizontal,
            paddingVertical: paddingVertical,
            backgroundColor: DARK_GREEN,
            marginTop: marginTop
            //flex: 1,
            //justifyContent: "flex-end",
            //marginBottom: 40,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center"
            }}
          >
            Continue
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
