import React from 'react';
import { Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { LeaderboardEntry } from '../../models/Leaderboard';
import { http } from '../../services/Server';
import { ScrollView } from 'react-native-gesture-handler';
import Subject from '../../components/Subject';
import NumberInput from '../../components/NumberInput';

interface IShowLeaderboardProps {
    id: string;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
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
        http(this.props.navigation.getParam('id', '0')).then(item => this.setState({ leaderboard: item }));
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
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <View style={{ height: 40 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Check Selected Subjects</Text>
                </View>
                <View style={{ height: 40 }}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.state.leaderboard.name}</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {this.state.leaderboard.subjects.map(item => {
                        return (
                            <View
                                key={item.name}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Subject message={item.name} />
                                <NumberInput />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}
