import React, { Component } from "react";
import {View, Picker} from "react-native";
import { MARGIN_DEFAULT, FONTSIZE_DEFAULT, TEXTALIGN_DEFAULT, DROPDOWN_HEIGHT_DEFAULT, DROPDOWN_WIDTH_DEFAULT, } from "../constans";


interface IDropDownProps {
    PossibleChoices: string[],
    marginTop?: number,
    height?: number,
    width?: number,
    alignSelf?: string,
    
}

export default class DropDown extends Component<IDropDownProps>{
    state = {
        year_default: ""
    }
    PossibleChoices = this.props.PossibleChoices;
    renderItem(){
        let ReturnedArray = [];
        for (let item of this.PossibleChoices) {
            ReturnedArray.push(<Picker.Item key={item} label={item} value={item}/>)
        }
        return ReturnedArray;
    }

    render() {
        //const PossibleChoices = this.props.PossibleChoices;
        const marginTop = this.props.marginTop? this.props.marginTop : MARGIN_DEFAULT;
        const height = this.props.height? this.props.height : DROPDOWN_HEIGHT_DEFAULT;
        const width = this.props.width? this.props.width : DROPDOWN_WIDTH_DEFAULT;

        return(
            <Picker
                selectedValue= {this.state.year_default}
                style={{
                    height: height,
                    width: width,
                    alignSelf: "center",
                    marginTop: marginTop,
                    }}
                    
                onValueChange={(itemValue) =>
                    this.setState({year_default: itemValue})
                }>
                {this.renderItem()}
                
            </Picker>
        );
    }
}