import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import {
    MARGIN_DEFAULT,
    FONTSIZE_DEFAULT,
    TEXTALIGN_DEFAULT,
    DROPDOWN_HEIGHT_DEFAULT,
    DROPDOWN_WIDTH_DEFAULT
} from '../constans';

interface IDropDownProps {
    PossibleChoices: string[];
    marginTop?: number;
    height?: number;
    width?: number;
    alignSelf?: string;
}

export default class DropDown extends Component<IDropDownProps> {
    state = {
        year_default: ''
    };
    PossibleChoices = this.props.PossibleChoices;
    renderItem() {
        let ReturnedArray = [];
        for (let item of this.PossibleChoices) {
            ReturnedArray.push(<Picker.Item key={item} label={item} value={item} />);
        }
        return ReturnedArray;
    }

    render() {
        const marginTop = this.props.marginTop ? this.props.marginTop : MARGIN_DEFAULT;
        // default height is 50
        const height = this.props.height ? this.props.height : DROPDOWN_HEIGHT_DEFAULT;
        // default width is 150
        const width = this.props.width ? this.props.width : DROPDOWN_WIDTH_DEFAULT;
        const alignSelf = this.props.alignSelf ? this.props.alignSelf : 'center';
        return (
            <Picker
                selectedValue={this.state.year_default}
                style={{
                    height: height,
                    width: width,
                    alignSelf: alignSelf,
                    marginTop: marginTop
                }}
                onValueChange={itemValue => this.setState({ year_default: itemValue })}
            >
                {this.renderItem()}
            </Picker>
        );
    }
}
