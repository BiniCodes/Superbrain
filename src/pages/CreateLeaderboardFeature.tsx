import { View, Text } from 'react-native';
import React from 'react';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import Headline from '../components/Headline';
import { DARK_GREEN, DARK_BLUE, LIGHT_GREEN, LIGHT_YELLOW } from '../constans';
import CustomizeButton from '../components/CustomizeButton';
import { LeaderboardEntry } from '../models/Leaderboard';
import { http } from '../services/Server';

interface ICreateLeaderboardFeatureScreenProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
    leaderboard: LeaderboardEntry;
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

    componentDidMount() {
        http('10').then(item => this.setState({ leaderboard: item }));
    }

    render() {
        const { navigate } = this.props.navigation;
        if (!this.state.leaderboard) return <View></View>;
        return (
            <View>
                <Text>{this.state.leaderboard && this.state.leaderboard.name}</Text>
            </View>
        );
    }
}
