import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { DARK_BLUE } from '../constans';

interface IButtonScreenProps {
    message: string;
    backgroundColor: string;
    handleOnPress: () => void;
}

export default class BigButton extends Component<IButtonScreenProps> {
    public render() {
        const message = this.props.message;
        const backgroundColor = this.props.backgroundColor;
        return (
            <TouchableOpacity onPress={this.props.handleOnPress} activeOpacity={2}>
                <View
                    style={{
                        marginVertical: 8,
                        marginHorizontal: 16,
                        paddingVertical: 16,
                        backgroundColor: DARK_BLUE,
                        borderRadius: 4
                        //borderColor: DARK_BLUE,
                        //borderWidth: 1
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#ffffff',
                            textAlign: 'center'
                        }}
                    >
                        {message}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}
