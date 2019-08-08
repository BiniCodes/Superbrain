import React from 'react';
import { View, Text } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import CustomizeButton from '../components/CustomizeButton';
import { DARK_GREEN } from '../constans';

interface IProfilePageProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class AddingGrades extends React.Component<IProfilePageProps> {
    public static navigationOptions = {
        title: 'Max-Planck-Schule Kiel Q1.c'
    };

    public render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <CustomizeButton
                    message="continue"
                    backgroundColor={DARK_GREEN}
                    handleOnPress={() => navigate('Home')}
                />
            </View>
        );
    }
}
