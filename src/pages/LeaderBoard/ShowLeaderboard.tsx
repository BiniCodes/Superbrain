import React from 'react';
import { Text, View } from 'react-native';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import { LeaderboardEntry, Item } from '../../models/Leaderboard';
import { http, getAll, updateItem } from '../../services/Server';
import { ScrollView } from 'react-native-gesture-handler';
import Subject from '../../components/Subject';
import NumberInput from '../../components/NumberInput';
import DropDown from '../../components/DropDown';
import CustomizeButton from '../../components/CustomizeButton';
import { DARK_BLUE } from '../../constans';

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
                        //render only subjects that is picked
                        if (item.status) {
                            return (
                                <View
                                    key={item.name}
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Subject message={item.name} />
                                    <DropDown
                                        onChange={this.onDropDownChange}
                                        item={item}
                                        PossibleChoices={[
                                            '1',
                                            '2',
                                            '3',
                                            '4',
                                            '5',
                                            '6',
                                            '7',
                                            '8',
                                            '9',
                                            '10',
                                            '11',
                                            '12',
                                            '13',
                                            '14',
                                            '15'
                                        ]}
                                        width={100}
                                    />
                                </View>
                            );
                        }
                    })}
                </ScrollView>
                <View style={{ height: 70 }}>
                    <CustomizeButton
                        message="Save"
                        marginHorizontal={70}
                        paddingVertical={10}
                        backgroundColor={DARK_BLUE}
                        color="#ffffff"
                        textAlign="center"
                        borderRadius={4}
                        borderColor={DARK_BLUE}
                        handleOnPress={() => this.saveItem(this.state.leaderboard)}
                    />
                </View>
            </View>
        );
    }

    onDropDownChange = (item: Item) => {
        console.log(item);

        //  items: this.state.items.map(x => (x.name === item.name ? { ...item, status: !item.status } : x))

        const newItem = this.state.leaderboard.subjects.map(entry => (entry.name === item.name ? { ...item } : entry));
        let pp = this.state.leaderboard;
        pp.subjects = newItem;
        this.setState({ leaderboard: pp });
        console.log('update Item in leaderboard state');
    };

    saveItem = (board: LeaderboardEntry) => {
        //  console.log(board);
        updateItem(board);
    };
}
