import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState, ScrollView, FlatList } from 'react-navigation';
import BigButton from '../../components/BigButton';
import CustomizeButton from '../../components/CustomizeButton';
import { DARK_BLUE, DARK_GREEN, LIGHT_YELLOW } from '../../constans';
import { LeaderboardEntry } from '../../models/Leaderboard';
import { getAll, deleteById } from '../../services/Server';
import Swipeout from 'react-native-swipeout';
import FlatListItem from '../../components/FlatListItem';
import { SwipeListView } from 'react-native-swipe-list-view';

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

    public componentDidUpdate(prevProps: IShowLeaderboardProps, prevState: IState) {
        if (prevState.leaderboards !== this.state.leaderboards) {
            this.setState({ leaderboards: this.state.leaderboards });
        }
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
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                <View style={{ height: 30 }}>
                    <Text style={{ fontSize: 16, textAlign: 'center' }}>your leaderboard code, swipe to edit</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={boards}
                        renderItem={({ item, index }) => {
                            return (
                                // <TouchableOpacity
                                //     key={item.id}
                                //     onPressOut={() => navigate('ShowLeaderboard', { id: item.id })}
                                // >
                                <FlatListItem
                                    boards={boards}
                                    item={item}
                                    index={index}
                                    parentFlatList={this}
                                    handleDelete={this.handleDelete}
                                    onPressOut={() => navigate('ShowLeaderboard', { id: item.id })}
                                />
                                // </TouchableOpacity>
                            );
                        }}
                    ></FlatList>
                </View>
                <BigButton
                    message="Create a new leaderboard"
                    backgroundColor={DARK_BLUE}
                    handleOnPress={() => navigate('CreateLeaderboard')}
                />
            </View>
        );
    }

    handleDelete = (id: LeaderboardEntry) => {
        deleteById(id.id);
        const index = this.state.leaderboards.indexOf(id, 0);
        if (index > -1) {
            this.setState({
                leaderboards: this.state.leaderboards.splice(index, 1)
            });
        }
        this.forceUpdate();
    };
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
