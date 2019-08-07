import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Alert } from 'react-native';
import { DARK_BLUE, LIGHT_GREEN } from '../constans';
import { LeaderboardEntry } from '../models/Leaderboard';
import Swipeout from 'react-native-swipeout';

interface IFlatListItemProps {
    boards: LeaderboardEntry[];
    index: number;
    parentFlatList: any;
    item: LeaderboardEntry;
    handleDelete: (id: LeaderboardEntry) => void;
}

interface IFlatListItemState {
    activeRowKey: any;
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
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
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            backgroundColor: this.props.index % 2 == 0 ? DARK_BLUE : LIGHT_GREEN
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                height: 100
                            }}
                        >
                            <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            height: 1,
                            backgroundColor: 'white'
                        }}
                    ></View>
                </View>
            </Swipeout>
        );
    }
}
