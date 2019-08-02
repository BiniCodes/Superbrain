import React, { Component } from "react";
import {StyleSheet ,View, Button, Text, TouchableOpacity, GestureResponderEvent} from "react-native";
import { BTN_DEFAULT_PADDING, MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT, BACKGROUND_COLOR_DEFAULT, DARK_GREEN } from "../constans";

interface IContinueButtonBottomScreenProps {
    marginVertical?: number,
    paddingHorizontal?: number,
    handleOnPress: () => void
}


export default class ContinueButtonBottom extends Component<IContinueButtonBottomScreenProps>{
    render() {
        const marginVertical = this.props.marginVertical? this.props.marginVertical : MARGIN_DEFAULT;
        const paddingHorizontal = this.props.paddingHorizontal? this.props.paddingHorizontal : BTN_DEFAULT_PADDING;

        return(
            <View style={{height: 100}}>
                <TouchableOpacity
        
                    onPress={this.props.handleOnPress}
                    activeOpacity={2}>
                    <View style={{
                        marginVertical: marginVertical,
                        marginHorizontal: 70,
                        paddingHorizontal: paddingHorizontal,
                        paddingVertical: 10,
                        backgroundColor: DARK_GREEN,
                        marginTop: 30,
                        //flex: 1,
                        //justifyContent: "flex-end",
                        //marginBottom: 40,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            textAlign: "center",
                        }}>
                            Continue
                        </Text>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}