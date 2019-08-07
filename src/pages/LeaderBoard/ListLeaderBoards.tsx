import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState, ScrollView } from 'react-navigation';
import BigButton from '../../components/BigButton';
import CustomizeButton from '../../components/CustomizeButton';
import { DARK_BLUE, DARK_GREEN } from '../../constans';
import { LeaderboardEntry } from '../../models/Leaderboard';
import { getAll } from '../../services/Server';
// import Swipeout from 'react-native-swipeout';
import Headline from '../../components/Headline';
// import { Directions } from 'react-native-gesture-handler';

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
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: DARK_BLUE
                    }}
                >
                    <Text style={{ fontSize: 30, color: '#ffffff' }}>Loading...</Text>
                </View>
            );
        }
        // const swipeSettings = {
        //     autoClose: true,
        //     onClose: (secId, rowId, direction) => {},
        //     onOpen: (secId, rowId, direction) => {},
        //     right: [
        //         {
        //             onPress: () => {},
        //             text: 'Delete',
        //             type: 'delete'
        //         }
        //     ],
        //     rowId: this.board.id
        // };
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <ScrollView style={{ flex: 1 }}>
                    {boards.map(board => (
                        // swipeout make the background to gray
                        // <Swipeout {...swipeSettings}>
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
                                    padding: 15,
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text>{board.name}</Text>
                                <CustomizeButton message="delete" />
                                <CustomizeButton message="edit" />
                            </View>
                        </TouchableOpacity>
                        // </Swipeout>
                    ))}
                </ScrollView>

                <BigButton
                    message="Create a new leaderboard"
                    backgroundColor={DARK_BLUE}
                    handleOnPress={() => navigate('CreateLeaderboard')}
                />
            </View>
        );
    }
}

{
    /* <ScrollView>
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
                    padding: 15,
                    justifyContent: 'space-between'
                }}
            >
                <Text>{board.name}</Text>
                <CustomizeButton message="Delete" />
                <CustomizeButton message="Edit" />
            </View>
        </TouchableOpacity>
    ))}
</ScrollView>; */
}
