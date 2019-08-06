import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

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
                        marginVertical: 20,
                        marginHorizontal: 30,
                        paddingVertical: 20,
                        backgroundColor: backgroundColor
                    }}
                >
                    <Text
                        style={{
                            fontSize: 25,
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
