import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity, GestureResponderEvent} from "react-native";
import { NavigationScreenProp,
         NavigationState,
         NavigationParams,
         withNavigation
        } from "react-navigation";
import { BTN_DEFAULT_PADDING, MARGIN_DEFAULT, FONTSIZE_DEFAULT } from "../constans";

interface IButtonScreenProps {
    message: string,
    backgroundColor: string,
    handleOnPress: () => void
}


export default class BigButton extends Component<IButtonScreenProps>{
    render() {
        const message = this.props.message;
        const backgroundColor = this.props.backgroundColor;
        return(
            <TouchableOpacity
                onPress={this.props.handleOnPress}
                activeOpacity={2}>
                
                <View style={{
                    marginVertical: 20,
                    marginHorizontal: 30,
                    paddingVertical: 20,
                    backgroundColor: backgroundColor,
                    
                }}>

                    <Text style={{
                        fontSize: 25,
                        textAlign: "center"
                    }}>
                        {message}
                    </Text>
                
                </View>
            
            </TouchableOpacity>
        );
    }
}