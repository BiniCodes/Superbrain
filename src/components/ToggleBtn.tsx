import React, { Component } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import {View} from "react-native";


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
                    backgroundColor: this.props.status && this.props.status ? "#1df239" : "#f22f1d",
                    
                }}>     
                </View>
            </TouchableOpacity>
        )
    }
}