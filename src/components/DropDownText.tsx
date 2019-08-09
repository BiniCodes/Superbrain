import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { MARGIN_DEFAULT, DROPDOWN_HEIGHT_DEFAULT, DROPDOWN_WIDTH_DEFAULT } from '../constans';
import { LeaderboardEntry, Item } from '../models/Leaderboard';

interface IDropDownTextProps {
    PossibleChoices: string[]; //number
    marginTop?: number;
    height?: number;
    width?: number;
    alignSelf?: string;
    item?: Item;
    onChange?: (data: Item) => void;
}

interface IDropDownTextState {
    year_default: string;
}

export default class DropDownText extends Component<IDropDownTextProps, IDropDownTextState> {
    constructor(props: IDropDownTextProps) {
        super(props);
        this.state = {
            year_default: ''
        };
    }
    PossibleChoices = this.props.PossibleChoices;
    //create an array that all created Picker will be pushed in. This Component return an array!
    renderItem() {
        let ReturnedArray = [];
        for (let item of this.PossibleChoices) {
            ReturnedArray.push(<Picker.Item key={item} label={item.toString()} value={item} />);
        }
        return ReturnedArray;
    }

    // public componentWillMount() {
    //     if (this.props.item) {
    //         const value = this.props.item.value;
    //         console.log('DROPDOWN value', value);
    //         this.setState({ year_default: value });
    //     }
    // }

    render() {
        const marginTop = this.props.marginTop ? this.props.marginTop : MARGIN_DEFAULT;
        // default height is 50
        const height = this.props.height ? this.props.height : DROPDOWN_HEIGHT_DEFAULT;
        // default width is 150
        const width = this.props.width ? this.props.width : DROPDOWN_WIDTH_DEFAULT;
        const alignSelf = this.props.alignSelf ? this.props.alignSelf : 'center';
        return (
            <Picker
                selectedValue={this.state.year_default} //toString() needs to be gone
                style={{
                    height: height,
                    width: width,
                    alignSelf: alignSelf,
                    marginTop: marginTop
                }}
                onValueChange={itemValue => this.setState({ year_default: itemValue })}
                // onValueChange={this.handleChange}
            >
                {this.renderItem()}
            </Picker>
        );
    }

    // handleChange = (itemValue: any) => {
    //     this.setState({ year_default: itemValue });
    //     const newItem = { ...this.props.item, value: itemValue }; //"+" converts string to number
    //     this.props.onChange(newItem);
    // };
}
