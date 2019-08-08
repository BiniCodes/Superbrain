import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { DARK_BLUE, LIGHT_GREEN, LIGHT_YELLOW } from '../constans';
import { LeaderboardEntry } from '../models/Leaderboard';
import Swipeout from 'react-native-swipeout';

interface IFlatListItemProps {
    boards: LeaderboardEntry[];
    index: number;
    parentFlatList: any;
    item: LeaderboardEntry;
    handleDelete: (id: LeaderboardEntry) => void;
    onPressOut: () => void;
}

interface IFlatListItemState {
    activeRowKey: any;
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
        marginTop: 18
    }
});

export default class FlatListItem extends Component<IFlatListItemProps, IFlatListItemState> {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }
    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete ?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        this.props.boards.splice(this.props.index, 1);
                                        this.props.handleDelete(this.props.item);
                                        //  this.props.parentFlatList.refreshFlatList(deletingRow);
                                    }
                                }
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete',
                    type: 'delete'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        console.log('hello');
                        this.props.onPressOut();
                    },
                    text: 'edit'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                {/*Wrap to make it line column */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}
                >
                    {/*Color */}

                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            // backgroundColor: this.props.index % 2 == 0 ? DARK_BLUE : LIGHT_GREEN
                            backgroundColor: DARK_BLUE
                        }}
                    >
                        {/*Inhalt*/}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                height: 80,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                            <Text style={styles.flatListItem}>18</Text>
                            <Text style={styles.flatListItem}>10</Text>
                        </View>
                    </View>
                    {/*Abstand zwischen den Leaderboards */}
                    <View
                        style={{
                            height: 2,
                            backgroundColor: 'white'
                        }}
                    ></View>
                </View>
            </Swipeout>
        );
    }
}
