import React, { Component } from "react";
import { TextInput } from "react-native-gesture-handler";
import { MAXLENGTH_NUMBER_DEFAULT, DARK_BLUE, MARGIN_DEFAULT, FONTSIZE_DEFAULT, HEIGHT_DEFAULT, BORDERWIDTH_DEFAULT, TEXTALIGN_DEFAULT, View_Align_Default } from "../constans";
import {View} from "react-native";


interface IGradesInputScreenProps {
    maxLength?: number,
    marginBottom?: number,
    marginHorizontal?: number,
    height?: number,
    borderColor?: string,
    borderWidth?: 1,
    textAlign?: string,
}



export default class GradesInput extends Component<IGradesInputScreenProps> {
    state= {
        myNumber: 0
    }
    onChanged = (text) => {
        let newText = "";
        let numbers = "0123456789"
        for (var i = 0; i < text.length; i++) {
          if(numbers.indexOf(text[i] > -1) ) {
            newText = newText + text[i];
          }
          else {
            alert("please enter numbers only")
          }
        }
        this.setState({ myNumber: newText});
    }
    
    render() {
        const maxLength = this.props.maxLength? this.props.maxLength : MAXLENGTH_NUMBER_DEFAULT;
        const marginBottom = this.props.marginBottom? this.props.marginBottom : MARGIN_DEFAULT;
        const marginHorizontal = this.props.marginHorizontal? this.props.marginHorizontal : MARGIN_DEFAULT;
        const height = this.props.height? this.props.height : HEIGHT_DEFAULT;
        const borderColor = this.props.borderColor? this.props.borderColor : "";
        const borderWidth = this.props.borderWidth? this.props.borderWidth : BORDERWIDTH_DEFAULT;
        const textAlign = this.props.textAlign? this.props.textAlign : TEXTALIGN_DEFAULT;

        return(
            <View style={{
                alignSelf: "flex-end",
                marginRight: 20,
                marginVertical: 5,
                }}>
                <TextInput
                    keyboardType="numeric"
                    onChangeText={ (text) => this.onChanged(text)}
                    value = {this.state.myNumber}
                    maxLength = {maxLength}
                    placeholder = "Note"
                    style = {{
                        marginBottom: marginBottom,
                        marginHorizontal: marginHorizontal,
                        fontSize: 25,
                        //height = "padding"
                        height: height,
                        borderColor: borderColor,
                        borderWidth: borderWidth,
                        textAlign: textAlign,
                        
                    }}
                />
            </View>
        )
    }

}