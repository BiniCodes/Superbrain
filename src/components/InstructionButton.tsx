import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams, withNavigation } from 'react-navigation';

interface IInstructionButtonScreenProps {
    message: string;
    backgroundColor: string;
    handleOnPress: () => void;
}

export default class InstructionButton extends Component<IInstructionButtonScreenProps> {
    render() {
        const message = this.props.message;
        const backgroundColor = this.props.backgroundColor;
        return (
            <TouchableOpacity onPress={this.props.handleOnPress} activeOpacity={2}>
                <View
                    style={{
                        marginVertical: 15,
                        marginHorizontal: 80,
                        paddingVertical: 10,
                        backgroundColor: backgroundColor
                    }}
                >
                    <Text
                        style={{
                            fontSize: 18,
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
