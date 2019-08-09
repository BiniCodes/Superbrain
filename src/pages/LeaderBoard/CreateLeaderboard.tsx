import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import ContinueButtonBottom from '../../components/ContinueButtonBottom';
import Subject from '../../components/Subject';
import ToggleBtn from '../../components/ToggleBtn';
import { Item, LeaderboardEntry } from '../../models/Leaderboard';
import { saveToServer } from '../../services/Server';

interface ICreateLeaderboardProps {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface ICreateLeaderboardState {
    items: Item[];
    leaderboard: LeaderboardEntry;
    saveSuccess: boolean;
}

const makeid = length => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
};

// funktion die etwas holt
const getItems = (): Item[] => {
    return [
        {
            name: 'Biologie',
            value: 1,
            status: true
        },
        {
            name: 'Chemie',
            value: 1,
            status: false
        },
        {
            name: 'Physik',
            value: 1,
            status: false
        },
        {
            name: 'Mathe',
            value: 1,
            status: false
        },
        {
            name: 'Deutsch',
            value: 1,
            status: false
        },
        {
            name: 'Englisch',
            value: 1,
            status: false
        },
        {
            name: 'Französisch',
            value: 1,
            status: false
        },
        {
            name: 'Spanisch',
            value: 1,
            status: false
        },
        {
            name: 'Sport',
            value: 1,
            status: false
        },
        {
            name: 'Kunst',
            value: 1,
            status: false
        }
    ];
};

export default class CreateLeaderboard extends React.Component<ICreateLeaderboardProps, ICreateLeaderboardState> {
    public static navigationOptions = {
        title: 'Creating leaderboard'
    };
    private id;
    constructor(props: ICreateLeaderboardProps) {
        super(props);
        this.id = makeid(10);
        this.state = {
            items: getItems(),
            leaderboard: null,
            saveSuccess: false
        };
    }

    public componentDidUpdate(prev: ICreateLeaderboardProps, prevState: ICreateLeaderboardState) {
        if (this.state.saveSuccess !== prevState.saveSuccess) {
            this.props.navigation.navigate('ListLeaderBoards');
        }
    }

    public render() {
        if (this.state.items.length < 0) {
            return (
                <View style={{ height: 40 }}>
                    <Text style={{ textAlign: 'center', fontSize: 25 }}>LOADING</Text>
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
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>{this.id}</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {this.state.items.map(item => {
                        return (
                            <View
                                key={item.name}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Subject message={item.name} />
                                <ToggleBtn handleClick={() => this.handleToggle(item)} status={item.status} />
                            </View>
                        );
                    })}
                </ScrollView>
                <ContinueButtonBottom handleOnPress={this.handleSave} />
            </View>
        );
    }

    // spread operator map und sharthand szntax
    private handleToggle = (item: Item) => {
        this.setState({
            items: this.state.items.map(x => (x.name === item.name ? { ...item, status: !item.status } : x))
        });
    };

    private handleSave = () => {
        const entry: LeaderboardEntry = {
            id: null,
            name: this.id,
            subjects: this.state.items
        };
        saveToServer(entry).then(_ => {
            this.setState({ saveSuccess: true });
        });
    };
}
