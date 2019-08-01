import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity} from "react-native";
import { MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT, } from "../constans";
import CustomizeButton from "./CustomizeButton";


interface ISubjectProps {
    message: string,
    fontSize?: number,

}

export default class Subject extends Component<ISubjectProps>{
    render() {
        const message = this.props.message;
        const fontSize = this.props.fontSize? this.props.fontSize : FONTSIZE_DEFAULT;


        return(
            <View style={{
                flexDirection: "row"
            }}>
                <Text style={{
                    textAlign: "left",
                    fontSize: fontSize,
                    }}>
                    {message}
                </Text>

            </View>
        );
    
    }
}