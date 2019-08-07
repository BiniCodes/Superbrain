import React from 'react';
import { View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import ContinueButton from '../components/ContinueButton';
import Headline from '../components/Headline';
import NumberInput from '../components/NumberInput';
import { DARK_BLUE } from '../constans';

interface IProfilePageProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class JoinLeaderboard extends React.Component<IProfilePageProps> {
    static navigationOptions = {
        title: 'Join private leaderboard'
    };
    public render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Headline
                    message="enter your code"
                    fontSize={30}
                    textAlign="center"
                    marginTop={100}
                    marginBottom={50}
                />

                <NumberInput
                    maxLength={10}
                    marginBottom={90}
                    marginHorizontal={80}
                    fontSize={25}
                    height={60}
                    borderColor={DARK_BLUE}
                    borderWidth={1}
                    textAlign="center"
                />

                <ContinueButton
                    marginHorizontal={100}
                    paddingVertical={10}
                    marginTop={120}
                    //validate given data
                    handleOnPress={() => navigate('AddingGrade')}
                />
            </View>
        );
    }
}
