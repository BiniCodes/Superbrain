import React, { Component } from "react";
import { TextInput } from "react-native-gesture-handler";
import {
  MAXLENGTH_NUMBER_DEFAULT,
  DARK_BLUE,
  MARGIN_DEFAULT,
  FONTSIZE_DEFAULT,
  HEIGHT_DEFAULT,
  BORDERWIDTH_DEFAULT,
  TEXTALIGN_DEFAULT
} from "../constans";

interface IWordsInputScreenProps {
  marginBottom?: number;
  marginHorizontal?: number;
  fontSize?: number;
  height?: number;
  borderColor?: string;
  borderWidth?: 1;
  textAlign?: string;
  placeholder?: string;
}

//example how to use Wordsinput is in InterQuest4
export default class WordsInput extends Component<IWordsInputScreenProps> {
  render() {
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
    const placeholder = this.props.placeholder ? this.props.placeholder : "";
    return (
      <TextInput
        placeholder={placeholder}
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
    );
  }
}
