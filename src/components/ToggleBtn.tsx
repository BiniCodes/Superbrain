import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MAXLENGTH_NUMBER_DEFAULT, DARK_BLUE, MARGIN_DEFAULT, FONTSIZE_DEFAULT, HEIGHT_DEFAULT, BORDERWIDTH_DEFAULT, TEXTALIGN_DEFAULT, View_Align_Default, DARK_GREEN } from "../constans";
import {View} from "react-native";
import { Item } from "../models/Leaderboard";


interface IToggleBtnProps {
  status: boolean,
  handleClick: () => void
}


export default class ToggleBtn extends Component<IToggleBtnProps> {
    render() {
        return(
            <TouchableOpacity
                onPress={this.props.handleClick}
                activeOpacity={2}>
                
                <View style={{
                    height: 20,
                    width: 20,
                    marginVertical: 20,
                    marginHorizontal: 30,
                    paddingVertical: 20,
                    backgroundColor: this.props.status && this.props.status ? DARK_GREEN : DARK_BLUE,
                    
                }}>     
                </View>
            </TouchableOpacity>
        )
    }
}