import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity} from "react-native";
import { MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT, } from "../constans";


interface ISubjectProps {
    message: string,
}

export default class Subject extends Component<ISubjectProps>{
    render() {
        const message = this.props.message;


        return(
            <Text style={{
                textAlign: "center",
                }}>
                {message}
            </Text>
        );
    
    }
}