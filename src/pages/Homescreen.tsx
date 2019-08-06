import React from 'react';
import { Image, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import BigButton from '../components/BigButton';
import CustomizeButton from '../components/CustomizeButton';
import Headline from '../components/Headline';
import { DARK_BLUE, DARK_GREEN, LIGHT_GREEN } from '../constans';

interface IHomeScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class HomeScreen extends React.Component<IHomeScreenProps> {
    public static navigationOptions = {
        title: 'Welcome to Superbrain'
    };
    public render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Headline message="Superbrain" textAlign="center" marginTop={20} marginBottom={10} />
                <Image style={{ width: 500, height: 50 }} source={require('../icons/brain-logo.png')} />
                <Headline
                    message="This app is for all people who want
                      to compare their grades anonymously"
                    textAlign="center"
                    marginHorizontal={40}
                    marginBottom={80}
                    fontSize={15}
                />

                <BigButton
                    message="International leaderboard"
                    backgroundColor={LIGHT_GREEN}
                    handleOnPress={() => navigate('JoinInternational')}
                />

                <BigButton
                    message="join private leaderboard"
                    // vertical = senkrecht!!
                    backgroundColor={DARK_GREEN}
                    handleOnPress={() => navigate('JoinLeaderboard')}
                />

                <BigButton
                    message="List of all your leaderboards"
                    backgroundColor={DARK_BLUE}
                    handleOnPress={() => navigate('ListLeaderBoards')}
                />

                <CustomizeButton
                    message="instruction"
                    borderRadius={4}
                    marginTop={30}
                    fontSize={15}
                    marginHorizontal={16}
                    paddingVertical={10}
                    textAlign="center"
                    handleOnPress={() => navigate('NeedHelp')}
                />
            </View>
        );
    }
}
