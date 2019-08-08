import { View, Text, Button, StyleSheet, Image } from 'react-native';
import React from 'react';
import Headline from '../components/Headline';
import { NavigationScreenProp, NavigationState, NavigationParams, ScrollView } from 'react-navigation';
import ContinueButtonBottom from '../components/ContinueButtonBottom';
import WordsInput from '../components/WordsInput';
import { LIGHT_GREEN, DARK_GREEN, DARK_BLUE, FONTSIZE_DEFAULT } from '../constans';
import BigButton from '../components/BigButton';
import InstructionButton from '../components/InstructionButton';

interface INeedHelpPageProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const styles = StyleSheet.create({
    DescriptionText: {
        marginHorizontal: 40,
        fontSize: 18,
        textAlign: 'center'
    }
});

export default class NeedHelp extends React.Component<INeedHelpPageProps> {
    static navigationOptions = {
        title: 'Instruction'
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
                    <InstructionButton
                        message="International leaderboard"
                        backgroundColor={DARK_BLUE}
                        handleOnPress={() => navigate('JoinInternational')}
                    />
                    <Text style={styles.DescriptionText}>
                        this is where you can compare yourself with everyone in the world. You can create only one
                        account here
                    </Text>

                    <InstructionButton
                        message="join private leaderboard"
                        //vertical = senkrecht!!
                        backgroundColor={DARK_BLUE}
                        handleOnPress={() => navigate('JoinLeaderboard')}
                    />
                    <Text style={styles.DescriptionText}>
                        this is to join a private list, that one of your friend created. Here you enter your grade
                        privately and it won't count to international.
                    </Text>

                    <InstructionButton
                        message="List of all your leaderboards"
                        backgroundColor={DARK_BLUE}
                        handleOnPress={() => navigate('ListLeaderBoards')}
                    />
                    <Text style={styles.DescriptionText}>
                        This is where you can create your own leaderboard and also see in which leaderboard you are
                        registered
                    </Text>
                </View>
            </View>
        );
    }
}
