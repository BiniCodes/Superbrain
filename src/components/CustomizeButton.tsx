import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity, GestureResponderEvent} from "react-native";
import { BTN_DEFAULT_PADDING, MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT } from "../constans";

interface IMidSizeButtonScreenProps {
    message: string,
    backgroundColor: string,
    marginVertical?: number,
    paddingVertical?: number,
    paddingHorizontal?: number,
    fontSize?: number,
    textAlign?: string,
    marginHorizontal?: number,
    marginTop?: number,
    handleOnPress: () => void
}


export default class CustomizeButton extends Component<IMidSizeButtonScreenProps>{
    render() {
        const message = this.props.message;
        const marginVertical = this.props.marginVertical? this.props.marginVertical : MARGIN_DEFAULT;
        const marginHorizontal = this.props.marginHorizontal? this.props.marginHorizontal : MARGIN_DEFAULT;
        const backgroundColor = this.props.backgroundColor;
        const paddingVertical = this.props.paddingVertical ? this.props.paddingVertical : BTN_DEFAULT_PADDING;
        const paddingHorizontal = this.props.paddingHorizontal? this.props.paddingHorizontal : BTN_DEFAULT_PADDING;
        const fontSize = this.props.fontSize? this.props.fontSize : FONTSIZE_DEFAULT
        const textAlign = this.props.textAlign? this.props.textAlign : TEXTALIGN_DEFAULT
        const marginTop = this.props.marginTop? this.props.marginTop : MARGIN_DEFAULT
        return(
            <TouchableOpacity
     
                onPress={this.props.handleOnPress}
                activeOpacity={2}>
                <View style={{
                    marginVertical: marginVertical,
                    marginHorizontal: marginHorizontal,
                    paddingHorizontal: paddingHorizontal,
                    paddingVertical: paddingVertical,
                    backgroundColor: backgroundColor,
                    marginTop : marginTop,
                }}>
                    <Text style={{
                        fontSize: fontSize,
                        textAlign: textAlign,
                    }}>
                        {message}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}