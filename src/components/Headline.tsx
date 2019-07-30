import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity} from "react-native";
import { MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT, } from "../constans";


interface IHeadlineScreenProps {
    message: string,
    fontSize?: number,
    marginHorizontal?: number,
    marginVertical?: number,
    textAlign?: string,
    
}

export default class Headline extends Component<IHeadlineScreenProps>{
    render() {
        const message = this.props.message;
        const fontSize = this.props.fontSize? this.props.fontSize : FONTSIZE_DEFAULT;
        const marginHorizontal = this.props.marginHorizontal? this.props.marginHorizontal : MARGIN_DEFAULT;
        const marginVertical = this.props.marginVertical? this.props.marginVertical : MARGIN_DEFAULT;
        const textAlign = this.props.textAlign? this.props.textAlign : TEXTALIGN_DEFAULT;
        return(
            <Text style={{
                fontSize: fontSize,
                textAlign: textAlign,
                marginHorizontal: marginHorizontal,
                marginVertical: marginVertical,
                }}>
                {message}
            </Text>
        );
    }
}