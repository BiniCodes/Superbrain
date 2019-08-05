import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import Headline from '../components/Headline';
import { NavigationScreenProp, NavigationState, NavigationParams, ScrollView } from 'react-navigation';
import ContinueButtonBottom from '../components/ContinueButtonBottom';
import Leaderboard from '../components/Leaderboard';
import InterRanking from '../components/InterRanking';
import { DARK_BLUE } from '../constans';

interface IInterResultPageProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class InterResult extends React.Component<IInterResultPageProps> {
    static navigationOptions = {
        title: 'Overview'
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
                <View style={{ height: 70 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>
                        Your current position out of
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>1.237.982 competitors</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <InterRanking
                        SubjectsList={[
                            'Zeugnis',
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
                <ContinueButtonBottom handleOnPress={() => navigate('Home')} />
            </View>
        );
    }
}
