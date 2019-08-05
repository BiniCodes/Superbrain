import React, { Component } from 'react';
import { View, Picker } from 'react-native';
import { LIGHT_GREEN } from '../constans';
import Subject from './Subject';
import GradesInput from './GradesInput';

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

                    <GradesInput
                        maxLength={1}
                        height={50}
                        borderColor={LIGHT_GREEN}
                        borderWidth={1}
                        textAlign="center"
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
