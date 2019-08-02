import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity} from "react-native";
import { MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT, } from "../constans";
import CustomizeButton from "./CustomizeButton";


interface ISubjectProps {
    message: string,
    fontSize?: number,
    marginVertical?: number,

}

export default class Subject extends Component<ISubjectProps>{
    render() {
        const message = this.props.message;
        const fontSize = this.props.fontSize? this.props.fontSize : FONTSIZE_DEFAULT;
        const marginVertical = this.props.marginVertical? this.props.marginVertical : 10;

        return(
            <View style={{
                flexDirection: "row"
            }}>
                <Text style={{
                    textAlign: "left",
                    fontSize: fontSize,
                    marginVertical: marginVertical,
                    }}>
                    {message}
                </Text>

            </View>
        );
    
    }
}