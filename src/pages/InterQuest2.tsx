import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import Headline from '../components/Headline';
import { NavigationScreenProp, NavigationState, NavigationParams, ScrollView } from 'react-navigation';
import ContinueButtonBottom from '../components/ContinueButtonBottom';
import DropDown from '../components/DropDown';
import DropDownText from '../components/DropDownText';

interface IInterQuest2PageProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class InterQuest2 extends React.Component<IInterQuest2PageProps> {
    static navigationOptions = {
        title: 'Joining leaderboard 1 out 6'
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
                <View style={{ flex: 1 }}>
                    <Headline
                        message="In which state do you live?"
                        fontSize={25}
                        textAlign="center"
                        marginTop={100}
                        marginBottom={50}
                    />

                    <DropDownText
                        PossibleChoices={[
                            'Baden-Württemberg',
                            'Bayern',
                            'Berlin',
                            'Nordrhein-Westfalen',
                            'Hessen',
                            'Sachsen',
                            'Rheinland-Pfalz',
                            'Schleswig-Holstein',
                            'Thüringen',
                            'Niedersachsen',
                            'Hamburg',
                            'Sachsen-Anhalt',
                            'Saarland',
                            'Brandenburg',
                            'Bremen',
                            'Mecklenburg-Vorpommern'
                        ]}
                        width={300}
                    />
                </View>

                <ContinueButtonBottom handleOnPress={() => navigate('InterQuest3')} />
            </View>
        );
    }
}
