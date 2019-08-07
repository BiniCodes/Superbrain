import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import { NavigationScreenProp, NavigationState, NavigationParams, ScrollView } from 'react-navigation';
import ContinueButtonBottom from '../components/ContinueButtonBottom';
import Leaderboard from '../components/Leaderboard';

interface IInterGradesPageProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class InterGrades extends React.Component<IInterGradesPageProps> {
    static navigationOptions = {
        title: 'Joining leaderboard 5 out 6'
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <View style={{ height: 40 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25 }}>Enter your grades from 1 - 15</Text>
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <Leaderboard
                        SubjectsList={[
                            'Biologie',
                            'Chemie',
                            'Deutsch',
                            'Englisch',
                            'Geographie',
                            'Ethik',
                            'Französisch',
                            'Geschichte',
                            'Informatik',
                            'Kunst',
                            'Latein',
                            'Mathematik',
                            'Musik',
                            'Pädagogik',
                            'Philosophie',
                            'Religion',
                            'Sport'
                        ]}
                    />
                </ScrollView>

                <ContinueButtonBottom handleOnPress={() => navigate('AdditionalQuestions')} />
            </View>
        );
    }
}
