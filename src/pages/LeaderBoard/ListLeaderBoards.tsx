import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState, ScrollView } from 'react-navigation';
import BigButton from '../../components/BigButton';
import { DARK_BLUE, DARK_GREEN } from '../../constans';
import { LeaderboardEntry } from '../../models/Leaderboard';
import { getAll } from '../../services/Server';

interface IShowLeaderboardProps {
    id: string;
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface IState {
    leaderboards: LeaderboardEntry[];
}
export default class ListLeaderBoards extends React.Component<IShowLeaderboardProps, IState> {
    public static navigationOptions = {
        title: 'List Leaderboards'
    };

    constructor(props: IShowLeaderboardProps) {
        super(props);
        this.state = {
            leaderboards: null
        };
    }

    public componentDidMount() {
        getAll().then(boards => {
            this.setState({ leaderboards: boards as LeaderboardEntry[] });
        });
    }

    public render() {
        const { navigate } = this.props.navigation;
        const boards = this.state.leaderboards;
        if (!boards) {
            return (
                <View>
                    <Text>Loading</Text>
                </View>
            );
        }
        return (
            <View>
                <ScrollView>
                    {boards.map(board => (
                        <TouchableOpacity
                            key={board.id}
                            onPress={() => navigate('ShowLeaderboard', { id: board.id })}
                            activeOpacity={2}
                        >
                            <View
                                style={{
                                    backgroundColor: DARK_GREEN,
                                    display: 'flex',
                                    flexDirection: 'row',
                                    margin: 10,
                                    padding: 10,
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text>{board.name}</Text>
                                <Text>DELETE</Text>
                                <Text>EDIT</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                <BigButton
                    message="List Leader Boards"
                    backgroundColor={DARK_BLUE}
                    handleOnPress={() => navigate('ListLeaderBoards')}
                />
            </View>
        );
    }
}
