import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { LIGHT_GREEN, DARK_GREEN } from '../constans';
import Subject from './Subject';
import GradesInput from './GradesInput';

interface IInterRankingProps {
    SubjectsList: string[];
}

export default class InterRanking extends Component<IInterRankingProps> {
    SubjectsList = this.props.SubjectsList;
    renderLeaderboard() {
        let ReturnSubjects = [];
        for (let item of this.SubjectsList) {
            ReturnSubjects.push(
                <View key={item} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Subject message={item} />
                    <View
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: 20,
                            marginVertical: 5
                        }}
                    >
                        {/*the information needs to get from the server*/}
                        <Text>#10</Text>
                    </View>
                </View>
            );
        }
        return ReturnSubjects;
    }

    render() {
        return this.renderLeaderboard();
    }
}
