import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { LIGHT_GREEN } from '../constans';
import Subject from './Subject';
import GradesInput from './GradesInput';
import DropDown from './DropDown';

interface ILeaderboardProps {
    SubjectsList: string[];
}

export default class Leaderboard extends Component<ILeaderboardProps> {
    SubjectsList = this.props.SubjectsList;
    renderLeaderboard() {
        let ReturnSubjects = [];
        for (let item of this.SubjectsList) {
            ReturnSubjects.push(
                <View key={item} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Subject message={item} />

                    <DropDown
                        width={100}
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
                    />
                </View>
            );
        }
        return ReturnSubjects;
    }

    render() {
        return this.renderLeaderboard();
    }
}
