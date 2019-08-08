import React, { Component } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Image } from 'react-native';
import empty from '../images/empty.png';

interface IToggleBtnProps {
    status: boolean;
    handleClick: () => void;
}

export default class ToggleBtn extends Component<IToggleBtnProps> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.handleClick} activeOpacity={2}>
                <View
                    style={{
                        height: 10,
                        width: 20,
                        marginVertical: 0,
                        marginHorizontal: 30,
                        paddingVertical: 25
                    }}
                >
                    <Image
                        source={this.props.status ? require('../images/done.png') : require('../images/empty.png')}
                        style={{ width: 25, height: 25, alignSelf: 'center' }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
