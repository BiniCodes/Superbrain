import React, { Component } from "react";
import { TextInput } from "react-native-gesture-handler";
import {
  MAXLENGTH_NUMBER_DEFAULT,
  DARK_BLUE,
  MARGIN_DEFAULT,
  FONTSIZE_DEFAULT,
  HEIGHT_DEFAULT,
  BORDERWIDTH_DEFAULT,
  TEXTALIGN_DEFAULT,
  View_Align_Default
} from "../constans";
import { View } from "react-native";

interface INumberInputScreenProps {
  maxLength?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  fontSize?: number;
  height?: number;
  borderColor?: string;
  borderWidth?: 1;
  textAlign?: string;
}

export default class NumberInput extends Component<INumberInputScreenProps> {
  state = {
    myNumber: 0
  };
  onChanged = text => {
    let newText = "";
    let numbers = "0123456789";
    for (var i = 0; i < text.length; i++) {
      if (numbers.indexOf(text[i] > -1)) {
        newText = newText + text[i];
      } else {
        alert("please enter numbers only");
      }
    }
    this.setState({ myNumber: newText });
  };

  render() {
    const maxLength = this.props.maxLength
      ? this.props.maxLength
      : MAXLENGTH_NUMBER_DEFAULT;
    const marginBottom = this.props.marginBottom
      ? this.props.marginBottom
      : MARGIN_DEFAULT;
    const marginHorizontal = this.props.marginHorizontal
      ? this.props.marginHorizontal
      : MARGIN_DEFAULT;
    const fontSize = this.props.fontSize
      ? this.props.fontSize
      : FONTSIZE_DEFAULT;
    const height = this.props.height ? this.props.height : HEIGHT_DEFAULT;
    const borderColor = this.props.borderColor ? this.props.borderColor : "";
    const borderWidth = this.props.borderWidth
      ? this.props.borderWidth
      : BORDERWIDTH_DEFAULT;
    const textAlign = this.props.textAlign
      ? this.props.textAlign
      : TEXTALIGN_DEFAULT;

    return (
      <View>
        <TextInput
          keyboardType="numeric"
          onChangeText={text => this.onChanged(text)}
          value={this.state.myNumber}
          maxLength={maxLength}
          placeholder="your code"
          style={{
            marginBottom: marginBottom,
            marginHorizontal: marginHorizontal,
            fontSize: fontSize,
            //height = "padding"
            height: height,
            borderColor: borderColor,
            borderWidth: borderWidth,
            textAlign: textAlign
          }}
        />
      </View>
    );
  }
}
