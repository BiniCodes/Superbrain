import { View, Text } from 'react-native';
import React from 'react';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { LeaderboardEntry } from '../models/Leaderboard';
import { http } from '../services/Server';

interface ICreateLeaderboardFeatureScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
    leaderboard: LeaderboardEntry | null;
}
export default class CreateLeaderboardFeature extends React.Component<ICreateLeaderboardFeatureScreenProps, IState> {
    static navigationOptions = {
        title: 'CreateLeaderboardFeature'
    };

    constructor(props: ICreateLeaderboardFeatureScreenProps) {
        super(props);
        this.state = {
            leaderboard: null
        };
    }

    componentWillMount() {
        http('10').then(item => console.log(item));
    }

    render() {
        const { navigate } = this.props.navigation;
        if (true) return <View></View>;
        return (
            <View>
                <Text>{this.state.leaderboard && this.state.leaderboard.name}</Text>
            </View>
        );
    }
}
