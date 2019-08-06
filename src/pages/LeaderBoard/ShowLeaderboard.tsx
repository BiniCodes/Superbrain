import React from 'react';
import { Text, View } from 'react-native';
import { LeaderboardEntry } from '../../models/Leaderboard';
import { http } from '../../services/Server';

interface IShowLeaderboardProps {
    id: string;
}

interface IState {
    leaderboard: LeaderboardEntry;
}
export default class ShowLeaderboard extends React.Component<IShowLeaderboardProps, IState> {
    public static navigationOptions = {
        title: 'Additional features / questions'
    };

    constructor(props: IShowLeaderboardProps) {
        super(props);
        this.state = {
            leaderboard: null
        };
    }

    public componentDidMount() {
        http(this.props.id).then(item => this.setState({ leaderboard: item }));
    }

    public render() {
        if (!this.state.leaderboard) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            );
        }
        return (
            <View>
                <Text>{this.state.leaderboard && this.state.leaderboard.name}</Text>
            </View>
        );
    }
}
