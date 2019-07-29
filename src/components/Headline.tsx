import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity} from "react-native";


interface IHeadlineScreenProps {
    message: string,
    fontSize: number
}

export default class Headline extends Component<IHeadlineScreenProps>{
    render() {
        const message = this.props.message;
        const fontSize = this.props.fontSize;
        return(
            <Text style={{fontSize: fontSize, textAlign: 'center' }}>{message}</Text>
        );
    }
}