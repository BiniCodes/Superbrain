import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import {
    BTN_DEFAULT_PADDING,
    MARGIN_DEFAULT,
    FONTSIZE_DEFAULT,
    TEXTALIGN_DEFAULT,
    BACKGROUND_COLOR_DEFAULT,
    DARK_BLUE,
    BORDERWIDTH_DEFAULT,
    BORDERCOLOR_DEFAULT
} from '../constans';
import { LeaderboardEntry } from '../models/Leaderboard';

interface IMidSizeButtonScreenProps {
    message: string;
    backgroundColor?: string;
    marginVertical?: number;
    paddingVertical?: number;
    paddingHorizontal?: number;
    fontSize?: number;
    textAlign?: string;
    marginHorizontal?: number;
    marginTop?: number;
    handleOnPress?: () => void;
    borderRadius?: number;
    borderWidth?: number;
    borderColor?: string;
    color?: string;
}

export default class CustomizeButton extends Component<IMidSizeButtonScreenProps> {
    public render() {
        const message = this.props.message;
        const marginVertical = this.props.marginVertical ? this.props.marginVertical : MARGIN_DEFAULT;
        const marginHorizontal = this.props.marginHorizontal ? this.props.marginHorizontal : MARGIN_DEFAULT;
        const backgroundColor = this.props.backgroundColor ? this.props.backgroundColor : BACKGROUND_COLOR_DEFAULT;
        const paddingVertical = this.props.paddingVertical ? this.props.paddingVertical : BTN_DEFAULT_PADDING;
        const paddingHorizontal = this.props.paddingHorizontal ? this.props.paddingHorizontal : BTN_DEFAULT_PADDING;
        const fontSize = this.props.fontSize ? this.props.fontSize : FONTSIZE_DEFAULT;
        const borderRadius = this.props.borderRadius ? this.props.borderRadius : MARGIN_DEFAULT;
        const textAlign = this.props.textAlign ? this.props.textAlign : TEXTALIGN_DEFAULT;
        const marginTop = this.props.marginTop ? this.props.marginTop : MARGIN_DEFAULT;
        const borderWidth = this.props.borderWidth ? this.props.borderWidth : BORDERWIDTH_DEFAULT;
        const borderColor = this.props.borderColor ? this.props.borderColor : BORDERCOLOR_DEFAULT;
        const color = this.props.color ? this.props.color : '#000000'; //black
        return (
            <TouchableOpacity onPress={this.props.handleOnPress} activeOpacity={2}>
                <View
                    style={{
                        marginVertical: marginVertical,
                        marginHorizontal: marginHorizontal,
                        paddingHorizontal: paddingHorizontal,
                        paddingVertical: paddingVertical,
                        backgroundColor: backgroundColor,
                        marginTop: marginTop,
                        borderRadius: borderRadius,
                        borderWidth: borderWidth,
                        borderColor: borderColor
                    }}
                >
                    <Text
                        style={{
                            fontSize: fontSize,
                            textAlign: textAlign,
                            color: color
                        }}
                    >
                        {message}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
