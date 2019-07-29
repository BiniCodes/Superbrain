import React from "react";
import {Button ,View, Text, StyleSheet} from "react-native";

interface IThirdPageProps  {
    navigation: any
}

const styles = StyleSheet.create({
    red: {
        backgroundColor: "red",
    },
});

export default class Welcome extends React.Component<IThirdPageProps> {
    render() {
        return (
            <View>
                <Text>Hello</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}